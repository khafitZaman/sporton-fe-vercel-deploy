"use client";
import Button from "@/app/(landing)/component/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Category, Product } from "@/app/types";
import { getAllCategories } from "@/app/services/category.services";
import { createProduct, updateProduct } from "@/app/services/product.services";
import { toast } from "react-toastify";
import { getImageUrl } from "@/app/lib/api";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  product?: Product | null;
}

type ProductFormData = {
  name: string;
  price: number;
  stock: number;
  categoryId: string;
  description: string;
}

const ProductModal = ({isOpen, onClose, onSuccess, product}: TProductModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string|null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSubmiting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: 0,
    stock: 0,
    categoryId: "",
    description: "",
  });

  const isEditMode = !!product;

  const fetchCategories = async () => {
    try{
      const data = await getAllCategories();
      setCategories(data);
    }catch(e){
      console.error("Failed to fetch categories", e);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {id, value} = e.target;
    setFormData((prev) => ({...prev, [id]: value}));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try{
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price.toString());
      data.append("stock", formData.stock.toString());
      data.append("description", formData.description);
      data.append("categoryId", formData.categoryId);
      if(image){
        data.append("image", image);
      }

      if(isEditMode){
        await updateProduct(product._id, data);
      }else{
        await createProduct(data);
      }

      //reset form
      setFormData({
        name: "",
        price: 0,
        stock: 0,
        categoryId: "",
        description: "",
      });

      setImage(null);
      setImagePreview(null);

      toast.success(isEditMode ? "Product Updated Successfully" : "Product Created SuccessFully");

      onSuccess?.();
      onClose?.();
    }catch(e){
      console.error(isEditMode ? "Failed to update product" : "Failed to create product", e);
      toast.error(isEditMode ? "Failed to update product" : "Failed to create product");
    }finally{
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if(isEditMode && isOpen) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        categoryId: product.category._id,
        stock: product.stock
      });
      setImagePreview(product.imageUrl ? getImageUrl(product.imageUrl) : null);
    }else if(isOpen) {
      setFormData({
        name: "",
        price: 0,
        stock: 0,
        categoryId: "",
        description: "",
      });

      setImage(null);
      setImagePreview(null);
    }
  }, [isOpen, product]);

  useEffect(()=>{
    fetchCategories();
  }, [])
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEditMode ? "Edit Product" : "Add New Product"}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50"><ImageUploadPreview label="Product Image" value={imagePreview} 
            onChange={
              (file) => {
                setImage(file);
                setImagePreview(URL.createObjectURL(file));
              }
            } />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="e. g. Sporton Shoes" value={formData.name} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="price">Price (IDR)</label>
                <input type="text" id="price" name="price" placeholder="400000" value={formData.price} onChange={handleChange}/>
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Product Stock</label>
                <input type="text" id="stock" name="stock" placeholder="e. g. Sporton Shoes" value={formData.stock} onChange={handleChange}/>
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="categoryId">Categories</label>
              <select id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleChange}>
                <option disabled>Select Categories</option>
                {
                  categories.map((category) => (
                    <option value={category._id} key={category._id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Product Detail" rows={7} value={formData.description} onChange={handleChange}></textarea>
        </div>
        <Button className="ml-auto rounded-lg" onClick={handleSubmit} disabled={isSubmiting} type="submit">
          {isEditMode ? "Update Product" : "Create Product" }
        </Button>
      </form>
    </Modal>
  )
}

export default ProductModal;
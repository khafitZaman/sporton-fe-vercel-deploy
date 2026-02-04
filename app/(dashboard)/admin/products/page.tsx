"use client";
import Button from "@/app/(landing)/component/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../component/products/product-table";
import ProductModal from "../../component/products/product-modal";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.services";
import { toast } from "react-toastify";
import DeleteModal from "../../component/ui/delete-modal";

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDeleteId, setProductToDeleteID] = useState("");
  const fetchProduct = async () => {
    try{
      const data = await getAllProducts();
      if(data) {
        setProducts(data);
      }
    }catch(error){
      console.error("Failed to fetch products", error)
    }
  }

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true)
  }

  const handleDelete = (id: string) => {
    setProductToDeleteID(id);
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm =  async () => {
    if(!productToDeleteId) return;
    try{
      await deleteProduct(productToDeleteId);
      fetchProduct();
      toast.success("Product Deleted Successfully");
      setIsDeleteModalOpen(false);
      setProductToDeleteID("");
    }catch(e){
      console.error("Failed To Delete Product", e);
      toast.error("Failed To Delete Product");

    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  return(
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Product Manager</h1>
          <p className="opacity-50">Manage your inventory, price, and stock</p>
        </div>
        <Button className="rounded-xl" onClick={() => setIsModalOpen(true)} >
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable products={products} onDelete={handleDelete} onEdit={handleEdit} />
      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} onSuccess={fetchProduct} product={selectedProduct}/>
      <DeleteModal isOpen={isDeleteModalOpen} onClose={()=>setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm} />
    </div>
  )
}

export default ProductManagement;
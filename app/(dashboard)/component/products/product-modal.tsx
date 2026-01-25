"use client";
import Button from "@/app/(landing)/component/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({isOpen, onClose}: TProductModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string|null>(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="flex flex-col gap-6">
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
              <label htmlFor="productName">Name</label>
              <input type="text" id="productName" name="productName" placeholder="e. g. Sporton Shoes" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="productPrice">Price (IDR)</label>
                <input type="text" id="productPrice" name="productPrice" placeholder="400000" />
              </div>
              <div className="input-group-admin">
                <label htmlFor="productStock">Product Stock</label>
                <input type="text" id="productStock" name="productStock" placeholder="e. g. Sporton Shoes" />
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="productCategories">Categories</label>
              <select id="productCategories" name="productCategories">
                <option disabled>Select Categories</option>
                <option value="">Running</option>
                <option value="">Football</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Product Detail" rows={7}></textarea>
        </div>
        <Button className="ml-auto rounded-lg" >Create Product</Button>
      </div>
    </Modal>
  )
}

export default ProductModal;
"use client";
import Button from "@/app/(landing)/component/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TCategoriesModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const CategoriesModal = ({isOpen, onClose}: TCategoriesModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string|null>(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50"><ImageUploadPreview label="Category Image" value={imagePreview} 
            onChange={
              (file) => {
                setImage(file);
                setImagePreview(URL.createObjectURL(file));
              }
            } />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="categoryName">Name</label>
              <input type="text" id="categoryName" name="categoryName" placeholder="e. g. Category" />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" placeholder="Category Detail" rows={7}></textarea>
            </div>
          </div>
        </div>
        <Button className="ml-auto rounded-lg" >Create Category</Button>
      </div>
    </Modal>
  )
}

export default CategoriesModal;
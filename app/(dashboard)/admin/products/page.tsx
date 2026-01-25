"use client";
import Button from "@/app/(landing)/component/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../component/products/product-table";
import ProductModal from "../../component/products/product-modal";
import { useState } from "react";

const ProductManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return(
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Product Manager</h1>
          <p className="opacity-50">Manage your inventory, price, and stock</p>
        </div>
        <Button className="rounded-xl" onClick={() => setIsOpen(true)} >
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable/>
      <ProductModal isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  )
}

export default ProductManagement;
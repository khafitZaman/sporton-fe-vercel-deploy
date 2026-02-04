"use client";
import Button from "@/app/(landing)/component/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoriesTable from "../../component/categories/category-table";
import CategoryModal from "../../component/categories/category-modal";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import { deleteCategory, getAllCategories } from "@/app/services/category.services";
import { toast } from "react-toastify";
import DeleteModal from "../../component/ui/delete-modal";

const CategoryManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>();
  const [category, setCategory] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState("");

  const fetchCategories = async () => {
    try{
      const data = await getAllCategories();
      if(data) {
        setCategory(data);
      }
    }catch(e){
      console.error("Failed to fetch categories", e);
    }
  }

  const handleDelete = (id:string) => { 
    setCategoryToDeleteId(id);
    setIsDeleteModalOpen(true);
  }

  const handleDeleteConfirm = async () => {
    if(!categoryToDeleteId) return;
      try{
        await deleteCategory(categoryToDeleteId);
        fetchCategories();
        toast.success("Category Deleted Successfully");
        setIsDeleteModalOpen(false);
        setCategoryToDeleteId("");
      }catch(e){
        console.error("Failed To Delete Category", e);
        toast.error("Failed To Delete Category");
      }
  }

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  }

  useEffect(()=>{
    fetchCategories();
  }, [])

  return(
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Category Management</h1>
          <p className="opacity-50">Organize your products into categories.</p>
        </div>
        <Button className="rounded-xl" onClick={() => setIsModalOpen(true)} >
          <FiPlus size={24} />
          Add Category
        </Button>
      </div>
      <CategoriesTable categories={category} onDelete={handleDelete} onEdit={handleEdit}/>
      <CategoryModal isOpen={isModalOpen} onClose={handleCloseModal} category={selectedCategory} onSuccess={fetchCategories}/>
      <DeleteModal isOpen={isDeleteModalOpen} onClose={()=>setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm} />
    </div>
  )
}

export default CategoryManagement;
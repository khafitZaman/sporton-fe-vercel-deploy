"use client";
import Button from "@/app/(landing)/component/ui/button";
import { FiPlus } from "react-icons/fi";
import BankInfoList from "../../component/bank-info/bank-info-list";
import BankInfoModal from "../../component/bank-info/bank-info-modal";
import { useEffect, useState } from "react";
import { Bank } from "@/app/types";
import { deleteBank, getAllBanks } from "@/app/services/bank.services";
import { toast } from "react-toastify";
import DeleteModal from "../../component/ui/delete-modal";

const BankInfoManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bankToDeleteId, setBankToDeleteId] = useState("");

  const fetchBank = async () => {
    try{
      const data = await getAllBanks();
      setBanks(data);
    }catch(e){
      console.error("Failed to fetch bank data", e);
    }
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBank(null);
  }

  const handleEdit = (bank: Bank) => {
    setSelectedBank(bank);
    setIsModalOpen(true);
  }

  const handleDelete = (id: string) => {
    setBankToDeleteId(id);
    setIsDeleteModalOpen(true);
  }

  const handleDeleteConfirm = async () => {
    if(!bankToDeleteId) return;
    
    try{
      await deleteBank(bankToDeleteId);
      toast.success("Bank info deleted successfully");
      setBankToDeleteId("");
      setIsDeleteModalOpen(false);
      fetchBank();
    }catch(e){
      console.error("Failed to delete bank info", e);
      toast.error("Failed to delete bank info");
    }
  }

  useEffect(() =>  {
    fetchBank()
  }, [])

  return(
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Information</h1>
          <p className="opacity-50">Manage destination accounts for customer transfers.</p>
        </div>
        <Button className="rounded-xl" onClick={() => setIsModalOpen(true)} >
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>
      <BankInfoList banks={banks} onEdit={handleEdit} onDelete={handleDelete} />
      <BankInfoModal isOpen={isModalOpen} onClose={handleCloseModal} onSuccess={fetchBank} bank={selectedBank} />
      <DeleteModal isOpen={isDeleteModalOpen} onClose={()=> setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm} />
    </div>
  )
}

export default BankInfoManagement;
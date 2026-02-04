"use client";
import TransactionTable from "../../component/transactions/transaction-table";
import TransactionModal from "../../component/transactions/transaction-modal";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/types";
import { getAlltransaction, updateTransaction } from "@/app/services/transaction.services";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransaction = async () => {
    try{
      const data = await getAlltransaction();
      setTransactions(data);
    }catch(e){
      console.error("Failed to fetch transaction", e);
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  }
  const handleViewDetail = (transaction: Transaction) => {
    setIsModalOpen(true);
    setSelectedTransaction(transaction);
  }

  const handleStatusChange = async (id: string, status: "paid" | "rejected") => {
    try{
      const formData = new FormData();
      formData.append('status', status);
      await updateTransaction(id, formData);
      toast.success("Transaction status updated");
      await fetchTransaction();
    }catch(e){
      console.error("Failed to update transaction status", e);
      toast.error("Failed to update transaction status");
    }finally{
      setIsModalOpen(false);
    }
  }

  useEffect(()=>{
    fetchTransaction();
    }, [])

  return(
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transactions</h1>
          <p className="opacity-50">Verify incoming payments and manage orders.</p>
        </div>
      </div>
      <TransactionTable transactions={transactions} onViewDetail={handleViewDetail}/>
      <TransactionModal transaction={selectedTransaction} onStatusChange={handleStatusChange} isOpen={isModalOpen} onClose={handleCloseModal}/>
    </div>
  )
}

export default TransactionManagement;
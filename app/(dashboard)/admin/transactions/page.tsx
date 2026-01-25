"use client";
import TransactionTable from "../../component/transactions/transaction-table";
import TransactionModal from "../../component/transactions/transaction-modal";
import { useState } from "react";

const TransactionManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  }
  const handleViewDetail = () => {
    setIsOpen(true);
  }
  return(
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transactions</h1>
          <p className="opacity-50">Verify incoming payments and manage orders.</p>
        </div>
      </div>
      <TransactionTable onViewDetail={handleViewDetail}/>
      <TransactionModal isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  )
}

export default TransactionManagement;
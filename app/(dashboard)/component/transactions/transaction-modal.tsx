"use client";
import Button from "@/app/(landing)/component/ui/button";
import Modal from "../ui/modal";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionModal = ({isOpen, onClose}: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transaction">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-xs mb-2">Payment Proof</h4>
          <Image src="/images/payment-proof.png" alt="payment proof" width={200} height={40} />
        </div>
        <div>
          <h4>Order Detail</h4>
          <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2.5 text-sm mb-5">
            <div className="flex justify-between font-medium ">
              <div className="opacity-50">Date</div>
              <div className="text-right">2026-01-25</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">John Doe</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">081</div>
            </div>
            <div className="flex justify-between font-medium gap-10">
              <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
              <div className="text-right">Merdeka Street, Jakarta, Indonesia, 332122</div>
            </div>
          </div>
          <h4 className="font-semibold text-xs mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex gap-2 items-center">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8">
              <Image src={"/images/products/product-1.svg"} alt="Product Image" width={30} height={30} />
            </div>
            <div className="font-medium text-xs">Sporton T-shirt</div>
            <div className="font-medium ml-auto text-xs">3 Units</div>
          </div>
          <div className="flex justify-between text-xs mt-6">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">{priceFormatter(4000000)}</div>
          </div>
          <div className="mt-10 flex justify-end gap-5">
            <Button className="text-primary! bg-primary-light! rounded-md" size="small">
              <FiX size={20} />
              Reject
            </Button>
            <Button className="text-white! bg-[#50C252]! rounded-md" size="small">
              <FiCheck size={20} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default TransactionModal;
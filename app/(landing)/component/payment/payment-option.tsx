import { getAllBanks } from "@/app/services/bank.services";
import CartWithHeader from "../ui/cart-with-header";
import { FiCreditCard } from "react-icons/fi";


const PaymentOption = async () => {
  const banks = await getAllBanks();
  return (
    <div className="overflow-auto max-h-150">
      <CartWithHeader title="Payment Option">
        {
          banks.map((payment) => (
            <div key={payment._id} className="flex gap-5 p-5 border-b border-gray-100">
              <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                <FiCreditCard size={24} />
              </div>
              <div className="self-center">
                <div className="font-bold">{payment.bankName}</div>
                <div className="text-sm">{payment.accountNumber}</div>
                <div className="text-sm opacity-70">{payment.accountName}</div>
              </div>
              <div className="ml-auto bg-blue-50 text-gray-800 text-xs  h-fit self-center px-2 py-1 text-center">Bank Transfer</div>
            </div>
          ))
        }
      </CartWithHeader>
    </div>
  )
}

export default PaymentOption;
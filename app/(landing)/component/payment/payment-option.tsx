import CartWithHeader from "../ui/cart-with-header";
import { FiCreditCard } from "react-icons/fi";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: "0123182312",
    account_holder: "PT. Sporton"
  },
  {
    bank_name: "Mandiri",
    account_number: "0123182312",
    account_holder: "PT. Sporton"
  },
  {
    bank_name: "BNI",
    account_number: "0123182312",
    account_holder: "PT. Sporton"
  },
]

const PaymentOption = () => {
  return (
    <CartWithHeader title="Payment Option">
      {
        paymentList.map((payment, index) => (
          <div key={index} className="flex gap-5 p-5 border-b border-gray-100">
            <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
              <FiCreditCard size={24} />
            </div>
            <div className="self-center">
              <div className="font-bold">{payment.bank_name}</div>
              <div className="text-sm">{payment.account_number}</div>
              <div className="text-sm opacity-70">{payment.account_holder}</div>
            </div>
            <div className="ml-auto bg-blue-50 text-gray-800 text-xs  h-fit self-center px-2 py-1">Bank Transfer</div>
          </div>
        ))
      }
    </CartWithHeader>
  )
}

export default PaymentOption;
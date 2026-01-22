"use client";
import priceFormatter from "@/app/utils/price-formatter";
import CartWithHeader from "../ui/cart-with-header";
import FileUpload from "../ui/file-upload";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.services";

const PaymentSteps = () => {
  const {push} = useRouter();
  const [file, setFile] = useState<File|null>();
  const {items, customerInfo, reset} = useCartStore();
  const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

  const handleConfirmPayment = async () => {
    if(!file){
      alert("Please upload your payment receipt!");
      return;
    }

    if(!customerInfo){
      alert("Customer information is missing, please return to checkout");
      push("/checkout");
      return;
    }

    try{
      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append("customerContact", customerInfo.customerContact!.toString());
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append("purchasedItem", JSON.stringify(items.map((item) => ({productId: item._id, qty: item.qty}))));
      formData.append("totalPayment", totalPrice!.toString());

      const res = await transactionCheckout(formData);
      alert('Transaction created Success');
      reset();
      push(`/order-status/${res._id}`);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <CartWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
          <li>
            Transfer the total amount of <strong>Rp. 1.035.000</strong> to your preferred bank account listed under &lsquo;Payment Options&rsquo; (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer, <strong>keep the payment receipt</strong> or a screenshot of the transfer confirmation. This will be needed for the next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the <strong>&lsquo;Upload Receipt & Confirm&rsquo;</strong> button below to validate your transaction. 
          </li>
        </ol>
        <FileUpload onFileSelect={setFile} /> 
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="font-semibold text-sm">Total</div>
          <div className="text-primary font-semibold text-xs">{priceFormatter(totalPrice)}</div>
        </div>
        <Button variant="dark" size="normal" className="w-full mt-4" onClick={handleConfirmPayment}>
          <FiCheckCircle />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CartWithHeader>
  )
}

export default PaymentSteps;
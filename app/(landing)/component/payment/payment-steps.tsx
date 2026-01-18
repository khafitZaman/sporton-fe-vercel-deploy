"use client";
import priceFormatter from "@/app/utils/price-formatter";
import CartWithHeader from "../ui/cart-with-header";
import FileUpload from "../ui/file-upload";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
  const {push} = useRouter();
  const uploadAndConfirm = () => {
    push("/order-status/1");
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
        <FileUpload /> 
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="font-semibold text-sm">Total</div>
          <div className="text-primary font-semibold text-xs">{priceFormatter(1035000)}</div>
        </div>
        <Button variant="dark" size="normal" className="w-full mt-4" onClick={uploadAndConfirm}>
          <FiCheckCircle />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CartWithHeader>
  )
}

export default PaymentSteps;
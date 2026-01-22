"use client";
import OrderInformation from "../component/checkout/order-information";
import CartItem from "../component/checkout/cart-item";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Checkout = () => {
  const {push} = useRouter();
  const {customerInfo, setCustomerInfo} = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
      customerName: "",
      customerContact: null,
      customerAddress: "",
    });

  const handlePayment = () => {
    if(!formData.customerName || !formData.customerContact || !formData.customerAddress){
      alert("Please fill in all fields");
      return;
    }
    setCustomerInfo(formData);
    push("/payment");
  }

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData = {formData} setFormData={setFormData} />
          <CartItem handlePayment={handlePayment} />
          <p>{JSON.stringify(customerInfo)}</p>
        </div>
      </div>
    </main>
  )
}

export default Checkout;
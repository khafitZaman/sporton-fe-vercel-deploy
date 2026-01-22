"use client";
import { CustomerInfo } from "@/app/hooks/use-cart-store";
import CartWithHeader from "../ui/cart-with-header";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>
}

const OrderInformation = ({formData, setFormData}: TOrderInformation) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <CartWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input type="text" placeholder="Type your full name" id="customerName" name="customerName" value={formData.customerName} onChange={handleInputChange}/>
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input type="text" placeholder="Type your whatsapp number" id="customerContact" name="customerContact" value={formData.customerContact ?? ""} onChange={handleInputChange}/>
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea id="customerAddress" name="customerAddress" placeholder="Type your shipping address" rows={7} value={formData.customerAddress} onChange={handleInputChange}></textarea>
        </div>
      </div>
    </CartWithHeader>
  ) 
}

export default OrderInformation;
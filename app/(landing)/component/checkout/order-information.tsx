import CartWithHeader from "../ui/cart-with-header";

const OrderInformation = () => {
  return (
    <CartWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" placeholder="Type your full name" id="full_name" />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number">Whatsapp Number</label>
          <input type="text" placeholder="Type your whatsapp number" id="wa_number" />
        </div>
        <div className="input-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea id="address" placeholder="Type your shipping address" rows={7}></textarea>
        </div>
      </div>
    </CartWithHeader>
  ) 
}

export default OrderInformation;
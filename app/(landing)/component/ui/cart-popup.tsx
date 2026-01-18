export const cartList = [
  {
    name: "Product 1",
    category: "Running",
    price: 329000,
    imgUrl: "product-1.svg",
    qty: 5,
  },
  {
    name: "Product 2",
    category: "Running",
    price: 999000,
    imgUrl: "product-2.svg",
    qty: 5,
  },
  {
    name: "Product 3",
    category: "Running",
    price: 119000,
    imgUrl: "product-3.svg",
    qty: 5,
  },
  {
    name: "Product 4",
    category: "Running",
    price: 119000,
    imgUrl: "product-4.svg",
    qty: 5,
  },
  {
    name: "Product 5",
    category: "Running",
    price: 119000,
    imgUrl: "product-5.svg",
    qty: 5,
  }
];

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartPopup = () => {
  const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);
  const {push} = useRouter();
  const handleCheckout = () => {
    push("/checkout");
  }
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border-gray-200 w-90 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      <div className="overflow-auto max-h-70">
        {
          cartList.map((item, index) => (
            <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
              <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                <Image src={`/images/products/${item.imgUrl}`} width={63} height={63} alt={item.name} className="aspect-square object-contain" />
              </div>
              <div className="self-center">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex gap-3 font-medium text-xs">
                  <div>{item.qty}x</div>
                  <div className="text-primary">
                    {priceFormatter(item.price)}
                  </div>
                </div>
              </div>
              <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto"><FiTrash2 /></Button>
            </div>
          ))
        }
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="font-semibold text-sm">Total</div>
          <div className="text-primary font-semibold text-xs">{priceFormatter(totalPrice)}</div>
        </div>
        <Button variant="dark" size="small" className="w-full mt-4" onClick={handleCheckout}>
          Checkout Now
          <FiArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default CartPopup;
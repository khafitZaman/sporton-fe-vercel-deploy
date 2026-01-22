"use client";

import { useState } from "react";
import Button from "../ui/button";
import { FiShoppingBag, FiArrowRight, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionProps = {
  product: Product,
  stock: number
}

const ProductAction = ({product, stock}:TProductActionProps) => {
  const {push} = useRouter();
  const [count, setCount] = useState(1);
  const {addItem} = useCartStore();

  const handleAddToCart = () => {
    addItem(product, count);
  }

  const checkout = () => {
    push("/checkout");
  }
  
  return (
    <div className="flex gap-5">
      <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{count}</span>
        </div>
        <div className="flex flex-col">
          <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={()=>setCount(count < stock ? count+1 : count)}>
            <FiChevronUp />
          </button>
          <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={()=>setCount(count > 1 ? count - 1 : count)}>
            <FiChevronDown />
          </button>          
        </div>
      </div>
      <Button className="px-15 w-full" onClick={handleAddToCart}>
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button variant="dark" className="px-15 w-full" onClick={checkout}>
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  )
}

export default ProductAction;
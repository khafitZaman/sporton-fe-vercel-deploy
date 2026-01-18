"use client";

import Image from "next/image";
import Link from "next/link";
import {FiSearch, FiShoppingBag} from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";

const Header =  () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  return (
    <header>
      <div  className="flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
          <Image 
            src="/images/logo.svg" 
            alt="SportOn Logo" 
            width={127} 
            height={30} 
          />
        </Link>

        <nav className="flex gap-44 font-medium">
          <Link href="/" className="relative after:content-[''] after:block after:rounded-full after:bg-primary after:h-0.75 after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:translate-y-1 after:absolute ">Home</Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Product</Link>
        </nav>

        <div className="relative flex gap-10 cursor-pointer" onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
          <FiSearch size={24}/>
          <div className="relative">
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
          </div> 
          {
            isCartPopupOpen && <CartPopup />
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
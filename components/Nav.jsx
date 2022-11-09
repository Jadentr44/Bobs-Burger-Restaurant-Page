import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      {/* computer nav */}
      <div className="lg:flex hidden  px-[10%] mt-12">
        <div className="w-[20%]">
          <Link href="/"><Image
            src="/logo.png"
            alt="Picture of the author"
            width={150}
            height={1}
          /></Link>
          
        </div>
        <div className="flex items-center w-full justify-center text-[#ee212d] font-bold text-xl">
          <a className="link mx-12 relative" href="menu">
            Menu
          </a>
          <a className="link mx-12 relative" href="#">
            Deliver
          </a>
          <a className="link mx-12 relative" href="#">
            Burger of the Day
          </a>
          <a className="link mx-12 relative" href="#">
            Meet the Team
          </a>
        </div>
        <div className="flex items-center w-[20%] justify-end text-[#ee212d]">
          <div className="border-2 border-[#ee212d] rounded-xl mx-2 hover:bg-yellow-200">
            <a href="https://www.facebook.com/BobsBurgers/">
              <FaFacebookF className="m-2" size={20} />
            </a>
          </div>
          <div className="border-2 border-[#ee212d] mx-2 rounded-xl hover:bg-yellow-200">
            <a href="https://www.instagram.com/bobsburgersfox/?hl=en">
              <FaInstagram className="m-2" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden block"></div>
    </>
  );
}

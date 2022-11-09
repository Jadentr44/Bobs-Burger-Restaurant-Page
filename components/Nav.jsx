import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function Nav() {
  return (
    <>
      {/* computer nav */}
      <div className="lg:flex hidden  px-[10%] mt-12">
        <div className="w-[20%]">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={150}
            height={1}
          />
        </div>
        <div className="flex items-center w-full justify-center">
          <a className="link mx-12 relative" href="#">
            Menu
          </a>
          <a className="link mx-12 relative" href="#">
            Menu
          </a>
          <a className="link mx-12 relative" href="#">
            Menu
          </a>
          <a className="link mx-12 relative" href="#">
            Menu
          </a>
        </div>
        <div className="flex items-center w-[20%] justify-end">
          <div className="border-2 border-black rounded-xl mx-2 hover:bg-yellow-200">
            <a href="">
              <FaFacebookF className="m-2" size={20} />
            </a>
          </div>
          <div className="border-2 border-black mx-2 rounded-xl hover:bg-yellow-200">
            <a href="">
              <FaInstagram className="m-2" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden block"></div>
    </>
  );
}

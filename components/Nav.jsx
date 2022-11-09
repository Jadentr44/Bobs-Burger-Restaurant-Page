import React from "react";
import Image from "next/image";
import {motion,useCycle} from 'framer-motion'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from 'next/link'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ onClick, isOpen }) => {
  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg
        width="70"
        height="60"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </motion.button>
  );
};

export default function Nav() {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  
  return (
    <>
      {/* computer nav */}
      <nav className="lg:flex hidden  px-[10%] mt-12">
        <div className="w-[20%]">
          <Link href="/"><Image
            src="/logo.png"
            alt="Picture of the author"
            width={150}
            height={1}
          /></Link>
          
        </div>
        <div className="flex items-center w-full justify-center text-[#ee212d] font-bold text-xl">
          <a className="link mx-12 relative" href="Menu">
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
      </nav>

      <div className="lg:hidden block">
        
    <div className="absolute right-5 top-5">

       <MenuButton onClick={toggleDropdown} isOpen={isOpen} />
    </div>
        
    
      </div>
    </>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ onClick, isOpen, width }) => {
  return (
    <motion.button
      className="menu-button  rounded-full rounded-r-none"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg
        width="70"
        height="60"
        style={{ marginTop: "10px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default function Nav() {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const [width, setWidth] = useState("5rem");
  return (
    <>
      {/* computer nav */}
      <nav className="lg:flex hidden  px-[10%] mt-12">
        <div className="w-[20%]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={270}
              height={1}
              
            />
          </Link>
        </div>
        <div className="flex items-center w-full justify-center text-[#ee212d] font-bold text-3xl">
          <Link className="link mx-12 relative" href="/Menu">
            Menu
          </Link>
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
              <FaFacebookF className="m-2" size={35} />
            </a>
          </div>
          <div className="border-2 border-[#ee212d] mx-2 rounded-xl hover:bg-yellow-200">
            <a href="https://www.instagram.com/bobsburgersfox/?hl=en">
              <FaInstagram className="m-2" size={35} />
            </a>
          </div>
        </div>
      </nav>
      {/* phone nav */}
      <nav className="lg:hidden block w-screen ">
        <div className="absolute py-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={150}
              height={1}
            />
          </Link>
        </div>

        <div className="absolute  right-0 top-0">
          <motion.div
            animate={{ width: width }}
            className="border-2 rounded-l-full  flex justify-end overflow-hidden static bg-white"
          >
            <div className="flex  min-w-[79vw] justify-between items-center mr-2 z-0">
              <Link className="" href="/Menu">
                Menu
              </Link>
              <a href="">Deliver</a>
              <a href="">BOTD</a>
              <a href="">Meet the Team</a>
            </div>
            <MenuButton
              onClick={() => {
                toggleDropdown();
                if (isOpen) setWidth("5rem");
                if (!isOpen) setWidth("110vw");
              }}
              isOpen={isOpen}
              width={width}
            />
          </motion.div>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      {/* computer nav */}
      <div className="lg:flex hidden justify-between px-[10%]">
        <div>logo</div>
        <div className="flex">
          <a className="link mx-12 relative" href="#">Menu</a>
          <a className="link mx-12 relative" href="#">Menu</a>
          <a className="link mx-12 relative" href="#">Menu</a>
          <a className="link mx-12 relative" href="#">Menu</a>
        </div>
        <div>social</div>
      </div>

      <div className="lg:hidden block"></div>
    </>
  );
}

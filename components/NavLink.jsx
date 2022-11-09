import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NavLink({ name, location }) {
  const [float, setFloat] = useState("left");
  const [width, setWidth] = useState("0");
  return (
    <a className="link relative" href={location}>{name}</a>
  );
}

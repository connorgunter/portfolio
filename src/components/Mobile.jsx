// import { useClickAway } from "react-use";
// import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
// import { AnimatePresence, motion } from "framer-motion";
// import { routes } from "../routes";
import "../css/Header-Hamburger.css"

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
    </div>
  );
};

export default NavMobile;
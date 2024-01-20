import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Sidemenu = ({ onClose, links, open = false }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          className={`fixed left-0 top-0 w-[80%] flex justify-center h-screen bg-white shadow-lg rounded-r-2xl md:hidden p-5 z-50`}
        >
          <div className="flex flex-col justify-evenly fixed top-0 h-screen">
            {links.map((link, index) => (
              <a
                key={index}
                onClick={onClose}
                href={link.href}
                className="text-[#42307D] font-medium text-[25px] inline-block text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidemenu;

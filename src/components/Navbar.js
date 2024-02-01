import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "./Container";
import Logo from "./Logo";
import Auth from "./Auth";
import Sidemenu from "./Sidemenu";

const links = [
  {
    href: "/",
    label: "Products",
  },
  {
    label: "For Business",
    href: "#features",
  },
  {
    href: "#potential",
    label: "For Schools",
  },
  {
    href: "#benefits",
    label: "Blog",
  },
  {
    href: "#subscribe",
    label: "About Us",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidemenu links={links} open={open} onClose={() => setOpen(false)} />

      <nav className="py-5 bg-transparent backdrop-blur-lg fixed z-30 w-full">
        <Container center className="justify-between">
          <div className="flex items-center gap-5">
            <RxHamburgerMenu
              onClick={() => setOpen(true)}
              className="md:hidden"
              size={28}
            />
            <Logo />
          </div>

          <ul className="md:flex items-center gap-10 hidden">
            {links.map(({ href, label, children }, index) => (
              <li
                key={index}
                className="cursor-pointer text-[#0A0812] font-medium text-[16px] navlink"
              >
                <a className="flex items-center" href={href}>
                  {label}
                  {children ? <RiArrowDropDownLine size={25} /> : null}
                </a>
              </li>
            ))}
          </ul>
          <Auth />
        </Container>
      </nav>
    </>
  );
};

export default Navbar;

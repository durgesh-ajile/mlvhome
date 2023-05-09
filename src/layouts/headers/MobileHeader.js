import Link from "next/link";
import React, { useState } from "react";
import { Blog, Home, Pages, Room } from "./Menu";

const MobileHeader = ({ closeMobileHeader }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    activeIcon = (value) => (value === activeMenu ? "open" : "");
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn" onClick={() => closeMobileHeader()}>
        <i className="icon far fa-times" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link href="/">
            <a>
              <img src="assets/images/logo.png" alt="" title="" />
            </a>
          </Link>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <div className="collapse navbar-collapse show clearfix">
            <ul className="navigation">
            <li className="dropdown"  onClick={() => closeMobileHeader()}>
                        <Link href="/">Home</Link>
                        <ul>
                          <Home />
                        </ul>
                      </li>
                      <li className="dropdown"  onClick={() => closeMobileHeader()}>
                        {/* <Link href="/gallery">Gallary</Link> */}
                        <ul>
                          <Room />
                        </ul>
                      </li>
                      <li  onClick={() => closeMobileHeader()}>
                        {/* <Link href="/services">Services</Link> */}
                      </li>
                      <li  onClick={() => closeMobileHeader()}>
                        {/* <Link href="/about">About Us </Link> */}
                      </li>
                     
                      
                      <li  onClick={() => closeMobileHeader()}>
                        {/* <Link href="/contact">Contact</Link> */}
                      </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default MobileHeader;

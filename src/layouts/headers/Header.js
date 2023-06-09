import Link from "next/link";
import React, { Fragment, useState } from "react";
import Search from "../Search";
import Sidebar from "../Sidebar";
import { Blog, Home, Pages, Room } from "./Menu";
import MobileHeader from "./MobileHeader";
// import Logo from 'assets/images/pgroom5.jpeg'

const Header = ({ headernumber }) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [searchBarTrigger, setSearchBarTrigger] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);
  const mobileHeaderTrigger = () => {
    setMobileHeader(!mobileHeader);
    if (mobileHeader) {
      document.querySelector("body").classList.add("mobile-menu-visible");
    } else {
      document.querySelector("body").classList.remove("mobile-menu-visible");
    }
  };
  return (
    <Fragment>
      <header
        className={`main-header header-style-one ${
          headernumber ? "" : "style-two"
        }`}
      >
        
        <div className="auto-container">
          <div className="text-center">
           
          </div>
        </div>
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/*Nav Box*/}
              <div className="nav-outer">
                {/*Mobile Navigation Toggler*/}
                <div
                  className="mobile-nav-toggler"
                  onClick={() => mobileHeaderTrigger()}
                >
                  <img src="assets/images/icons/icon-bar.png" alt="" />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation">
                      <li className="dropdown">
                        <Link href="/">Home</Link>
                        <ul>
                          <Home />
                        </ul>
                      </li>
                      <li className="dropdown">
                        {/* <Link href="/gallery">Gallary</Link> */}
                        <ul>
                          <Room />
                        </ul>
                      </li>
                      <li>
                        {/* <Link href="/services">Services</Link> */}
                      </li>
                      <li>
                        {/* <Link href="/about">About Us </Link> */}
                      </li>
                     
                      
                      <li>
                        {/* <Link href="/contact">Contact</Link> */}
                      </li>
                      
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="right-column">
                {/* <div className="search-toggler">
                  <i
                    className="far fa-search"
                    onClick={() => setSearchBarTrigger(true)}
                  />
                </div> */}
                <div className="menu-bar sidemenu-nav-toggler">
                  <img
                    src="assets/images/icons/icon-bar3.png"
                    alt=""
                    onClick={() => setSidebarTrigger(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* logo */}
        <div className="auto-container">
          <div className="text-center">
        <div className="logo-box main-logo">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="assets/images/logo.png" alt=""  width={200}/>
                  </a>
                </Link>
                <i><p>"Service Is Salvation"</p></i>
                <h1 style={{fontWeight:"600"}}>MLV Student PG Services</h1>
              </div>
            </div>
            </div>
            </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                {/*Nav Box*/}
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation">
                      <li className="dropdown">
                        <Link href="/">Home</Link>
                        <ul>
                          <Home />
                        </ul>
                      </li>
                      <li className="dropdown">
                        {/* <Link href="/gallery">Gallary</Link> */}
                        <ul>
                          <Room />
                        </ul>
                      </li>
                      <li>
                        {/* <Link href="/services">Services</Link> */}
                      </li>
                      <li>
                        {/* <Link href="/about">About Us </Link> */}
                      </li>
                     
                      
                      <li>
                        {/* <Link href="/contact">Contact</Link> */}
                      </li>
                      
                    </ul>
                  </div>
                </nav>
                </div>
                <div className="right-column">
                  
                  <div
                    className="menu-bar sidemenu-nav-toggler"
                    onClick={() => setSidebarTrigger(true)}
                  >
                    <img src="assets/images/icons/icon-bar3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}
        <MobileHeader closeMobileHeader={() => mobileHeaderTrigger()} />
        {/* End Mobile Menu */}
        <div
          className="nav-overlay"
          style={{ display: sidebarTrigger ? "block" : "none" }}
          onClick={() => setSidebarTrigger(false)}
        >
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
      </header>
      <Sidebar
        open={sidebarTrigger}
        closeSidebar={() => setSidebarTrigger(false)}
      />
      <Search
        open={searchBarTrigger}
        closeSidebar={() => setSearchBarTrigger(false)}
      />
    </Fragment>
  );
};
export default Header;

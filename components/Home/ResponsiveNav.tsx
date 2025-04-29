"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavOpen = () => {
    setShowNav(true);
  };

  const handleNavClose = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Navbar openNan={handleNavOpen} />
      <MobileNavbar showNav={showNav} closeNav={handleNavClose} />
    </div>
  );
};

export default ResponsiveNav;

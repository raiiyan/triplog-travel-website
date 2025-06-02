"use client";

import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handNavSHow = () => setShowNav(true);
  const handCloseNav = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handNavSHow} />
      <MobileNav showNav={showNav} closeNav={handCloseNav} />
    </div>
  );
};

export default ResponsiveNav;

import React, { useState }  from 'react';

import ChildNavbar from './ChildNavbar';
import Sidebar from "./Sidebar";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{width: '100%'}}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ChildNavbar toggle={toggle} />
    </div>
  );
}

export default Navbar;

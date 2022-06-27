import React, { useState }  from 'react';

import Navbar from './header';
import Sidebar from "./sidebar";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{width: '100%'}}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
}

export default App;

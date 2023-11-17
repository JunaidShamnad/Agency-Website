import dynamic from "next/dynamic";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SkipNavigation from './SkipNavigation';
// import Navbar from "";
/*const Navbar = dynamic(
  () => {
    return import("./Navbar");
  },
  { ssr: false }
);*/
// import Navbar from "./React-Navbars/Header";

const layout = ({ children }) => {
  return (
    <>
    <SkipNavigation />
      <Navbar id="main-menu"/>
      {children}
      <Footer id="footer" />
    </>
  );
};

export default layout;

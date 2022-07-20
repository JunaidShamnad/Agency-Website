import dynamic from "next/dynamic";
import Footer from "./Footer";
// import Navbar from "";
const Navbar = dynamic(
  () => {
    return import("./Navbar");
  },
  { ssr: false }
);
// import Navbar from "./React-Navbars/Header";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;

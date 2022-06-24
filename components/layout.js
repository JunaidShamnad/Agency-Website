import Footer from "./Footer";
import Navbar from "./Navbar";
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

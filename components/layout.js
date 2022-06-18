import Footer from "./Footer";
import Navbar from "./Navbar";

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

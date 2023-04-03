import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = ({ isTopMarginRequired = true, children }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
   }, []);

  return (
    <React.Fragment>
      <Header />
      {isTopMarginRequired && (
        <div style={{ backgroundColor: "black", height: "130px" }}>&nbsp;</div>
      )}
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;

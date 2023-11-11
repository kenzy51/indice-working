import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import ProductRequestForm from "../components/productRequests/ProductRequestForm";

const ProductRequests = () => {
  return (
    <div>
      <Navbar />
      <PageBanner pageName="Product requests" pageTitle="Product requests" />
        <ProductRequestForm/>
      <Footer />
    </div>
  );
};
export async function getServerSideProps({ query, locale }) {
  
  return {
    props: {
      // ...(await serverSideTranslations(locale, ["header", "common"])),
    },
  };
}

export default ProductRequests;

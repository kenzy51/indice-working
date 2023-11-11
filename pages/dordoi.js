import React from "react";
import MapComponent from "../components/Shared/Map";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Dordoi = () => {
  return (
    <div>
      <Navbar />
      <PageBanner pageTitle="Dordoi Map" pageName="Dordoi Map" />

      <MapComponent />
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
export default Dordoi;

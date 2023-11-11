import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import BidsForm from "../components/bids/BidsForm";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageBanner from "../components/Common/PageBanner";

const Bids = () => {
  const arrayForms = [
    {
      placeholder: "User id",
    },
    {
      placeholder: "Description",
    },
    {
      placeholder: "Expected price range",
    },
    {
      placeholder: "Status",
    },
  ];
  return (
    <div>
      <Navbar />
      <PageBanner pageTitle="Bids" pageName="Create your own Bid" />
      <BidsForm />
      <Footer />
    </div>
  );
};

// export async function getServerSideProps({ query, locale }) {
//   return {
//     // props: {
//     //   ...(await serverSideTranslations(locale, ["header", "common"])),
//     // },
//   };
// }
export default Bids;

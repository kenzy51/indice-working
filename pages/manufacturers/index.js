import React from "react";
import axios from "axios";
import Navbar from "../../components/_App/Navbar";
import PopularPlacesFilter from "../../components/Common/PopularPlacesFilter";
import ListingArea from "../../components/Listings/ListingArea";
import Footer from "../../components/_App/Footer";
import { withRouter, useRouter } from "next/router";
import baseUrl from "../../utils/baseUrl";
import { ManufacturerList } from "../../components/Manufacturers/ManufacturerComponent";
import { ManufacturerListWithSidebar } from "../../components/Manufacturers/ManufacturerList";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const listImage = "../images/empty-listing.png";

const Manufacturers = ({ user, manufacturers }) => {
  console.log(manufacturers)
  return (
    <>
      <Navbar userRole={user} />
      <ManufacturerListWithSidebar manufacturers={manufacturers} />
      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export async function getServerSideProps({ query, locale }) {
  const page = query.page ? query.page : "1";
  const keyword = query.keyword;
  const title = query.title;
  const location = query.location;
  const category = query.category;
  const payload = {
    params: {
      page,
      limit: 10,
      keyword,
    },
  };
  const url = `${baseUrl}/api/v1/manufacturers`;

  const response = await axios.get(url, payload);
  const manufacturers = response.data;

  return {
    props: {
      manufacturers,
      // ...(await serverSideTranslations(locale, ["header", "common"])),
    },
  };
}
  
export default withRouter(Manufacturers);

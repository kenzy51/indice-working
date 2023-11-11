import React from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Navbar from "../components/_App/Navbar";
import Banner from "../components/HomeOne/Banner";
import CategoryTwo from "../components/Common/CategoryTwo";
import ListingAreaTwo from "../components/Common/ListingAreaTwo";
import DestinationsOne from "../components/Common/DestinationsOne";
import Feedback from "../components/Common/Feedback";
import EventsArea from "../components/HomeOne/EventsArea";
import HowItWorks from "../components/Common/HowItWorks";
import Blog from "../components/HomeOne/Blog";
import AppDownload from "../components/Common/AppDownload";
import Footer from "../components/_App/Footer";
import MainPageCards from "../components/MainPage/MainPageCards";

const Index = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />

      <MainPageCards />

      <Footer />
    </>
  );
};

// export async function getServerSideProps({ query }) {
// 	const page = query.page ? query.page : "1";
// 	const keyword = query.keyword;

// 	const payload = {
// 		params: {
// 			page,
// 			limit: 6,
// 			keyword,
// 		},
// 	};
// 	const url = `${baseUrl}/api/v1/listings`;
// 	const response = await axios.get(url, payload);

// 	return {
// 		props: {
// 			listings: response.data.listings,
// 			totalPages: response.data.totalPages,
// 		},
// 	};
// }

export default Index;

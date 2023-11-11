import Link from "next/link";
import React from "react";
import { MainPageCardItem } from "./MainPageCardItem";
// import { useTranslation } from "react-i18next";

const MainPageCards = () => {
  const items = [
    {
      title: 'manufacturer',
      className: "flaticon-hotel",
      link: "/manufacturers",
      description: "List of the manufacturers",
    },
    {
      title: 'dordoi',
      className: "flaticon-commerce",
      link: "/dordoi",
      description: "Dordoi map location",
    },
    {
      title: 'bids',
      className: "flaticon-hotel",
      link: "/bids",
      description: "Create your own Bid",
    },
    {
      title: 'Product requests',
      className: "flaticon-hotel",
      link: "/product-requests",
      description: "Give your idea to the product",
    },
  ];
  return (
    <div className="container">
      <br />
      <div className="row">
        {items.map((i) => (
          <MainPageCardItem
            iconClassname={i.className}
            link={i.link}
            title={i.title}
            description={i?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPageCards;

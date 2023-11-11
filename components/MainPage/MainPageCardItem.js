import Link from "next/link";
import React from "react";

export const MainPageCardItem = ({title,link,iconClassname,description}) => {
  return (
    <div className="col-lg-6 col-sm-6 col-md-4">
      <div className="single-category-box">
        <div className="icon">
          <i className={iconClassname} style={{width:'200px', height:'200px'}}></i>
        </div>
        <h3>{title}</h3>
        <span></span>
        <Link href={link}>
          <a className="link-btn"></a>
        </Link>
<p>
  {description}
</p>
      </div>
    </div>
  );
};

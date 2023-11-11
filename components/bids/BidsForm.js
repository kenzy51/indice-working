import React from "react";

const BidsForm = () => {
  const arrayForms = [
    {
      placeholder: "Manufacturer id",
    },
    {
      placeholder: "Product request Id",
    },
    {
      placeholder: "Bid amount",
    },
    {
      placeholder: "description",
    },
  ];
  return (
    <div className="container">
      <h3>Create your own bid</h3>
      <form
        style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
      >
        {arrayForms.map((i) => (
          <input placeholder={i.placeholder} className="form-control" />
        ))}
        <div className="col-lg-2 col-md-12 p-0">
          <div className="submit-btn">
            <a className="default-btn">Create</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BidsForm;

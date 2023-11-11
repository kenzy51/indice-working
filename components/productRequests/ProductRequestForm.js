import React from "react";

const ProductRequestForm = () => {
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
    <div className="container">
      <h3>Give your idea to product</h3>
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

export default ProductRequestForm;

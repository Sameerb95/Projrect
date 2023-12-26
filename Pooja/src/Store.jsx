import React from "react";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <>
      <h3>Store</h3>
      <div className="row" style={rowStyles}>
        {storeItems.map((item) => (
          <div key={item.id} className="col" style={colStyles}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

const rowStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
};

const colStyles = {
  flex: "1 0 0",
  maxWidth: "33%",
};

export default Store;

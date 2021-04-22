import React from "react";
import SonucList from "./SonucList";

const Sonuc = ({ sonuc }) => {
  return (
    <div className="row">
      {sonuc.map((item) => (
        <SonucList item={item} />
      ))}
    </div>
  );
};

export default Sonuc;

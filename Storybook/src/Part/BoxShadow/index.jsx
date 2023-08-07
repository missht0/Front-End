import React from "react";
import "./index.scss";
import BS01 from "./BS01";
import BS02 from "./BS02";
import BS03 from "./BS03";
import BS04 from "./BS04";
import BsBtn01 from "./BsBtn01";

const BoxShadow = ({}) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 p-10 bg-gray-200">
      <BS01 />
      <BS02 />
      <BS03 />
      <BS04 />
      <BsBtn01 />
    </div>
  );
};

export default BoxShadow;

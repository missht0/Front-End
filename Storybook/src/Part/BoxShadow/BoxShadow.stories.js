import React from "react";
import BoxShadow from "./index";
import data from "./data";

export default {
  title: "Part",
  component: BoxShadow,
};

const T = (args) => {
  return <BoxShadow {...args} />;
};

export const 阴影 = T.bind({});
阴影.args = {
  ...data,
};

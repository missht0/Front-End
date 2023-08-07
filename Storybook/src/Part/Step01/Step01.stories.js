import React from "react";
import Step01 from "./index";
import data from "./data";

export default {
  title: "Part",
  component: Step01,
};

const Template01 = (args) => {
  return <Step01 {...args} />;
};

export const StepTailwind01 = Template01.bind({});
StepTailwind01.args = {
  ...data,
};

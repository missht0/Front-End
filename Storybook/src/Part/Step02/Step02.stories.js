import React from "react";
import Step02 from "./index";
import data from "./data";

export default {
  title: "Part",
  component: Step02,
};

const Template01 = (args) => {
  return <Step02 {...args} />;
};

export const StepTailwind02 = Template01.bind({});
StepTailwind02.args = {
  ...data,
};

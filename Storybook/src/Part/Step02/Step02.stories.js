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

export const StepType02 = Template01.bind({});
StepType02.args = {
  ...data,
};

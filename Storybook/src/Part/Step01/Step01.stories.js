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

export const StepType01 = Template01.bind({});
StepType01.args = {
  ...data,
};

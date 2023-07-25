import React from 'react';
import PropTypes from 'prop-types';
import Map from './index'
import data from './data'

export default {
  title: 'Part',
  component: Map
};

const Template03 = (args) => {
  return <Map {...args} />;
}

export const MapType = Template03.bind({});
MapType.args = {
  ...data,
};
import React from 'react';
import PropTypes from 'prop-types';
import Title from 'Title';
import { Map as Gmap, APILoader, InfoWindow, Geolocation } from '@uiw/react-amap';
import './index.scss'
import { useRef,useEffect, useState } from 'react';

// const KEY = "AIzaSyBDG2YUxXicahL-Zy21Gu7YZkgqYyT5kbc"
const KEY = "a7a90e05a37d3f6bf76d4a9032fc9129"
// const GMap = Map;


const Map = ({ background, color, title, line, center, zoom, name, code, phone, fax, addr }) => {

  let mapData = {
    mapContainerStyle: {
      width: '100%',
      height: '450px'
    },
    options: {
      mapTypeControl: false
    },
  }

  return (
    <div className="sc-map" style={{ background: `${background}`, color: `${color}` }}>
      <Title title={title} line={line} />

      <div style={{ width: '100%', height: '300px' }}>
        <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
          <Gmap  center={center}  zoom={zoom}>
            <Geolocation 
              // 是否使用高精度定位，默认:true
              enableHighAccuracy={true}
              // 是否使用浏览器定位缓存，默认:true
              useNative={true}
              // 等待用户授权获取地理位置的超时时间，默认:10000
              timeout={10000}
              zoomToAccuracy={false}
              showCircle={false}
              onComplete={(data) => {
                console.log("data",data);
                center = [data.position.lng, data.position.lat];
              }}
            />
            <InfoWindow visiable={true} position={center} >
              <div className="m-info">
                <h1>{name}</h1>
                <p>
                  <span>{code}</span>
                  <span>{phone}</span>
                  <span>{fax}</span>
                  <span>{addr}</span>
                </p>
              </div>
            </InfoWindow>
          </Gmap>
        </APILoader>
      </div>
    </div>
  )
}

Map.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 地图中心点 */
  center: PropTypes.array,
  /** 地图缩放级别 */
  zoom: PropTypes.number,
  /** 公司名称 */
  name: PropTypes.string,
  /** 公司代码 */
  code: PropTypes.string,
  /** 公司电话 */
  phone: PropTypes.string,
  /** 公司传真 */
  fax: PropTypes.string,
  /** 公司地址 */
  addr: PropTypes.string,

};

Map.defaultProps = {
  background: '#fff',
  color: '#000',
  title: '标题',
  line: true,
  center: [35.671088, 139.766306],
  zoom: 17,
  name: '公司名称',
  code: '公司代码',
  phone: '公司电话',
  fax: '公司传真',
  addr: '公司地址',
};

export default Map;




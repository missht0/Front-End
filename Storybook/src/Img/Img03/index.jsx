import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
import Title from '../../Title';
import './index.scss'

const Img03 = ({ background,color,list,change,line,label}) => {
  return (
    <div className="sc-Img03" style={{background:`${background}`, color:`${color}`}}>
      <div className="m-bd">
        {list.map(
          (item, i) =>
            (
              <div className="m-item" key={i}>
                <div className="m-img">
                  <img src={item.img} alt="" />
                </div>
                <div className={`m-rt ${!item.change ^ change ? 'm-ch' : ''}`}>
                  {item?.title && <Title title={item?.title} line={!line} />}
                  {item?.label && 
                    label &&
                      <div className={`m-lab`}>{item.label}</div>
                  }
                  {item?.cnt && <div className="m-cnt">{item.cnt}</div>}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

Img03.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题是否显示下划线 */
  line: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
  /** 标签的显示模式 */
  label: PropTypes.bool,
  /** 左右变换 */
  change: PropTypes.bool
};

Img03.defaultProps = {
  background: '#fff',
  color:'#333',
  line: false,
  list: [],
  label: true,
  change:true
};



export default Img03;

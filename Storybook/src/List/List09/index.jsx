import React from 'react';
import PropTypes from 'prop-types';
import Title from 'Title';
import './index.scss';

const List09 = ({ background,color,line,title,label,list }) => {
  return (
    <div className="sc-list09" style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        {list.map((item, i) => (
          <div className="m-item" key={i}>
            <div className={`m-bdy ${line ? 'm-line' : ''}`}>
              <div className="m-lt">
                {item?.label && 
                  label&&
                (
                  <div className={`m-lb`}>{item?.label}</div>
                )}
                {item?.title && <div className="title">{item?.title}</div>}
              </div>
              {item?.cnt && <div className="m-cnt">{item?.cnt}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


List09.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  sub: PropTypes.string,
  /** 标题是否显示线段 */
  label: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List09.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  sub: 'xxx',
  label:true,
  list: []
};

export default List09;

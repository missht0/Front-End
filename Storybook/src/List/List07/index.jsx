import React from 'react';
import PropTypes from 'prop-types';
import Title from 'Title';
import './index.scss';

const List07 = ({ background,color,title,line,id,list }) => {
  return (
    <div className="sc-list07" style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        {list.map((item, i) => (
          <div className="m-item m-bdy" key={i}>
            <div className="m-lt">
              {item?.title && <div className="title">{item?.title}</div>}
              {item?.label && <div className="label">{item?.label}</div>}
            </div>
            <div className="m-rt">
              {item?.list[0] && (
                <div className="m-cnt">
                  {item.list.map((o, j) => (
                    <span key={j}>
                      {id && <label>{j + 1}. </label>} {o} <br />
                    </span>
                  ))}
                </div>
              )}
              {item?.cnt && <div className="m-cnt m-p">{item?.cnt}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



List07.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 按钮标题 */
  id: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List07.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  id:true,
  list: []
};

export default List07;

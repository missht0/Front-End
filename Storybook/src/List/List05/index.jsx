import React from 'react';
import PropTypes from 'prop-types';
import Title from 'Title';
import './index.scss'

import icon_ossm from 'public/img/ossm.svg'

const List05 =({background,color,title,line,btn,list})=> {

  return (
    <div className="sc-list05" style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        {list.map((item,i)=>
          <div className={(item.ossm)?"m-item ossm":"m-item"} key={i}>

            {item.ossm && 
            <div className="m-icon">
              <img src={icon_ossm} />
            </div>}
            
            <label className="icon">{item.title}</label>
            <span>{item.cnt}</span>
            <p>
              <a>{btn}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


List05.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 按钮标题 */
  btn: PropTypes.string,
  /** 数据内容 */
  list: PropTypes.array, 
};

List05.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: []
};

export default List05


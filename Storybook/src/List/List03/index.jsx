import React from 'react';
import PropTypes from 'prop-types';
import Title from 'Title';
import './index.scss'

const List03 =({dash,icon,background,color,title,line,list})=> {

  const cls = `m-item ${(dash)?'dash':''} ${(icon)?'icon':''}`

  return (
    <div className="sc-list03" style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        {list.map((item,i)=>
          <div className={cls} key={i}>
            <label className={(icon)?'icon':''}>{item.title}</label>
            <span>{item.cnt}</span>
          </div>
        )}
      </div>
    </div>
  )
}



List03.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 是否显示图标 */
  icon: PropTypes.bool,
  /** 是否显示虚线 */
  dash: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List03.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: []
};

export default List03


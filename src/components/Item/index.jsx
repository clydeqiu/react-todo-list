import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  // 组件自身使用的状态数据  则存在自身的state中
  state = {
    mouse: false
  }
  // 鼠标移入、移出
  handleMouse = flag => {
    return ()=>{
      this.setState({mouse: flag})
    }
  }
  handleDelete = id =>{
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
  }
  // 勾选、取消勾选某一个回调  函数柯里化
  handleCheck = id =>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  render() {
    const {mouse} = this.state;
    const {id, name, done} = this.props
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : '#fff'}} 
          onMouseEnter={this.handleMouse(true)} 
          onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=> this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}

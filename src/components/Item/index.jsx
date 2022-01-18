import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  state = {
    mouse: false
  }
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
  // 勾选、取消勾选某一个回调
  handleCheck = id =>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  render() {
    const {mouse } = this.state;
    const {id, name, done} = this.props
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=> this.handleDelete(id) } className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}

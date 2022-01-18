import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.handleCheckAll(event.target.checked)
  }
  handleClearAllDone = () =>{
    this.props.clearAllDone()
  }
  render() {
    // render 中可以写获取props的代码 
    const {todos} = this.props;
    // 已完成/ 全部的数量 可以由计算获得 就无需存在state中
    const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
    const total = todos.length
    return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={doneCount === total && total > 0} onChange={this.handleCheckAll}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
  }
}

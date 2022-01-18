import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {

  }
  handleClearAllDone = () =>{

  }
  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
    const total = doneCount.length
    return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAll}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
  }
}

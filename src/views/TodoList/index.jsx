import React, { Component } from 'react'
import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'
import './index.css'

export default class TodoList extends Component {
  // 状态在哪里 操作状态的方法就在哪里
  state = {
    todos: [
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:false}
    ]
  }
  addTodo = (todoObj) =>{
    const newTodos = [todoObj,...this.state.todos] 
    this.setState({todos: newTodos})
  }
  // 用于更新一个todo对象的选中状态
  updateTodo = (id, done)=>{
    const {todos} = this.state;
    // 数组的map函数的返回值为新数组
    const newTodos = todos.map(todoObj =>{
      // ES6中语法 如果对象中没有该属性名，则新增属性，如果有，则替换对象属性值
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }
  deleteTodo = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter(todoObj => {return todoObj.id !== id})
    this.setState({todos:newTodos})
  }
  // 全选、全不选
  handleCheckAll = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todoObj => {return {...todoObj,done}})
    this.setState({todos: newTodos})
  }
  // 清除所有选中
  clearAllDone = () => {
    const {todos} = this.state
    // 过滤得到未勾选的 则变相删除已勾选的数据
    const newTodos = todos.filter(todoObj => !todoObj.done)
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className='todoList'>
        <Header addTodo={this.addTodo}/>
        <List updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <Footer handleCheckAll={this.handleCheckAll} clearAllDone={this.clearAllDone} todos={this.state.todos} />
      </div>
    )
  }
}

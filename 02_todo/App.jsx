import { useState } from 'react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

class App extends Component {
  state = {
    todos: [
      {id:'001', name:'吃饭', done:true},
      {id:'002', name:'睡觉', done:true},
      {id:'003', name:'打代码', done:false},
    ]
  }

  addTodo = (todoObj) =>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }

  changeTodo = (id,done) =>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      if(todo.id === id) return {...todo,done}
      else return todo
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) =>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos:newTodos})
  }
  deleteDone = () =>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    })
    this.setState({todos:newTodos})
  }
  checkAll = (done) =>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      return {...todo,done}
    })
    this.setState({todos:newTodos})
  }
  static propTypes ={

  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} deleteDone={this.deleteDone} checkAll={this.checkAll}/>
        </div>
      </div>
    )
  }
}

export default App

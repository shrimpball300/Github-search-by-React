import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import '../App.css'

export default class Header extends Component {
    handleKeyUp=(event)=>{
        const {keyCode,target} = event
        if(keyCode !== 13) return
        if(target.value.trim() === '') {
            alert('please input')
            return
        }
        const todoObj = {name:target.value,done:false,id:nanoid()}
        this.props.addTodo(todoObj)
        target.value = ''
    }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
        </div>
    </div>
    )
  }
}

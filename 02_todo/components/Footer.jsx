import React, { Component } from 'react'
import '../App.css'

export default class Footer extends Component {
    deleteDone=()=>{
        return ()=>{
            if(window.confirm('sure?')){
                this.props.deleteDone()
            }
        }
    }
    checkAll=()=>{
        return (event)=>{
            this.props.checkAll(event.target.checked)
        }
    }
    render() {
        const {todos} = this.props
        const doneTodos = todos.filter((todo)=>{
            return todo.done
        })
        return (
        <div>
            <div className="todo-footer">
            <label>
                <input type="checkbox" checked={doneTodos.length === todos.length && todos.length !== 0} onChange={this.checkAll()}/>
            </label>
            <span>
                <span>已完成{doneTodos.length}</span> / 全部{todos.length}
            </span>
            <button className="btn btn-danger" onClick={this.deleteDone()}>清除已完成任务</button>
            </div>
        </div>
        )
    }
}

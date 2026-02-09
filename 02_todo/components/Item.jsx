import React, { Component } from 'react'
import '../App.css'

export default class Item extends Component {
    state = {mouse:false}
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck=(id)=>{
        return (event)=>{
            this.props.changeTodo(id,event.target.checked)
        }
    }
    handldeDelete=(id)=>{
        return ()=>{
            if(window.confirm('sure?')){
                this.props.deleteTodo(id)
            }
        }
    }
  render() {
    const {name,done,id} = this.props
    const {mouse} = this.state
    return (
      <div>
        <li style={{backgroundColor:mouse? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
            <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:mouse? 'block' : 'none'}} onClick={this.handldeDelete(id)}>删除</button>
          </li>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search=()=>{
        const {keyWordElement} = this;
        PubSub.publish('test',{isFirst:false,isLoading:true});
        axios.get(`https://api.github.com/search/users?q=${keyWordElement.value}`).then(
            response=>{
                PubSub.publish('test',{isLoading:false,users:response.data.items});
            },
            error=>{
                PubSub.publish('test',{isLoading:false,err:error.message});
            }
        );
    }
    render() {
        return (
        <div>
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
            </section>
        </div>
        )
    }
}

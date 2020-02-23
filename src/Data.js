import React, { Component } from 'react'

export default class Data extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="full">
              <div className="searchBar">
              <input type="text" placeholder="Github Username" onChange={this.props.getname}></input>
              <button onClick={this.props.fetchData}>Stalk</button>
              </div>
              <div className="data">
              {this.props.avatar?(
                <img src={this.props.avatar} alt="user avatar"></img>
              ):(
                <React.Fragment />
              )}
              <div className="content">
              {this.props.name?(<div>{this.props.message}</div>):<React.Fragment/>}
              {this.props.name?(<div>Name :  {this.props.name}</div>):<React.Fragment/>}
              {this.props.repos?(<div>Repos :  {this.props.repos}</div>):<React.Fragment/>}
              {this.props.bio?(<div>Bio :  {this.props.bio}</div>):(<React.Fragment/>)}
              </div>
            </div>
              
            </div>
          )
    }
}

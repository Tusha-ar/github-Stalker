import React, { Component } from 'react'
import Axios from 'axios'
import './App.css'
import Data from './Data';
import DataFun from './DataFun';

class App extends Component {
  constructor(){
    super();
    this.state={
      userName: null,
      name: null,
      repos: null,
      bio: null,
      avatar: null,
      message: null,
      bool: false
    }
  }
  getname=(e)=>{
    this.setState({
      userName: e.target.value
    })
  }
  fetchData=()=>{
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res=>{
      console.log(res.data)
      this.setState({
        name: res.data.name,
        repos: res.data.public_repos,
        bio: res.data.bio,
        avatar: res.data.avatar_url,
        message: res.data.message,
        bool: false
      })
    })
    .catch((err)=>{
      this.setState({
        bool: true,
        message: "No Data Found!!!"
      })
      throw err;
    })
  }
  render() {
    if(this.state.bool)
    {
      return(
        <div>
        <div className="searchBar">
        <input type="text" placeholder="Github Username" onChange={this.getname}></input>
        <button onClick={this.fetchData}>Stalk</button>
        </div> 
        <div className="no_data">No Data Found</div>
        </div>
      ) 
    }
    else if(this.state.bool === false){
    const {name, repos, bio, avatar} = this.state;
        return(
          <Data avatar={avatar} name={name} repos={repos} bio={bio} fetchData={this.fetchData} getname={this.getname}/>
          //<DataFun avatar={avatar} name={name} repos={repos} bio={bio} fetchData={this.fetchData} getname={this.getname}/>
        )
        }
  }
}
export default App;
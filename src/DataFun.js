import React from 'react'

export default function DataFun(props) {
    return (
        <div className="full">
          <div className="searchBar">
          <input type="text" placeholder="Github Username" onChange={props.getname}></input>
          <button onClick={props.fetchData}>Stalk</button>
          </div>
          <div className="data">
          {props.avatar?(
            <img src={props.avatar} alt="user avatar"></img>
          ):(
            <React.Fragment />
          )}
          <div className="content">
          {props.name?(<div>{props.message}</div>):<React.Fragment/>}
          {props.name?(<div>Name :  {props.name}</div>):<React.Fragment/>}
          {props.repos?(<div>Repos :  {props.repos}</div>):<React.Fragment/>}
          {props.bio?(<div>Bio :  {props.bio}</div>):(<React.Fragment/>)}
          </div>
        </div>
          
        </div>
      )
}

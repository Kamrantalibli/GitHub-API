import React, { Component } from 'react'

export class MainInside extends Component {
    render() {
      const {login,avatar_url,html_url,id} = this.props.istifadeci;
    return (
        <div className="main-inside">
        <div className="main-title">
          <div className="title">
          <div className="title-left">
          <img src={avatar_url} alt="" />
        </div>
        <div className="title-right">
          <div className="right-title">{login}</div>
          <div className="right-id">{id}</div>
          </div>
            </div> 
        <a href={html_url}  className='follow'>Go Profile</a>
        </div>
      </div>
    )
  }
}

export default MainInside
import React, { Component } from 'react'
import MainRight from './MainRight';
import MainInside from './MainInside';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className="main-left">
        {this.props.usersvalue.map(u=>(
            <MainInside istifadeci={u}   />
          ))}
        
        </div>  
        <MainRight/>
      </div>
    )
  }
}

export default Main
import React, { Component } from 'react'
import profil from '../img/profil.png'

class Offcanvas extends Component {
  render() {
    return (
            <div className="canvas">
                <div className="canvas-header">
                    <h6>Recent Repositories</h6>
                    <button><i class="fa-regular fa-floppy-disk"></i> New</button>
                </div>
                <input type="text" placeholder='Find a repository...' />
                <ul>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/yeni</h6></div>
                    </li>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/Busino-Template</h6></div>
                    </li>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/HomeWork2</h6></div>
                    </li>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/homework</h6></div>
                    </li>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/Kamrantalibli</h6></div>
                    </li>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/template</h6></div>
                    </li>
                    <li>
                        <div className="img"><img src={profil} alt="err" /></div>
                        <div className="repo"><h6>Kamrantalibli/Kamrantalibli.gihub.io</h6></div>
                    </li>
                </ul>
                <hr />

                <h6 className='h6'>Recent activity</h6>
                <span>When you take actions across GitHub, we’ll provide links to that activity here.</span>
            </div>
    )
  }
}

export default Offcanvas
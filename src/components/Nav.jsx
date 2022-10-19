import React, { Component } from 'react'

class Nav extends Component {
  constructor(props){
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.mySubmit = this.mySubmit.bind(this);
    this.state ={
      keyword:""
    }
  }

  inputChange(e){
      this.setState({
        keyword:e.target.value
      })
  }

  mySubmit(e){
    e.preventDefault();
    this.props.searchValue(this.state.keyword);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid my-2 mx-4">
          <a className="navbar-brand" href={this.props.url}><i className={this.props.icon}></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form onSubmit={this.mySubmit}  className="d-flex" role="search">
              <input onChange={this.inputChange} className="form-control bg-dark  py-1 px-4 text-light"  placeholder="Search or jump to..." />
              <button className="btn btn-outline-light" type="submit">/</button>
            </form>
            <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Pull requests</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Issues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Explore</a>
              </li>
            
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link" href="#"><i className={this.props.bell}></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#"><i className={this.props.plus}></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#"><i className={this.props.profil}></i></a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
import React, { Component } from "react";
import Nav from "./Nav";
import Offcanvas from "./Offcanvas";
import Main from "./Main";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state = {
      users: []
    }
  }
  searchUsers(keyword){
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users:res.data.items}))
}

  render() {
    return (
      <div>
        <Nav url={'https://github.com'} icon={"fa-brands fa-github"} profil={"fa-solid fa-user"} plus={"fa-solid fa-plus"} bell={"fa-regular fa-bell"}  searchValue={this.searchUsers}/>
        <div className="contain">
        <Offcanvas/>
        <Main usersvalue = {this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;

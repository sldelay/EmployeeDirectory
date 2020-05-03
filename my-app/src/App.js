import React, {Component} from 'react';
import './App.css';
import NavbarComp from "./components/Navbar"
import Jumbo from "./components/Jumbotron"
import SearchBar from "./components/SearchBar"
import employees from "./employees.json"


class App extends Component {

  state = {
    search: "",
    results: [employees]
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    alert(`You have searched for ${this.state.search}`);
    this.setState({
      search: ""
    });
  }; 

 render () {
  return (
    <>
    <NavbarComp />
    <Jumbo />
    <SearchBar 
    handleInputChange={this.handleInputChange}
    handleFormSubmit={this.handleFormSubmit}
    />
    </>
  );
 }
}

export default App;

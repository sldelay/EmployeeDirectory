import React, { Component } from 'react';
import './App.css';
import NavbarComp from "./components/Navbar";
import Jumbo from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import employees from "./employees.json";
import EmployeeDisplay from "./components/EmployeeDisplay";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import FilterSearch from "./components/Filter";


class App extends Component {

  state = {
    search: "",
    results: employees,
    filter: "all"
  };

  resetFilter = (event) => {
    event.preventDefault();

    document.getElementById('inline-radio-All').checked = true;
    document.getElementById('inline-radio-Employee').checked = false;
    document.getElementById('inline-radio-Manager').checked = false;

    this.setState({
      filter: "all"
    })
  }

  clearSearch = () => {
    this.setState({
      search: ""
    })
  }


  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFilterChange = event => {
    
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });

  }

  render() {
    return (
      <>
        <NavbarComp />
        <Jumbo />
        <Container>
          <SearchBar
            search={this.state.search}
            handleInputChange={this.handleInputChange} 
            clearSearch={this.clearSearch} />
          <FilterSearch
            filter={this.state.filter}
            handleFilterChange={this.handleFilterChange} 
            resetFilter={this.resetFilter}/>
          <Row className="text-center empDisplay">
            <EmployeeDisplay 
            filter={this.state.filter}
            search={this.state.search} 
            employees={this.state.results} />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

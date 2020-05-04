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
import SortSearch from "./components/Sort";


class App extends Component {

  state = {
    search: "",
    results: employees,
    filter: "all",
    sort: null
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

  resetSort = (event) => {
    event.preventDefault();

    document.getElementById('inline-radio-Sort').checked = false;

    this.setState({
      sort: null
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

  handleSortChange = event => {
    
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
          <SortSearch 
          sort={this.state.sort}
          handleSortChange={this.handleSortChange}
          resetSort={this.resetSort}/>
          <Row className="text-center empDisplay">
            <EmployeeDisplay 
            filter={this.state.filter}
            search={this.state.search} 
            sort={this.state.sort}
            employees={this.state.results} />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

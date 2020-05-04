import React, { Component } from 'react';
import './App.css';
import NavbarComp from "./components/Navbar/Navbar";
import Jumbo from "./components/Jumbotron/Jumbotron";
import SearchBar from "./components/SearchBar/SearchBar";
import employees from "./employees.json";
import EmployeeDisplay from "./components/EmployeeDisplay/EmployeeDisplay";
import Container from 'react-bootstrap/Container';
import FilterSearch from "./components/Filter/Filter";
import SortSearch from "./components/Sort/Sort";
import debounce from "lodash.debounce";


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

    document.getElementById("searchInput").value = "";

    this.setState({
      search: ""
    })
  }

  handleInputChange = debounce((search) => {
    this.setState({ search });
  }, 500);

  handleFilterChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  handleSortChange = event => {

    const { name, value } = event.target;
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
            resetFilter={this.resetFilter} />
          <SortSearch
            sort={this.state.sort}
            handleSortChange={this.handleSortChange}
            resetSort={this.resetSort} />
          <EmployeeDisplay
            filter={this.state.filter}
            search={this.state.search}
            sort={this.state.sort}
            employees={this.state.results} />
        </Container>
      </>
    );
  }
}

export default App;

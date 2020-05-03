import React, { Component } from 'react';
import './App.css';
import NavbarComp from "./components/Navbar";
import Jumbo from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import employees from "./employees.json";
import EmployeeDisplay from "./components/EmployeeDisplay";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';


class App extends Component {

  state = {
    search: "",
    results: employees
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      search: ""
    });
  };

  render() {
    return (
      <>
        <NavbarComp />
        <Jumbo />
        <Container>
          <SearchBar
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Row className="text-center empDisplay">
            <EmployeeDisplay employees={this.state.results}/>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

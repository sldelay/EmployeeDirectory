import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

const FilterSearch = ({ filter, handleFilterChange, resetFilter }) => {

  return (
    <Form onSubmit={resetFilter}>
      <Form.Group>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3" >
            <Form.Check inline label="Manager" type={type} id={`inline-${type}-Manager`} name="filter" value="manager" onChange={handleFilterChange} />
            <Form.Check inline label="Employee" type={type} id={`inline-${type}-Employee`} name="filter" value="employee" onChange={handleFilterChange} />
            <Form.Check inline label="All" type={type} id={`inline-${type}-All`} name="filter" value="all" defaultChecked onChange={handleFilterChange} />
          </div>
        ))}
      </Form.Group>
      {filter !== "all" && (
        <Button
          className="filterBtn"
          size="lg"
          type="submit"
          variant="outline-secondary"
          block
        >
          Clear Filter
        </Button>
      )}
    </Form>
  )

}

export default FilterSearch;
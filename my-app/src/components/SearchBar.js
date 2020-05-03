import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

const SearchBar = ({ search, handleInputChange, handleFormSubmit }) => {

  return (
    <Form>
      <Form.Group>
        <Form.Label>Directory Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search something..."
          value={search}
          onChange={handleInputChange}
          name="search"
        />
      </Form.Group>
      <Form.Group>
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="Manager" type={type} id={`inline-${type}-Manager`} />
            <Form.Check inline label="Employee" type={type} id={`inline-${type}-Employee`} />
            <Form.Check inline label="All" type={type} id={`inline-${type}-All`} defaultChecked/>
          </div>
        ))}
      </Form.Group>
      <Button
        size="lg"
        variant="outline-secondary"
        onClick={handleFormSubmit}
        block
      >
        Search
      </Button>
    </Form>
  )

}

export default SearchBar
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const SearchBar = ({ search, handleInputChange, handleFormSubmit }) => {

  return (
    <Container>
        <Form>
          <Form.Group>
            <Form.Label>Directory Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search something..."
              value={search}
              onChange={handleInputChange}
              name="breed"
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleFormSubmit}
          >
            Search
      </Button>
        </Form>
    </Container>
  )

}

export default SearchBar
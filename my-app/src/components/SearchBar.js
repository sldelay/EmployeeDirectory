import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ search, handleInputChange, clearSearch }) => {

  return (

      <Form>
        <Form.Group>
          <Form.Label><h4>Directory Search</h4></Form.Label>
          <Form.Control
            type="text"
            placeholder="Search something..."
            value={search}
            onChange={handleInputChange}
            name="search"
          />
        </Form.Group>
        {search.length > 0 && (
          <Button
            className="clearBtn"
            size="lg"
            type="click"
            variant="outline-secondary"
            onClick={clearSearch}
            block
          >
            Clear Search
          </Button>
        )}
      </Form>

  )

}

export default SearchBar
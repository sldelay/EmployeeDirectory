import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SortSearch = ({ sort, handleSortChange, resetSort }) => {

  return (
    <Form onSubmit={resetSort}>
      <Form.Group>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3" >
            <Form.Check inline label="Sort Alphabetically" type={type} id={`inline-${type}-Sort`} name="sort" value="sort" onChange={handleSortChange}/>
          </div>
        ))}
      </Form.Group>
      {sort === "sort" && (
        <Button
          size="lg"
          type="submit"
          variant="outline-secondary"
          block
        >
          Clear Sort
        </Button>
      )}
    </Form>
  )

}

export default SortSearch;
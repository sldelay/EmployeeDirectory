import React from 'react';
import Card from 'react-bootstrap/Card';


const EmployeeCard = ({ data }) => {

  return (
    <Card>
      <Card.Body>
        <h3>{data.name}</h3>
        <p>{`Phone: ${data.phone}`}</p>
        <p>{`Email: ${data.email}`}</p>
      </Card.Body>
    </Card>
  )

}

export default EmployeeCard;
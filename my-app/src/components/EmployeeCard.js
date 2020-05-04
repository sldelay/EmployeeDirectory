import React from 'react';
import Card from 'react-bootstrap/Card';


const EmployeeCard = ({ data }) => {

  const { name, phone, email} = data

  return (
    <Card className="employeeCard">
      <Card.Body>
        <h3>{name}</h3>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Email: ${email}`}</p>
      </Card.Body>
    </Card>
  )

}

export default EmployeeCard;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";


const EmployeeCard = ({ data }) => {

  const { name, phone, email } = data

  return (
    <Col lg={6}>
      <Card className="employeeCard">
        <Card.Body>
          <h3>{name}</h3>
          <p>{`Phone: ${phone}`}</p>
          <p>{`Email: ${email}`}</p>
        </Card.Body>
      </Card>
    </Col>
  )

}

export default EmployeeCard;
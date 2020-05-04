import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./style.css";


const EmployeeCard = ({ data }) => {

  const { name, phone, email } = data

  return (
    <Col md={6} sm={12}>
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
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Jumbo = () => {

  return (
    <Jumbotron className="text-center jumbotron" fluid>
      <h1>Welcome to the employee directory</h1>
      <h5>You can search for your cowrokers contact info by name, phone, or email.</h5>
    </Jumbotron>
  )

}

export default Jumbo
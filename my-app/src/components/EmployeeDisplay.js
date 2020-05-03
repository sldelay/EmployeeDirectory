import React from 'react';
import CardColumn from 'react-bootstrap/CardColumns';
import EmployeeCard from './EmployeeCard';




const EmployeeDisplay = ({ employees }) => {

  return (
    <CardColumn>
    {employees.map(employee => (
      <EmployeeCard key={employee.id} data={employee}/>
    ))}
    </CardColumn>
  )

}

export default EmployeeDisplay;
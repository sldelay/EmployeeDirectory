import React from 'react';
import CardColumn from 'react-bootstrap/CardColumns';
import EmployeeCard from './EmployeeCard';




const EmployeeDisplay = ({ employees, search, filter }) => {

  // eslint-disable-next-line
  const empList = employees.filter((data) => {
    if (search === "") {
      return data;
    } else if (data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.phone.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  })

  // eslint-disable-next-line
  const filterList = empList.filter((data) => {
    if (filter === "all") {
      return data;
    } else if (data.role.toLowerCase().includes(filter.toLowerCase())) {
      return data;
    }
  })

  return (
    <CardColumn>
      {filterList.map(employee => (
        <EmployeeCard key={employee.id} data={employee} />
      ))}
    </CardColumn>
  )

}

export default EmployeeDisplay;
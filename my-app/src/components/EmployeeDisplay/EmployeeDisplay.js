import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";




const EmployeeDisplay = ({ employees, search, filter, sort }) => {

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

  let displayList;
  if (sort === null) {
    displayList = filterList 
  } else {
    displayList = filterList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  return (
    <>
      {displayList.map(employee => (
        <EmployeeCard key={employee.id} data={employee} />
      ))}
    </>
  )

}

export default EmployeeDisplay;
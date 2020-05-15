import React from 'react';
import EmployeeeAverage from '../EmployeeAverage/index';


//TBD
//Will render the following three components eventually:
// 1- Employee Average - (Do Now)
// 2- Employee Performance - (Do Now)
// 3- Upcoming Reviews - (Do Later)

function EmployeeInfo(props) {
  return(
    <EmployeeeAverage employee={props.employee} />
  )
}

export default EmployeeInfo;
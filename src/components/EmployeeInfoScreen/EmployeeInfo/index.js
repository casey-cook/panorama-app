import React from 'react';
import EmployeeeAverage from '../EmployeeAverage/index';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmployeePerformance from '../EmployeePerformance';
import EmployeeInfoReviews from '../EmployeeInfoReviews';


//TBD
// 2- Employee Performance - (Do Now)
// 3- Upcoming Reviews - (Do Later)

function EmployeeInfo(props) {
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/employees'>Employees</Link></BreadcrumbItem>
              <BreadcrumbItem active>{`${props.employee.name}`}</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <EmployeeeAverage employee={props.employee} />
            <EmployeeInfoReviews employee={props.employee} />
          </div>
          <div className="col mb-4">
            <EmployeePerformance employee={props.employee} />
          </div>
        </div>
      </div>

        
        
     
      
    </React.Fragment>
  )
}

export default EmployeeInfo;
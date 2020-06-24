import React from 'react';
import EmployeeeAverage from '../EmployeeAverage/index';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmployeePerformance from '../EmployeePerformance';
import EmployeeInfoReviews from '../EmployeeInfoReviews';

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
      </div> 
      <div className="container"> 
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="row">
              <div className="col-12">
                <EmployeeeAverage employee={props.employee} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <EmployeePerformance employee={props.employee} />
              </div>
            </div>
          </div>
          <div className="col mt-md-2 ml-1 ml-md-0 mr-md-2 mb-4">
            <EmployeeInfoReviews employee={props.employee}/>
          </div>
        </div>  
        
      </div>
    </React.Fragment>
  )
}

export default EmployeeInfo;
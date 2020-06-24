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
          <div className="col">
            <div className="row">
              <div className="col ml-2">
                <EmployeeeAverage employee={props.employee} />
              </div>
            </div>
            <div className="row">
              <div className="col ml-2">
                <EmployeePerformance employee={props.employee} />
              </div>
            </div>
          </div>
          <div className="col mt-4 mt-md-0 ml-2 ml-md-0 mr-md-2">
            <EmployeeInfoReviews employee={props.employee}/>
          </div>
        </div>  
        
      </div>

        
        
     
      
    </React.Fragment>
  )
}

export default EmployeeInfo;
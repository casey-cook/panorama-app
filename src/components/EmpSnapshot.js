import React from 'react';
import { EMPLOYEES } from '../employeeData';

const windowStyle = {
	minHeight: 355,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	borderRadius: 6,
};

const headingStyle = {
	backgroundImage: 'linear-gradient(to right, #0b877d , #18c29c)',
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
};

const welcomeContent = {
	backgroundColor: '#d0fdf9',
	minWidth: 100,
	minHeight: 280,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
};

function RenderEmployeeList(employee) {
  return (
    EMPLOYEES.map(employee=>(
      <div display='flex' className='row pt-2'>
        <div className='col-9'>
          {employee.name}
        </div>
      </div>
    ))
  )
}


function EmpSnapshot (props) {
  console.log(props);
    
		return (
			<div style={windowStyle} className='m-4'>
				<div style={headingStyle}>
					<p className='wHeading p-2 mb-0'>Employee Snapshot</p>
				</div>
				<div style={welcomeContent} className='m-3'>
          <div className="container">
            <RenderEmployeeList />  
          </div>
				</div>
			</div>
		);
}


export default EmpSnapshot;

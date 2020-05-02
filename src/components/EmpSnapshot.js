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

const empRowStyle = {
  backgroundColor: '#d0fdf9',
  minWidth: 100,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
}

const imageStyle = {
	borderRadius: 50,
};

const scoreStyle = {
  borderRadius: '50%',
  backgroundColor: '#0b877d',
  minWidth: 25,
  minHeight: 30,
  color: 'white',
  fontSize: '.9em'
};

function RenderEmployeeList(employee) {
  return (
    EMPLOYEES.map(employee=>(
      <div style={empRowStyle} className='row pt-2 pb-2 mb-3'>
        <div className='col-1'>
        <img style={imageStyle} alt='profile-pic' className='my-auto' height='30' src={employee.photo} /> 
        </div>
        <div className='ml-1 col-9 my-auto'>
          {employee.name}
        </div>
        <div style={scoreStyle} className='pl-1 pt-1 col-1'>
          <div>{employee.totalScore}</div>
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
				<div className='m-3'>
          <div className="container">
            <RenderEmployeeList />  
          </div>
				</div>
			</div>
		);
}


export default EmpSnapshot;

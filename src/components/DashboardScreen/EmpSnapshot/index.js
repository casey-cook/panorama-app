import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const windowStyle = {
	minHeight: 355,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	minWidth: 320,
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
  
};

const imageStyle = {
	borderRadius: 50,
};

const scoreStyle = {
	borderRadius: '50%',
	backgroundColor: '#0b877d',
	minWidth: 25,
	minHeight: 30,
	color: 'white',
	fontSize: '.9em',
};

 const buttonText = {
   color: '#01403A',

 }



function EmployeeList({ employees }) {

	// function changeBackground(e) {
	// 	e.target.style.backgroundColor = '#01403a';
	// 	e.target.style.color = 'white';
	// }

	// function revertBackground(e) {
	// 	e.target.style.backgroundColor = '#d0fdf9';
	// 	e.target.style.color = '#126872';
	// }

	return employees.map((employee) => (
    <Link to={`/employees/${employee.id}`} key={employee.id}>
      <div
        style={empRowStyle}
        className='row pt-2 pb-2 mb-3 hover-button'
        // onMouseEnter={changeBackground}
        // onMouseLeave={revertBackground}
      >
        <div className='col-1'>
          <img
            style={imageStyle}
            alt='profile-pic'
            className='my-auto'
            height='30'
            src={employee.photo}
          />
        </div>
        <div className='ml-1 col-9 my-auto'>{employee.name}</div>
        <div style={scoreStyle} className='pl-1 pt-1 col-1'>
          <div>{employee.totalScore()}</div>
        </div>
      </div>
    </Link>
	));
}

function EmpSnapshot(props) {
	return (
		<div style={windowStyle} className='ml-2 mb-4'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Employee Snapshot</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<EmployeeList employees={props.employees} />
          <div className="row">
            <div className="col-2">
            <Button
               id='addEmployee'
               className='mr-auto'>
               <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
             </Button>
            </div>
            <div className="col-10 pt-2">
              <p className='mr-auto' style={buttonText}>Add an Employee</p>
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}

export default EmpSnapshot;

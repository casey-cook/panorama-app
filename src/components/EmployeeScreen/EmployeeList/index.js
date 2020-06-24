import React from 'react';
import { Link } from 'react-router-dom';

const empRowStyle = {
	backgroundColor: '#d0fdf9',
	minWidth: 100,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
	cursor: 'pointer',
};

const imageStyle = {
	borderRadius: 50,
};

function EmployeeList({ employees }) {
  return employees.map((employee) => (
      <Link to={`/employees/${employee.id}`}>
        <div
          key={employee.id}
          className='row pt-2 pb-2 mb-3'
          style={empRowStyle}
        >
          <div className='col-2'>
            <img
              style={imageStyle}
              alt='profile-pic'
              className='my-auto'
              height='30'
              src={employee.photo}
            />
          </div>
          <div className='ml-1 col-6 my-auto'>{employee.name}</div>
        </div>
      </Link>
  ));
}

export default EmployeeList;
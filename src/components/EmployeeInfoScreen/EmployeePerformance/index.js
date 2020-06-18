import React from 'react';
import EmployeePerfAreaList from '../EmployeePerfAreaList';

const windowStyle3 = {
	minHeight: 250,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	minWidth: 400,
	borderRadius: 6,
};

const headingStyle = {
	backgroundImage: 'linear-gradient(to right, #0b877d , #18c29c)',
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
};

function EmployeePerformance(employee) {

  return (
    
      <div style={windowStyle3} className='mt-4 ml-4'>
        <div style={headingStyle}>
          <p className='wHeading p-2 mb-0'>Performance Area Detail</p>
        </div>
        <div className='m-3'>
          <div className='container'>
            <EmployeePerfAreaList employee={employee} />
          </div>
        </div>
      </div>
  );

}

export default EmployeePerformance;
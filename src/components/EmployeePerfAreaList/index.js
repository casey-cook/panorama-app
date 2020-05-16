import React from 'react';

const empRowStylePerformance = {
	backgroundColor: '#d0fdf9',
	minWidth: 100,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
	cursor: 'pointer',
};

const scoreStyle = {
	borderRadius: '50%',
	backgroundColor: '#0b877d',
	minWidth: 25,
	minHeight: 30,
	color: 'white',
	fontSize: '.9em',
};



function EmployeePerfAreaList({employee}) {
  console.log(employee)
  return (
        
        <React.Fragment>
          <div
            className='row pt-2 pb-2 mb-3 pl-3'
            style={empRowStylePerformance}
          >
          {employee.employee.performanceAreas[0]} 
          <div style={scoreStyle} className='ml-auto mr-4 pl-1 pt-1 col-1'>
          <div>{employee.employee.performanceAreaScores[0]}</div>
          </div>
          </div>
        
          <div
            className='row pt-2 pb-2 mb-3 pl-3'
            style={empRowStylePerformance}
          >
          {employee.employee.performanceAreas[1]} 
          <div style={scoreStyle} className='ml-auto mr-4 pl-1 pt-1 col-1'>
          <div>{employee.employee.performanceAreaScores[1]}</div>
          </div>
          </div>
        

          <div
            className='row pt-2 pb-2 mb-3 pl-3'
            style={empRowStylePerformance}
          >
          {employee.employee.performanceAreas[2]} 
          <div style={scoreStyle} className='ml-auto mr-4 pl-1 pt-1 col-1'>
          <div>{employee.employee.performanceAreaScores[2]}</div>
          </div>
          </div>
        
        </React.Fragment>
  );
}

export default EmployeePerfAreaList;
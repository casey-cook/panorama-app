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
  let counter = 0, area1Scores = [], area2Scores = [], area3Scores = [], complete= [];

  employee.employee.reviews.forEach(review => {
    if (review.complete === true) {
      complete.push(review)
    } 
  })

  complete.forEach(review => {
    counter ++;
    area1Scores.push(review.scores[0]);
    area2Scores.push(review.scores[1]);
    area3Scores.push(review.scores[2]);
  })

  let area1Avg = ((area1Scores.reduce((a,c) => a + c, 0))/counter).toFixed(1)
  let area2Avg = ((area2Scores.reduce((a,c) => a + c, 0))/counter).toFixed(1)
  let area3Avg = ((area3Scores.reduce((a,c) => a + c, 0))/counter).toFixed(1)

  if (isNaN(area1Avg) === true)
      area1Avg = 'tbd'
  if (isNaN(area2Avg) === true)
  area2Avg = 'tbd'
  if (isNaN(area3Avg) === true)
      area3Avg = 'tbd'

  return (
    <React.Fragment>
      <div
        className='row pt-2 pb-2 mb-3 pl-3'
        style={empRowStylePerformance}
      >
        {employee.employee.performanceAreas[0]} 
        <div style={scoreStyle} className='ml-auto mr-4 pl-1 pt-1 col-1'>
          <div>{area1Avg}</div>
        </div>
      </div>
    
      <div
        className='row pt-2 pb-2 mb-3 pl-3'
        style={empRowStylePerformance}
      >
        {employee.employee.performanceAreas[1]} 
        <div style={scoreStyle} className='ml-auto mr-4 pl-1 pt-1 col-1'>
          <div>{area2Avg}</div>
        </div>
      </div>
    
      <div
        className='row pt-2 pb-2 mb-3 pl-3'
        style={empRowStylePerformance}
      >
        {employee.employee.performanceAreas[2]} 
        <div style={scoreStyle} className='ml-auto mr-4 pl-1 pt-1 col-1'>
          <div>{area3Avg}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmployeePerfAreaList;
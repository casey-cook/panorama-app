import React from 'react';
import moment from 'moment';

const windowStyle = {
	minHeight: 155,
	backgroundColor: '#81ecc9',
  maxWidth: 400,
  minWidth: 320,
	borderRadius: 6,
};

const headingStyle1 = {
	backgroundImage: 'linear-gradient(to right, #0b877d , #18c29c)',
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
  minHeight: 77,
  fontSize: '1.7em',
};

const welcomeContent = {
	backgroundColor: '#d0fdf9',
	minWidth: 100,
	minHeight: 45,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  color: '#126872',
  textAlign: 'center',
  fontSize: '1.15em',
};

const avgStyle = {
  color: 'white',
  backgroundColor: '#0b877d',
  borderRadius: '50%',
  padding: '0 0 0 0',
  textAlign: 'center'
}

function TeamAverage({employees}) {
    
  let avgScore, counter = 0, arrScores = [], complete = [];

  employees.forEach(employee=>{
    employee.reviews.forEach(review => {
      if (review.complete === true) {
        complete.push(review)
      } 
    })
  })

  complete.forEach(review => {
    let scores = Object.values(review.scores);
    scores.forEach(score => {
      counter ++;
      arrScores.push(score)
    })
  })

  avgScore = ((arrScores.reduce((a,c) => a + c, 0))/counter).toFixed(1)
  
  let today = moment().format('MMMM Do, YYYY');
  
  return (
    <div style={windowStyle} className='ml-2 mt-4 mb-4'>
      <div className="container">
        <div className="row" style={headingStyle1}>
          <div className="col-9" >
            <p className='wHeading pt-3'>Team Average</p>
          </div>  
          <div className="col-2 my-2 pt-2" style={avgStyle}>
            {/* <RenderTeamAverage employees={employees}/> */}
            {avgScore}
          </div>
        </div>
      </div>
      <div style={welcomeContent} className='m-3'>
        <div className="container">
          <div display='flex' className='row pt-2'>
            <div className='col'>Today is: {today}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamAverage;

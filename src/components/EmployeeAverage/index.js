import React from 'react';

const windowStyle = {
	minHeight: 155,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	minWidth: 400,
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
	textAlign: 'center',
};

function EmployeeAverage({ employee }) {
	console.log('Employee Average', employee);

  let empR = employee.totalScore;
  console.log(typeof empR, empR);
	let rating;
	switch (empR) {
		case empR < 3:
      rating = 'Needs Improvement';
      break;
		case empR > 3 && empR < 4:
      rating = 'Satisfactory';
      break;
		case empR > 4:
      rating = 'Above Average';
      break;
    default: rating = 'rating error'
	}

	return (
		<div style={windowStyle} className='m-4'>
			<div className='container'>
				<div className='row' style={headingStyle1}>
					<div className='col-9'>
						<p className='wHeading pt-3'>{employee.name}</p>
					</div>
					<div className='col-2 my-2 pt-2' style={avgStyle}>
						{employee.totalScore}
					</div>
				</div>
			</div>
			<div style={welcomeContent} className='m-3'>
				<div className='container'>
					<div display='flex' className='row pt-2'>
						<div className='col'>{rating}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeAverage;

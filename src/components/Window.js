import React, { Component } from 'react';
import Alert from '../img/alert.png';
import Calendar from '../img/calendar.png';

const windowStyle = {
	minHeight: 155,
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
	minHeight: 80,
	borderRadius: 6,
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	color: '#126872',
};

const img = {
  verticalAlign: 'middle',
}

class Window extends Component {
	render() {
		return (
			<div style={windowStyle} className='m-4'>
				<div style={headingStyle}>
					<p className='wHeading p-2 mb-0'>Welcome back, Casey!</p>
				</div>
				<div style={welcomeContent} className='m-3'>
          <div className="container">
            <div display='flex' className='row pt-2'>
              <div className='col-1'>
                <img className='pb-1' height='24' src={Alert} alt='alert' />
              </div>
              <div className='col-9'>0 Past Due Reviews</div>
            </div>
            <div className='row pt-2'>
              <div className='col-1'>
                <img className='pb-1' height='24' src={Calendar} alt='alert' />
              </div>
              <div className='col-9'>1 Review Due This Week</div>
            </div>
          </div>
				</div>
			</div>
		);
	}
}

export default Window;

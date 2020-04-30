import React, { Component } from 'react';
import Alert from '../components/alert.png';
import Calendar from '../components/calendar.png';

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

class Window extends Component {
	render() {
		return (
			<div style={windowStyle} className='m-4'>
				<div style={headingStyle}>
					<p className='wHeading p-2 mb-0'>Welcome back, Casey!</p>
				</div>
				<div style={welcomeContent} className='m-3'>
					<div className='pt-2'>
						<span>
							<img className='pl-4' height='20' src={Alert} alt='alert' />
						</span>
						<span className='pl-3 mb-0 pt-2'>0 Past Due Reviews</span>
					</div>
					<div className='pt-2'>
						<span>
							<img className='pl-4' height='20' src={Calendar} alt='alert' />
						</span>
						<span className='pl-3 mb-0 pt-2'>1 Review Due This Week</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Window;

import React, { Component } from 'react';
import Navigation from './Nav';
import { Link, Switch, Route } from 'react-router-dom';
import WelcomeDash from './WelcomeDash';

const windowStyle = {
	minHeight: 155,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	minWidth: 400,
	borderRadius: 6,
};

const windowStyle2 = {
	minHeight: 355,
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
	cursor: 'pointer',
};

const imageStyle = {
	borderRadius: 50,
};

function RenderEmployeeAverage(employee) {
	console.log(employee);
	return <div>TEST</div>;
	// return employee.totalScore
}

function EmployeeAverage({ employees }) {
	return (
		<div style={windowStyle} className='m-4'>
			<div className='container'>
				<div className='row' style={headingStyle1}>
					<div className='col-9'>
						<p className='wHeading pt-3'>Employee Average</p>
					</div>
					<div className='col-2 my-2 pt-2' style={avgStyle}>
						<RenderEmployeeAverage />
					</div>
				</div>
			</div>
			<div style={welcomeContent} className='m-3'>
				<div className='container'>
					<div display='flex' className='row pt-2'>
						<div className='col'>RATING</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function EmployeeSelect(props) {
  
	function RenderEmployeeList({ employees }) {
    
    function changeBackground(e) {
			e.target.style.backgroundColor = '#01403a';
			e.target.style.color = 'white';
		}

		function revertBackground(e) {
			e.target.style.backgroundColor = '#d0fdf9';
			e.target.style.color = '#126872';
		}

		return employees.map((employee) => (
      <Link to={`employees/${employee.id}`}>
        <div
          className='row pt-2 pb-2 mb-3'
          style={empRowStyle}
          onClick={(employee) => RenderEmployeeAverage(employee)}
          onMouseEnter={changeBackground}
          onMouseLeave={revertBackground}
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

	return (
		<div style={windowStyle2} className='ml-4 mb-4'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Employee Select</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<RenderEmployeeList employees={props.employees} />
				</div>
			</div>
		</div>
	);
}

class Employees extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
          <div className='container'>
            <div className='row'>
              <div className='col'>
                {/* <div className='row' id='employeeAverage'>
                  <div className='col'>
                    <EmployeeAverage employees={this.props.employees} />
                  </div>
                </div> */}
                <div className='row' id='employeeSelect'>
                  <div className='col'>
                    <EmployeeSelect employees={this.props.employees} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route
              exact
              path={'employees/1'}
              component = {WelcomeDash}
            />
          </Switch>
			</React.Fragment>
		);
	}
}

export default Employees;

import React, { Component } from 'react';
import Navigation from '../Nav/index';
import EmployeeSelect from '../EmployeeSelect/index';




class Employees extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<div className='container'>
					<div className='row mt-5' id='employeeSelect'>
						<div className='col'>
							<EmployeeSelect employees={this.props.employees} />
						</div>
            <div className="col">
              <img className='mt-5 pt-3 imgStyle'style={{maxWidth:'70%'}} src="../../assets/img/human.png" alt=""/>
            </div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Employees;

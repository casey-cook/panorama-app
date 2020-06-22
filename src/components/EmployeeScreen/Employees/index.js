import React, { Component } from 'react';
import EmployeeSelect from '../EmployeeSelect';




class Employees extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='container'>
					<div className='row mt-5' id='employeeSelect'>
						<div className='col'>
							<EmployeeSelect employees={this.props.employees} delEmployee={this.props.delEmployee} />
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

import React, { Component } from 'react';
import { EMPLOYEES } from '../employeeData';
import Navigation from './Nav'
import Window from './Window';
import EmpSnapshot from './EmpSnapshot';

class Main extends Component {

  constructor(props) {
		super(props);
		this.state = {
			employees: EMPLOYEES,
		};
	}


  render() {
    return (
      <div>
        <Navigation />
        <Window />
        <EmpSnapshot employees={this.state.employees} />
      </div>
    )
  }
}

export default Main;
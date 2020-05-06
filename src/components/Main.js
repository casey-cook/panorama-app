import React, { Component } from 'react';
import { EMPLOYEES } from '../employeeData';
import Navigation from './Nav'
import Window from './Window';
import EmpSnapshot from './EmpSnapshot';
import TeamAverage from './TeamAverage';

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
        <div className='conatiner'>
          <div className="row">
            <div className="col">
              <Window />
            </div>
            <div className="col">
              <TeamAverage employees={this.state.employees} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EmpSnapshot employees={this.state.employees} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Main;
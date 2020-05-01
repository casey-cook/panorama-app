import React, { Component } from 'react';
import { EMPLOYEES } from '../draft';
import Navigation from './Nav'
import Window from './Window';

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
      </div>
    )
  }
}

export default Main;
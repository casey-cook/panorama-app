import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { 
  Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
	Form,
	FormGroup,
  Input, 
  FormFeedback
 } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const windowStyle = {
	minHeight: 355,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	minWidth: 320,
	borderRadius: 6,
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
  
};

const imageStyle = {
	borderRadius: 50,
};

const scoreStyle = {
	borderRadius: '50%',
	backgroundColor: '#0b877d',
	minWidth: 25,
	minHeight: 30,
	color: 'white',
	fontSize: '.9em',
};

class AddEmployeeForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
      name: 'First Last',
      touched: {
        name: false,
      }
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
  }

  validate(name) {
    const errors = {
      name: ''
    }

    if (this.state.touched.name) {
      if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters'
      } else if (name.length > 25) {
        errors.name = 'Name must be shorter than 25 characters'
      }
    }

    return errors;
  }
  
  handleBlur = (field) => () => {
    this.setState({
      touched: {...this.state.touched, [field]: true}
    })
  }

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value,
		});
	}


	handleSubmit(event) {
    this.props.addEmployee(this.state.name);
    this.toggleModal();
    event.preventDefault();
	}

	render() {
    const errors = this.validate(this.state.name)

		return (
			<div>
				<Button
               onClick={this.toggleModal}
               className='mr-auto pb-2 mb-2 addBtnStyle'>
               <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
        </Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Add an Employee</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
            <FormGroup row>
								<Label htmlFor='name' md={2}>
									Name
								</Label>
								<Col md={6}>
									<Input
										type='text'
										id='name'
										name='name'
                    placeholder='Employee Full Name'
										value={this.state.name}
                    invalid={errors.name.length > 1}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('name')}
									/>
                  <FormFeedback>{errors.name}</FormFeedback>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 8 }}>
									<Button type='submit' color='success'>
										Add Employee
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}


function EmployeeTotalScore({employee}) {
  console.log(employee)
  let avgScore, counter = 0, arrScores = [], complete = [];

    employee.reviews.forEach(review => {
      if (review.complete === true) {
        complete.push(review)
    }
    })

    complete.forEach(review => {
      let scores = Object.values(review.scores);
      scores.forEach(score => {
        counter ++;
        arrScores.push(score)
      })
    })

    avgScore = ((arrScores.reduce((a,c) => a + c, 0))/counter).toFixed(1)

    if (isNaN(avgScore) === true)
      avgScore = 'tbd'

    return avgScore;
}


function EmployeeList({ employees }) {

	return employees.map((employee) => (
    <Link to={`/employees/${employee.id}`} key={employee.id}>
      <div
        style={empRowStyle}
        className='row pt-2 pb-2 mb-3 hover-button'
      >
        <div className='col-1'>
          <img
            style={imageStyle}
            alt='profile-pic'
            className='my-auto'
            height='30'
            src={employee.photo}
          />
        </div>
        <div className='ml-1 col-9 my-auto'>{employee.name}</div>
        <div style={scoreStyle} className='pl-1 pt-1 col-1'>
          <div><EmployeeTotalScore employee={employee}/></div>
        </div>
      </div>
    </Link>
	));
}

function EmpSnapshot(props) {
	return (
		<div style={windowStyle} className='ml-2 mb-4'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Employee Snapshot</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<EmployeeList employees={props.employees} />
				</div>
        <AddEmployeeForm addEmployee={props.addEmployee}/>
			</div>
		</div>
	);
}

export default EmpSnapshot;

import React, {Component} from 'react';
import EmployeeList from '../EmployeeList';
import { 
  Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
	Form,
  FormGroup,
  FormText,
  Input, 
  FormFeedback
 } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const windowStyle2 = {
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

class DelEmployeeForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
      isModalOpen: false,
      name: '',
      touched: {
        name: false,
      }
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
  }


  validate(name) {
    const employees = this.props.employees;
    const errors = {
      name: ''
    }

    if (this.state.touched.name) {
      if (!employees.some(employee => employee.name === name)) {
        errors.name = 'Must be an exisiting employee'
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

    this.props.delEmployee(this.state.name);
    this.toggleModal();  
    event.preventDefault();
    
  }
  
	render() {

    const errors = this.validate(this.state.name)

		return (
			<div>
				<Button
               onClick={this.toggleModal}
               className='pb-2 mb-2 addBtnStyle'>
               <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
        </Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Remove an Employee</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
            <FormGroup row>
								<Label htmlFor='name' md={4}>
									Employee Name
								</Label>
								<Col md={6}>
									<Input
										type='text'
										id='name'
										name='name'
                    invalid={errors.name}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('name')}
									>
                  </Input>
                  <FormText color="danger">
                    Deleting an employee is irreversible! Pleast input full name to confirm. 
                  </FormText>
                
                  <FormFeedback>{errors.name}</FormFeedback>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 8}}>
									<Button 
                    type='submit' 
                    color='danger'
                    disabled={errors.name.length > 0}
                  >
										Delete
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

function EmployeeSelect(props) {
	return (
		<div style={windowStyle2} className='ml-2 mb-4'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Employee Select</p>
			</div>
			<div className='m-3 pb-2'>
				<div className='container'>
					<EmployeeList employees={props.employees} />
				</div>
        <DelEmployeeForm delEmployee={props.delEmployee} employees={props.employees}/>
			</div>
		</div>
  );
}

export default EmployeeSelect;
import React, { Component } from 'react';
import {
	Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
	Form,
	FormGroup,
	Input, FormFeedback
} from 'reactstrap';
import ReviewForm  from './ReviewForm/ReviewForm';
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

class CreateReviewForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
      name: 'First Last',
      date: '',
      touched: {
        name: false,
        date: false
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

    this.props.createReview(this.state.name, this.state.date);
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
					<ModalHeader toggle={this.toggleModal}>Schedule a Review</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
            <FormGroup row>
								<Label htmlFor='name' md={3}>
									Employee
								</Label>
								<Col md={6}>
									<Input
										type='text'
										id='name'
										name='name'
										value={this.state.name}
                    invalid={errors.name.length > 1}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('name')}
									/>
                  <FormFeedback>{errors.name}</FormFeedback>
								</Col>
							</FormGroup>
              <FormGroup row>
                <Label htmlFor="date" md={3}>
                  Review Date
                </Label>
                <Col md={6}>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder='Select Date'
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 8 }}>
									<Button 
                    type='submit' 
                    color='success'
                    disabled={errors.name.length > 0}
                  >
										Confirm
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

function RenderReviewList( props ) {
	let toDisplay = (props.incomplete.filter((review) => review.length !== 0)).flat(2);
  return toDisplay.map((review) => {
		return (
			<div
				style={empRowStyle}
				key={(review.id)+'-'+(review.employeeId)}
				className='row pt-2 pb-2 mb-3'
			>
				<div className='col-4'>
					{review.date.month}/{review.date.day}/{review.date.year}
				</div>
				<div className='col-6'>{review.name}</div>
				<div className='col-1'>
					<ReviewForm 
            employeeId={review.employeeId}
            reviewId={review.id}
            name={review.name}
            date={review.date}
            areas={review.areas}
            completeReview={props.completeReview}
            employees={props.employees}
          />
				</div>
			</div>
		);
	});
}

function UpcomingReviews(props) {
	return (
		<div style={windowStyle} className='ml-2'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Upcoming Reviews</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<RenderReviewList 
            incomplete={props.incomplete} 
            completeReview={props.completeReview} 
          />
				</div>
        <CreateReviewForm 
          createReview={props.createReview} 
          employees={props.employees}
        />
			</div>
		</div>
	);
}

export default UpcomingReviews;

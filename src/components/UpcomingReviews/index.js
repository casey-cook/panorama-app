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

const windowStyle = {
	minHeight: 355,
	backgroundColor: '#81ecc9',
	maxWidth: 400,
	minWidth: 400,
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

class ReviewForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			name: '',
			area1: '',
			area2: '',
			area3: '',
      comments: '',
      touched: {
        name: false,
        comments: false
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

  validate(name, comments) {
    const errors = {
      name: '',
      comments: ''
    }

    if (this.state.touched.name) {
      if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters'
      } else if (name.length > 25) {
        errors.name = 'Name must be shorter than 25 characters'
      }
    }

    if (this.state.touched.comments) {
      if (comments.length < 140) {
        errors.comments = 'Feedback should be at least 140 characters'
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
		console.log('Current state is: ' + JSON.stringify(this.state));
    alert('Current state is: ' + JSON.stringify(this.state));
    this.toggleModal();
		event.preventDefault();
	}

	render() {

    const errors = this.validate(this.state.name, this.state.comments)

		return (
			<div>
				<Button onClick={this.toggleModal} outline='true'>
					>
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Employee Ratings</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
            <FormGroup row>
								<Label htmlFor='name' md={2}>
									Employee
								</Label>
								<Col md={6}>
									<Input
										type='text'
										id='name'
										name='name'
                    placeholder='Employee Full Name'
										value={this.state.name}
                    invalid={errors.name}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('name')}
									/>
                  <FormFeedback>{errors.name}</FormFeedback>
								</Col>
							</FormGroup>
              <FormGroup row>
								<Label htmlFor='area1' md={2}>
									Area 1
								</Label>
								<Col md={6}>
									<Input
										type='select'
										id='area1'
										name='area1'
										value={this.state.area1}
										onChange={this.handleInputChange}
									>
                    <option hidden='true'>Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
								</Col>
							</FormGroup>
              <FormGroup row>
								<Label htmlFor='area2' md={2}>
									Area 2
								</Label>
								<Col md={6}>
									<Input
										type='select'
										id='area2'
										name='area2'
										value={this.state.area2}
										onChange={this.handleInputChange}
									>
                    <option hidden='true'>Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
								</Col>
							</FormGroup>
              <FormGroup row>
								<Label htmlFor='area3' md={2}>
									Area 3
								</Label>
								<Col md={6}>
									<Input
										type='select'
										id='area3'
										name='area3'
										value={this.state.area3}
										onChange={this.handleInputChange}
									>
                    <option hidden='true'>Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='comments' md={2}>
									Comments
								</Label>
								<Col md={10}>
									<Input
										type='textarea'
										id='comments'
										name='comments'
										rows='12'
                    placeholder='Please include observable behaviors that contributed to your ratings.'
										value={this.state.comments}
                    invalid={errors.comments}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('comments')}
									></Input>
                  <FormFeedback>{errors.comments}</FormFeedback>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 8 }}>
									<Button type='submit' color='success'>
										Submit Review
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

function RenderReviewList({ incomplete }) {
	let toDisplay = incomplete.filter((review) => review.length !== 0);

	return toDisplay.map((review) => {
		return (
			<div
				style={empRowStyle}
				key={review[0].id}
				className='row pt-2 pb-2 mb-3'
			>
				<div className='col-4'>
					{review[0].date.month}/{review[0].date.day}/{review[0].date.year}
				</div>
				<div className='col-6'>{review[0].name}</div>
				<div className='col-1'>
					<ReviewForm />
				</div>
			</div>
		);
	});
}

function UpcomingReviews(props) {
	return (
		<div style={windowStyle} className='ml-4'>
			<div style={headingStyle}>
				<p className='wHeading p-2 mb-0'>Upcoming Reviews</p>
			</div>
			<div className='m-3'>
				<div className='container'>
					<RenderReviewList incomplete={props.incomplete} />
				</div>
			</div>
		</div>
	);
}

export default UpcomingReviews;

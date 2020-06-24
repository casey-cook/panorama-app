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

class ReviewForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
      isModalOpen: false,
      employeeId: props.employeeId,
      reviewId: props.reviewId,
      name: props.name,
      areas: props.areas,
      area1: '',
      area2: '',
      area3: '',
      notes: '',
      complete: true,
      touched: {
        name: false,
        notes: false,
        area1: false,
        area2: false,
        area3: false
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

  validate(name, notes, area1, area2, area3) {
    const errors = {
      name: '',
      notes: ''
    }

    if (this.state.touched.name) {
      if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters'
      } else if (name.length > 25) {
        errors.name = 'Name must be shorter than 25 characters'
      }
    }

    if (this.state.touched.notes) {
      if (notes.length < 140) {
        errors.notes = 'Feedback should be at least 140 characters'
      }
    }

    if (this.state.touched.area1) {
      if (area1.length < 1) {
        errors.area1 = 'Required'
      }
    }

    if (this.state.touched.area2) {
      if (area2.length < 1) {
        errors.area2 = 'Required'
      }
    }

    if (this.state.touched.area3) {
      if (area3.length < 1) {
        errors.area3 = 'Required'
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
    
    this.handleBlur(name);
	}

	handleSubmit(event) {
    this.props.completeReview(this.state.employeeId,this.state.reviewId, this.state.name, this.state.area1, this.state.area2, this.state.area3, this.state.notes, this.state.complete);
    
    this.toggleModal();
    event.preventDefault();
	}

	render() {
    const errors = this.validate(this.state.name, this.state.notes, this.state.area1, this.state.area2, this.state.area3)

		return (
			<div>
				<Button onClick={this.toggleModal} outline={true} size='sm'>
					&gt;
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Employee Ratings</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
            <FormGroup row>
								<Label htmlFor='name' md={4}>
									Employee
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
								<Label htmlFor='area1' md={4}>
									{this.state.areas[0]}
								</Label>
								<Col md={6}>
									<Input
                    required
										type='select'
										id='area1'
										name='area1'
										value={this.state.area1}
                    invalid={errors.area1}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('area1')}
									>
                    <option hidden={true}>Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                  <FormFeedback>{errors.area1}</FormFeedback>
								</Col>
							</FormGroup>
              <FormGroup row>
								<Label htmlFor='area2' md={4}>
                {this.state.areas[1]}
								</Label>
								<Col md={6}>
									<Input
                    required
										type='select'
										id='area2'
										name='area2'
                    invalid={errors.area2}
										value={this.state.area2}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('area2')}
									>
                    <option hidden={true}>Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                  <FormFeedback>{errors.area2}</FormFeedback>
								</Col>
							</FormGroup>
              <FormGroup row>
								<Label htmlFor='area3' md={4}>
                {this.state.areas[2]}
								</Label>
								<Col md={6}>
									<Input
										type='select'
										id='area3'
										name='area3'
                    invalid={errors.area3}
										value={this.state.area3}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('area3')}
									>
                    <option hidden={true}>Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                  <FormFeedback>{errors.area3}</FormFeedback>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor='notes' md={2}>
									Comments
								</Label>
								<Col md={12}>
									<Input
										type='textarea'
										id='notes'
										name='notes'
										rows='8'
                    placeholder='Please include observable behaviors that contributed to your ratings.'
										value={this.state.notes}
                    invalid={errors.notes.length > 1}
										onChange={this.handleInputChange}
                    onBlur={this.handleBlur('notes')}
									></Input>
                  <FormFeedback>{errors.notes}</FormFeedback>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 8 }}>
									<Button 
                    type='submit' 
                    color='success'
                    disabled={!this.state.touched.area1 || this.state.area1.length !== 1 || !this.state.touched.area2 || this.state.area2.length !== 1 || this.state.area3.length !== 1 || !this.state.touched.area3 || errors.name.length > 1 || !this.state.touched.notes || errors.notes.length > 1}
                  >
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

export default ReviewForm;
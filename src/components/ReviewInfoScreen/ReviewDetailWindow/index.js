import React, {Component} from 'react';
import ReviewDetailList from '../ReviewDetailList';
import ReviewNotes from '../ReviewNotes';
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

const windowStyle3 = {
	minHeight: 470,
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

class DelReviewForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
      isModalOpen: false,
      review: props.review,
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
    const errors = {
      name: ''
    }

    if (this.state.touched.name){
      if (this.state.name !== 'DELETE') {
        errors.name = 'Cannot delete: Please double-check spelling'
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
    console.log('Handling submit')
    this.props.deleteReview(this.state.review);
    this.toggleModal();  
    event.preventDefault();
    
  }
  

	render() {

    const errors = this.validate(this.state.name)

		return (
			<div>
				<Button
               onClick={this.toggleModal}
               className='pb-2 mb-3 mt-3 addBtnStyle'>
               <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
        </Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Delete Review</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
            <FormGroup row>
								<Label htmlFor='name' md={4}>
									Confirm Delete
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
                    Deleting a review is irreversible!{<br/>}Type DELETE to confirm. 
                  </FormText>
                  <FormFeedback>{errors.name}</FormFeedback>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 8}}>
									<Button 
                    type='submit' 
                    color='danger'
                    disabled={this.state.touched.name === false || errors.name.length > 1}
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



function ReviewDetailWindow(props) {
  const review = props.review[0][0];
  return(
    <div style={windowStyle3} className='mt-4 ml-2'>
    <div style={headingStyle}>
      <p className='wHeading p-2 mb-0'>{review.name} - {review.date.month}/{review.date.day}/{review.date.year}</p>
    </div>
    <div className='m-3'>
      <div className='container'>
        <ReviewDetailList review={review}/>
        <ReviewNotes review={review}/>
      </div>
      <DelReviewForm deleteReview={props.deleteReview} review={review}/>
    </div>
  </div>
  )
}

export default ReviewDetailWindow;
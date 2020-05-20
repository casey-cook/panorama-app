import React from 'react';
import Nav from '../Nav/index';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ReviewInfo(props) {
	let review = props.review.filter((arr) => arr.length > 0);
	console.log(review);

	return (
		<React.Fragment>
			<Nav />
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to='/reviews'>Reviews</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>Review Detail</BreadcrumbItem>
						</Breadcrumb>
					</div>
				</div>

				<div className='row'>
					<div className='col'>Review Details</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ReviewInfo;

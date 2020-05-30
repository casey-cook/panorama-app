import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReviewDetailWindow from '../ReviewDetailWindow';

function ReviewInfo(props) {
	let review = props.review.filter((arr) => arr.length > 0);

	return (
		<React.Fragment>
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
					<div className='col'>
						<ReviewDetailWindow review={review} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ReviewInfo;

import React, { Component } from 'react';
import { CirclePlay } from 'grommet-icons';
import './style.scss';
import TrailerPreview from '../TrailerPreview';
import {
	ITEM_HEIGHT,
	PREVIEW_HEIGHT,
	getBackgroungImage,
	getDayFromEventDisplayDate,
	getMonthFromEventDisplayDate
} from '../utils';

class Trailer extends Component {

	render() {
		const { EventTitle, EventCode, isPreviewOpen, onClick, wtsPerc, wtsCount, DispReleaseDate } = this.props;
		const height = isPreviewOpen ? ITEM_HEIGHT + PREVIEW_HEIGHT : ITEM_HEIGHT;
		const day = getDayFromEventDisplayDate(DispReleaseDate);
		const month = getMonthFromEventDisplayDate(DispReleaseDate);

		const baseClassName = 'trailers-app-trailer-item';
		const selectedClassName = 'selected';

		const classNames = isPreviewOpen ? [baseClassName, selectedClassName] : [baseClassName];
		const className = classNames.join(' ');

		return (
			<div
				onClick={onClick}
				className={className}
				style={{ height: height + 'px' }}>
				<div className="trailer-item-card">
					<div
						className="trailer-item-background-image"
						style={{ backgroundImage: getBackgroungImage(EventCode) }}/>
					<div className="trailer-item-content">
						<div className="trailer-date">
							<div className="trailer-date-day">
								{day}
							</div>
							<div className="trailer-date-month">
								{month}
							</div>
						</div>
						<div className="trailer-play-action">
							<CirclePlay size='large' color='white' />
						</div>
						<div className="trailer-rating">
							<div className="trailer-rating-percentage">
								{wtsPerc}%
							</div>
							<div className="trailer-rating-votes">
								{wtsCount} votes
							</div>
						</div>
					</div>
				</div>
				<div className="trailer-item-title">
					<a href="#">{EventTitle}</a>
				</div>
				{
					isPreviewOpen ?
					<TrailerPreview
						ref="preview"
						{...this.props}
						onClick={onClick} /* onClick will match the same behavior since event-code is same */
					/>
					:
					''
				}
			</div>
		);
	}
}

export default Trailer;

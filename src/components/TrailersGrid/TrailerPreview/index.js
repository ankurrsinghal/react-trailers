import React, { Component } from 'react';
import { Close, Like, Dislike, Help, Calendar } from 'grommet-icons';
import './style.scss';
import {
	GetYoutubeEmbededSourceFromWatchURL,
	getDayFromEventDisplayDate,
	getMonthFromEventDisplayDate,
	getYearFromEventDisplayDate
} from '../utils';

class TrailerPreview extends Component {

	handleClick = e => {
		e.stopPropagation()
	}

	render() {
		const { EventTitle, TrailerURL, onClick, EventLanguage, EventGenre, wtsPerc, wtsCount, maybeCount, dwtsCount, DispReleaseDate } = this.props;
		const src = GetYoutubeEmbededSourceFromWatchURL(TrailerURL);
		const genres = EventGenre ? EventGenre.split('|') : [];
		const $genres = genres.map(genre => <span key={genre} className="trailer-genre">{genre}</span>);
		const day = getDayFromEventDisplayDate(DispReleaseDate);
		const month = getMonthFromEventDisplayDate(DispReleaseDate);
		const year = getYearFromEventDisplayDate(DispReleaseDate);

		return (
			<div
				className="trailers-app-trailer-preview animated fadeIn"
				onClick={this.handleClick}>
				<div
					className="trailers-app-trailer-preview-anchor"
					
				/>
				<div
					className="trailer-preview-close"
					onClick={onClick}>
					<Close color='white' size='small' /> 
				</div>

				<div className="trailer-preview-video">
					<iframe
						title={EventTitle}
						src={src}
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen />
				</div>

				<div className="trailer-preview-details">
					<div className="trailer-preview-details-header">
						<div className="trailer-title">
							{EventTitle}
						</div>
						<div className="trailer-lang">
							{EventLanguage}
						</div>
						<div className="trailer-genres">
							{$genres}
						</div>
						<div className="trailer-stats-and-date">
							<div className="trailer-stats">
								<div className="icon">
									<Like size='small' color='white' />
								</div>
								<div className="details">
									<div className="upper-label">{wtsPerc}%</div>
									<div className="lower-label">{wtsCount} votes</div>
								</div>
							</div>
							<div className="trailer-preview-date">
								<div className="icon">
									<Calendar size='small' color='white' />
								</div>
								<div className="details">
									<div className="upper-label">{day} {month}</div>
									<div className="lower-label">{year}</div>
								</div>
							</div>
						</div>
						<div className="trailer-about">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sit laborum perspiciatis culpa quo molestiae est. Nihil vel itaque distinctio tempora. Alias ipsum impedit soluta? Voluptatibus, ut quae. Ullam, officia.
							<div className="read-more">Read More</div>
						</div>
					</div>
					<div className="trailer-preview-details-footer">
						<div className="trailer-view-actions">
							<div className="trailer-view-action will-watch">
								<div className="action-icon">
									<Like size='small' color='#49BA8E' />
								</div>
								<div className="action-label">
									will watch
								</div>
								<div className="action-count">
									({wtsCount})
								</div>
							</div>
							<div className="trailer-view-action maybe">
								<div className="action-icon">
									<Help size='small' color='#FFA800' />
								</div>
								<div className="action-label">
									Maybe
								</div>
								<div className="action-count">
									({maybeCount})
								</div>
							</div>
							<div className="trailer-view-action wont-watch">
								<div className="action-icon">
									<Dislike size='small' color='#B24142' />
								</div>
								<div className="action-label">
									won't watch
								</div>
								<div className="action-count">
									({dwtsCount})
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TrailerPreview;

import React, { Component } from 'react';
import './style.scss';
import { InfiniteScroll } from 'grommet';
import DB from '../../db';

import Trailer from './Trailer';
import Loader from '../Loader';

class TrailersGrid extends Component {

	state = {
		activePreviewItemCode: null,
		isTrailersLoading: false,
		trailers: [],
		page: 0
	}

	componentWillReceiveProps(nextProps, oldProps) {
		this.setState({
			trailers: [],
			activePreviewItemCode: null,
			page: 0
		}, () => {
			this.loadTrailers(nextProps);
		})
	}

	async loadTrailers(props) {
		if (!this.state.isTrailersLoading) {
			const { genres, languages } = props || this.props;
			this.setState({
				isTrailersLoading: true
			}, async () => {
				const trailers = await DB.getTrailers({ genres, languages, page: this.state.page });
				this.setState({
					trailers: this.state.trailers.concat(trailers),
					isTrailersLoading: false,
					page: this.state.page + 1
				});
			})
		}
	}

	handleOnItemClick = code => {
		const { activePreviewItemCode } = this.state

		if (activePreviewItemCode === code) {
			// close if already opened
			this.setState({
				activePreviewItemCode: null
			})
		} else {
			this.setState({
				activePreviewItemCode: code
			})
		}
	}

	render() {
		const { trailers, activePreviewItemCode, isTrailersLoading } = this.state;

		return (
			<div className="trailers-app-trailers-grid">
				<InfiniteScroll
					items={trailers}
					step={10}
					onMore={() => this.loadTrailers()}>
					{trailer => (
						<Trailer
							key={trailer.EventCode}
							isPreviewOpen={trailer.EventCode === activePreviewItemCode}
							{...trailer}
							onClick={() => this.handleOnItemClick(trailer.EventCode)}
						/>
					)}
				</InfiniteScroll>
				{
					isTrailersLoading
					?
					<Loader />
					:
					''
				}
			</div>
		);
	}
}

export default TrailersGrid;

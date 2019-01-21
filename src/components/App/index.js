import React, { Component } from 'react';
import { Grommet } from 'grommet';
import './style.scss';

import TopHeader from '../TopHeader';
import TrailersGrid from '../TrailersGrid';

import DB from '../../db';

const theme = {

};

class App extends Component {
	
	state = {
		isGenresLoading: false,
		isLanguagesLoading: false,
		genres: [],
		languages: [],
		genresValue: [],
		genresSelected: [],
		languagesValue: [],
		languagesSelected: []
	}

	componentDidMount() {
		this.loadGenres();
		this.loadLanguages();
	}

	async loadGenres() {
		this.setState({
			isGenresLoading: true
		});
		const genres = await DB.getGenres();
		this.setState({
			genres,
			isGenresLoading: false
		});
	}

	async loadLanguages() {
		this.setState({
			isLanguagesLoading: true
		});
		const languages = await DB.getLanguages();
		this.setState({
			languages,
			isLanguagesLoading: false
		});
	}

	handleOnGenreChange = event => {
		this.setState({
			genresValue: event.value,
			genresSelected: event.selected
		})
	}

	handleOnLanguageChange = event => {
		this.setState({
			languagesValue: event.value,
			languagesSelected: event.selected
		})
	}


	render() {
		const { isGenresLoading, isLanguagesLoading, genres, languages, genresValue, genresSelected, languagesValue, languagesSelected } = this.state

		return (
			<Grommet theme={theme}>
				<div className="trailers-app">
					<TopHeader
						isGenresLoading={isGenresLoading}
						isLanguagesLoadin={isLanguagesLoading}
						genres={genres}
						languages={languages}
						genresValue={genresValue}
						genresSelected={genresSelected}
						languagesValue={languagesValue}
						languagesSelected={languagesSelected}
						onGenreChange={this.handleOnGenreChange}
						onLanguageChange={this.handleOnLanguageChange}
					/>
					<TrailersGrid
						languages={languagesValue}
						genres={genresValue}
					/>
				</div>
			</Grommet>
		);
	}
}

export default App;

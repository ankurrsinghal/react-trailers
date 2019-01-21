import React from 'react';
import { Select, Button } from 'grommet';
import './style.scss';

const TopHeader = ({
	onGenreChange,
	onLanguageChange,
	isGenresLoading,
	isLanguagesLoading,
	genres,
	languages,
	genresValue,
	genresSelected,
	languagesValue,
	languagesSelected
}) => (
	<div className="trailers-app-top-header">
		<div className="top-header-left-section">
			<div className="top-header-logo">
				<a href="/">
					<Button primary label="Movie Trailers"></Button>
				</a>
			</div>
			{/* <div className="top-header-cta-action">
				<a href="" className="btn btn-primary">
					<Button plain={true} label="coming soon"></Button>
				</a>
			</div>
			<div className="top-header-cta-action">
				<a href="" className="btn btn-default">
					<Button primary label="now showing"></Button>
				</a>
			</div> */}
		</div>	
		<div className="top-header-right-section">
			<div className="top-header-select">
				<Select
					size="small"
					disabled={isGenresLoading}
					multiple={true}
					value={genresValue}
					selected={genresSelected}
					onChange={onGenreChange}
					options={genres}
					placeholder="All Genres"
					plain={true}
					messages={{ multiple: 'Selected Genres' }}
					dropHeight="medium"
				/>
			</div>
			<div className="top-header-select">
				<Select
					size="small"
					disabled={isLanguagesLoading}
					multiple={true}
					value={languagesValue}
					selected={languagesSelected}
					onChange={onLanguageChange}
					options={languages}
					placeholder="All languages"
					plain={true}
					messages={{ multiple: 'Selected languages' }}
					dropHeight="medium"
				/>
			</div>
		</div>
	</div>
);

export default TopHeader;

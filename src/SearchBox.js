import React from 'react';

const SearchBox = ({searchfield, SearchChange}) => {

	return (
		<div className = 'pa2 '>
		<input className = 'ba b--green bg-light-blue' type='search' placeholder='search robots' />
		</div>
		);
}

export default SearchBox;
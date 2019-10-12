import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {

	return (
		<div>
		<input className = 'ba b--green bg-light-blue' type='search' placeholder='search robots' onChange={searchChange} />
		</div>
		);
}

export default SearchBox;
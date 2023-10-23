import React from "react";

function Artist({ artist }) {
	

	const {
		name,
		genre,
		formed_year,
		description,
		albums,
		total_albums,
		website,
	} = artist;

	return (
		<>
			<h3>{name}</h3>
			<h3>{genre}</h3>
			<h3>{formed_year}</h3>
			<h3>{description}</h3>
			<h3>{albums}</h3>
			<h3>{total_albums}</h3>
			<h3>{website}</h3>
		</>
	);
}

export default Artist;

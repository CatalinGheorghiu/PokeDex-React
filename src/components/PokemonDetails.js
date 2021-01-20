import React from "react";

const PokemonDetails = ({sortedPokemonDetails}) => {
	console.log(sortedPokemonDetails);
	return (
		<div>
			<div className="flex flex-col mb-7">
				<div className="flex flex-wrap justify-center  mx-auto  w-full">
					<h1>{sortedPokemonDetails.name}</h1>
				
				
				</div>
			
			</div>
		</div>
	);
};

export default PokemonDetails;

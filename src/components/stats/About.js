import {
	calculateHeight,
	calculateWeight,
	kilogramsToLbs,
	metersToFeets
} from "../../helpers/helpers";

const About = ({pokemonSpecies, sortedPokemonDetails}) => {
	
	return (
		<div className="m-3">
			<div className=" p-3">
				<p>{(pokemonSpecies.flavor_text_entries[7].flavor_text).replace(/[\f]/gi, " ")}</p>
			</div>
			
			<div
				className="flex justify-between mt-3 p-3 shadow-custom2 rounded-2">
				<div>
					<p>Height</p>
					<p>{calculateHeight(sortedPokemonDetails.height)}m
						/ {metersToFeets(sortedPokemonDetails.height)}
					</p>
				</div>
				<div>
					<p>Weight</p>
					<p>{calculateWeight(sortedPokemonDetails.weight)} kg
						/ {kilogramsToLbs(calculateWeight(sortedPokemonDetails.weight))} lbs</p>
				</div>
			
			</div>
			
			<div className="my-3 p-3">
				<h1 className="underline font-extrabold">Breeding</h1>
				
				<div className="flex mt-2">
					<p className="w-5/12 mr-5 text-gray-600 font-medium">Egg
						Groups</p>
					<p className="font-semibold">Monster</p>
				</div>
				<div className="flex mt-2">
					<p className="w-5/12 mr-5 text-gray-600 font-medium">Egg
						Cicle</p>
					<p className="font-semibold ">Grass</p>
				</div>
			</div>
		</div>
	);
};

export default About;

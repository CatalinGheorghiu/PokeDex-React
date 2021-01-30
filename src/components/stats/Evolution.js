import {useEffect, useState}                from "react";
import {getIdFromURL, uppercaseFirstLetter} from "../../helpers/helpers";

const Evolution = ({pokemonSpecies}) => {
		const [evolution, setEvolution] = useState(null);
		
		useEffect(() => {
			(async () => {
				if (pokemonSpecies) {
					const result = await fetch(pokemonSpecies.evolution_chain.url);
					const data = await result.json();
					setEvolution(data);
				}
			})();
		}, [pokemonSpecies, pokemonSpecies.evolution_chain.url]);
		
		console.log(evolution);
		return (
			<>
				{evolution && <div className="py-3">
					<div className="flex justify-between mt-2">
						<p className="w-5/12 pl-3 text-left text-gray-600 font-medium">{uppercaseFirstLetter(evolution.chain.species.name)}</p>
						<p className="w-5/12 text-center font-semibold">{uppercaseFirstLetter(evolution.chain.evolves_to[0].species.name)}</p>
					</div>
					
					<div className="flex  justify-between mt-2">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromURL(evolution.chain.species.url)}.png`}
							alt={evolution.chain.species.name}
							className="w-2/6 h-full"/>
						
						<div className="w-full  mt-10 flex align-bottom ">
							<i className="w-full text-4xl text-center fas fa-angle-double-right "/>
						</div>
						
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromURL(evolution.chain.evolves_to[0].species.url)}.png`}
							alt={evolution.chain.evolves_to[0].species.name}
							className="w-2/6 h-full text-gray-600 font-medium"/>
					</div>
					{evolution.chain.evolves_to[0].evolves_to[0] &&
					<div className="flex justify-between mt-10">
						<p className="w-5/12 pl-3 text-left text-gray-600 font-medium">{uppercaseFirstLetter(evolution.chain.evolves_to[0].species.name)}</p>
						<p className="w-5/12 text-center font-semibold">{uppercaseFirstLetter(evolution.chain.evolves_to[0].evolves_to[0].species.name)}</p>
					</div>
					}
					{evolution.chain.evolves_to[0].evolves_to[0] &&
					<div className="flex justify-between mt-2">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromURL(evolution.chain.evolves_to[0].species.url)}.png`}
							alt={evolution.chain.evolves_to[0].species.name}
							className="w-2/6 h-full"/>
						
						<div className="w-full  mt-7 flex align-bottom ">
							<i className="w-full text-4xl text-center  fas fa-angle-double-right "/>
						</div>
						
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromURL(evolution.chain.evolves_to[0].evolves_to[0].species.url)}.png`}
							alt={evolution.chain.evolves_to[0].evolves_to[0].species.name}
							className="w-2/6 h-full"/>
					</div>
					}
				</div>}
			</>
		
		);
	}
;

export default Evolution;

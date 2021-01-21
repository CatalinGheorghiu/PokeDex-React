import {useEffect, useState} from "react";
import {v4 as uuidv4}        from "uuid";
import {
	backgroundImage,
	selectColor,
	uppercaseFirstLetter,
	zeroPad
}                            from "../helpers/helpers";
import About                 from "./stats/About";
import Moves                 from "./stats/Moves";
import Stats                 from "./stats/Stats";
import Evolution             from "./stats/Evolution";

const PokemonDetails = ({sortedPokemonDetails}) => {
	// console.log(sortedPokemonDetails.species.url);
	const [pokemonSpecies, setPokemonSpecies] = useState(null);
	const [menu, setMenu] = useState("about");
	console.log(pokemonSpecies);
	
	useEffect(() => {
		(async () => {
			const result = await fetch(sortedPokemonDetails.species.url);
			const data = await result.json();
			setPokemonSpecies(data);
		})();
	}, [sortedPokemonDetails.species.url]);
	
	
	return (
		
		<div className="flex flex-col ">
			<div
				className=" w-full flex flex-wrap justify-center  ">
				<div
					className={`w-full h-auto border my-5 rounded-1 cursor-pointer   ${selectColor(sortedPokemonDetails.types)}`}>
					<div
						className="flex justify-between text-white font-bold  p-3">
						<h3>{uppercaseFirstLetter(sortedPokemonDetails.name)}</h3>
						<p>#{zeroPad(sortedPokemonDetails.id)}</p>
					</div>
					
					<div className="flex flex-row mx-1 ">
						{sortedPokemonDetails.types.map(type => type.type.name !== "normal" ? (
							<p key={uuidv4()}
							   className="bg-white bg-opacity-25 rounded-2 text-center text-white font-semibold mx-1  px-2"
							>{type.type.name} </p>) : "")}
					</div>
					
					<div
						className="w-3/5   mx-auto bg-white bg-opacity-50 rounded-full  relative">
						
						<img
							src={backgroundImage(sortedPokemonDetails)}
							alt={`${sortedPokemonDetails.name}`}
							className="w-full"/>
					</div>
					
					<div
						className="w-full   p-3  bg-white rounded-2 ">
						<ul className="flex justify-between mb-3">
							<li>
								<button
									onClick={() => setMenu("about")}
									className=" focus:outline-none p-1"
								>About
								</button>
							</li>
							<li>
								<button onClick={() => setMenu("stats")}
								        className=" focus:outline-none p-1 "
								>Base
									Stats
								</button>
							</li>
							<li>
								<button
									onClick={() => setMenu("evolution")}
									className=" focus:outline-none p-1 "
								>Evolution
								</button>
							</li>
							<li>
								<button
									onClick={() => setMenu("moves")}
									className=" focus:outline-none p-1 "
								>Moves
								</button>
							</li>
						</ul>
						
						{menu === "about" &&
						<About pokemonSpecies={pokemonSpecies}/>}
						{menu === "evolution" &&
						<Evolution pokemonSpecies={pokemonSpecies}/>}
						{menu === "stats" &&
						<Stats pokemonSpecies={pokemonSpecies}/>}
						{menu === "moves" &&
						<Moves pokemonSpecies={pokemonSpecies}/>}
					
					
					</div>
				
				
				</div>
			</div>
		</div>
	
	);
};

export default PokemonDetails;

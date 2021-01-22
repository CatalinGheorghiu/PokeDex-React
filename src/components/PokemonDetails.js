import {useEffect, useState} from "react";
import {v4 as uuidv4}        from "uuid";
import {
	backgroundImage,
	selectColor,
	uppercaseFirstLetter,
	zeroPad
}                            from "../helpers/helpers";
import About                 from "./stats/About";
import Stats                 from "./stats/Stats";
import Evolution             from "./stats/Evolution";

const PokemonDetails = ({sortedPokemonDetails}) => {
	// console.log(sortedPokemonDetails);
	const [pokemonSpecies, setPokemonSpecies] = useState(null);
	const [menu, setMenu] = useState("about");
	// console.log(pokemonSpecies);
	
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
					className={`w-full h-auto border my-5 rounded-3 rounded-b-2 cursor-pointer   ${selectColor(sortedPokemonDetails.types)} sm:w-3/4 md:w-2/4 xl:w-2/6`}>
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
						className="w-full   p-3  bg-white rounded-4 rounded-b-2 ">
						<ul className="flex justify-between mx-1 mb-3">
							<li>
								<button
									onClick={() => setMenu("about")}
									className=" focus:outline-none focus:text-blue-500 focus:underline p-1"
								>About
								</button>
							</li>
							<li>
								<button onClick={() => setMenu("stats")}
								        className=" focus:outline-none focus:text-blue-500 focus:underline p-1 "
								>Base
									Stats
								</button>
							</li>
							<li>
								<button
									onClick={() => setMenu("evolution")}
									className=" focus:outline-none focus:text-blue-500 focus:underline p-1 "
								>Evolution
								</button>
							</li>
							{/*<li>*/}
							{/*	<button*/}
							{/*		onClick={() => setMenu("moves")}*/}
							{/*		className=" focus:outline-none focus:text-blue-500 focus:underline p-1 "*/}
							{/*	>Moves*/}
							{/*	</button>*/}
							{/*</li>*/}
						</ul>
						
						{menu === "about" && pokemonSpecies &&
						<About pokemonSpecies={pokemonSpecies}
						       sortedPokemonDetails={sortedPokemonDetails}/>}
						{menu === "evolution" && pokemonSpecies &&
						<Evolution pokemonSpecies={pokemonSpecies}
						           sortedPokemonDetails={sortedPokemonDetails}/>}
						{menu === "stats" && pokemonSpecies &&
						<Stats pokemonSpecies={pokemonSpecies}
						       sortedPokemonDetails={sortedPokemonDetails}/>}
						{/*{menu === "moves" && pokemonSpecies &&*/}
						{/*<Moves pokemonSpecies={pokemonSpecies}*/}
						{/*       sortedPokemonDetails={sortedPokemonDetails}/>}*/}
					
					
					</div>
				
				
				</div>
			</div>
		</div>
	
	);
};

export default PokemonDetails;

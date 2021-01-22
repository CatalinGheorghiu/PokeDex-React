import {useEffect}    from "react";
import {v4 as uuidv4} from "uuid";
import {
	backgroundImage,
	selectColor,
	uppercaseFirstLetter,
	zeroPad
}                     from "../helpers/helpers";

const Pokemon = ({
	                 pokemonDetails,
	                 loadingPokemons,
	                 allPokemons,
	                 handleScroll
                 }) => {
		
		useEffect(() => {
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}, [handleScroll]);
		
		
		return (
			<div className="flex flex-col mb-7">
				<h1 className="text-center text-3xl underline font-extrabold  mb-5">Total
					Pokemons: {allPokemons.length}</h1>
				<div className="flex flex-wrap justify-between  mx-auto  w-full">
					{pokemonDetails.map((pokemon, index) => (
							
							<div key={uuidv4()} data-id={index + 1}
							     className={`${selectColor(pokemon.types)} border w-full m-3 p-3 rounded-2 cursor-pointer xs:w-5/12 md:w-1/4 lg:w-1/5 xl:w-1/6`}>
								<div
									className="flex justify-between text-white font-bold ">
									<h3>{uppercaseFirstLetter(pokemon.name)}</h3>
									<p>#{zeroPad(pokemon.id)}</p>
								</div>
								
								<div className="flex flex-row justify-between m-2">
									{pokemon.types.map(type => type.type.name !== "normal" ? (
										<p className="bg-white bg-opacity-25 rounded-2 text-center  px-2"
										   key={uuidv4()}>{type.type.name} </p>) : "")}
								</div>
								
								<div
									className="bg-white bg-opacity-50 rounded-full  relative">
									
									<img
										src={backgroundImage(pokemon)}
										alt={`${pokemon.name}`}/>
								</div>
							</div>
						)
					)}
					
					{loadingPokemons &&
					<div className="w-full text-center">Loading...</div>}
				</div>
			
			</div>
		
		);
	}
;

export default Pokemon;

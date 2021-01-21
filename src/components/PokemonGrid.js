import Pokemon        from "./Pokemon";
import PokemonDetails from "./PokemonDetails";

const PokemonGrid = ({
	                     showSortedPokemon,
	                     hidePokemonGrid,
	                     showPokemons,
	                     sortedPokemonDetails,
	                     displayButtons,
	                     pokemonDetails,
	                     loadingPokemons,
	                     allPokemons,
	                     loading
                     }) => {
	
	
	return (
		<>
			
			{showSortedPokemon &&
			<PokemonDetails sortedPokemonDetails={sortedPokemonDetails}/>}
			
			{showPokemons &&
			<Pokemon displayButtons={displayButtons}
			         pokemonDetails={pokemonDetails} loading={loading}
			         loadingPokemons={loadingPokemons} allPokemons={allPokemons}/>}
		
		</>
	
	);
};


export default PokemonGrid;

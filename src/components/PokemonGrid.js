import Pokemon        from "./Pokemon";
import PokemonDetails from "./PokemonDetails";

const PokemonGrid = ({
	                     showSortedPokemon,
	                     sortedPokemonDetails,
	                     displayButtons,
	                     showButtons,
	                     pokemonDetails,
	                     loadingPokemons,
	                     allPokemons,
	                     loading
                     }) => {
	
	
	return (
		<>
			
			{showSortedPokemon &&
			<PokemonDetails sortedPokemonDetails={sortedPokemonDetails}/>}
			
			{!showButtons &&
			<Pokemon displayButtons={displayButtons}
			         pokemonDetails={pokemonDetails} loading={loading}
			         loadingPokemons={loadingPokemons} allPokemons={allPokemons}/>}
		
		</>
	
	);
};


export default PokemonGrid;

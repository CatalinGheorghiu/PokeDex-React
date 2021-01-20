import Pokemon        from "./Pokemon";
import PokemonDetails from "./PokemonDetails";

const PokemonGrid = ({
	                     showSortedPokemon,
	                     sortedPokemonDetails,
	                     displayButtons,
	                     showButtons,
	                     pokemonDetails,
	                     loadingPokemons,
	                     loading
                     }) => {
	
	
	return (
		<>
			
			{showSortedPokemon && true &&
			<PokemonDetails sortedPokemonDetails={sortedPokemonDetails}/>}
			
			{!showButtons &&
			<Pokemon displayButtons={displayButtons}
			         pokemonDetails={pokemonDetails} loading={loading}
			         loadingPokemons={loadingPokemons}/>}
		
		</>
	
	);
};


export default PokemonGrid;

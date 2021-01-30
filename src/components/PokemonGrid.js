import Pokemon        from "./Pokemon";
import PokemonDetails from "./PokemonDetails";

const PokemonGrid = ({
	                     showSortedPokemon,
	                     handleScroll,
	                     showPokemons,
	                     sortedPokemonDetails,
	                     displayButtons,
	                     pokemonDetails,
	                     loadingPokemons,
	                     allPokemons,
	                     loading,selectedPokemon
                     }) => {
	
	
	return (
		<>
			
			{showSortedPokemon &&
			<PokemonDetails sortedPokemonDetails={sortedPokemonDetails}/>}
			
			{showPokemons &&
			<Pokemon
				handleScroll={handleScroll}
				displayButtons={displayButtons}
				pokemonDetails={pokemonDetails} loading={loading}
				loadingPokemons={loadingPokemons} allPokemons={allPokemons}
				selectedPokemon={selectedPokemon}
			/>}
		
		</>
	
	);
};


export default PokemonGrid;

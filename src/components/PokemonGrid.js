import ButtonList from "./ButtonList";
import Pokemon    from "./Pokemon";

const PokemonGrid = ({
	                     pokemons,
	                     hideButtons,
	                     displayButtons,
	                     showButtons,
	                     pokemonDetails,
	                     loading
                     }) => {
	
	
	
	return (
		<>
			{showButtons ? <ButtonList hideButtons={hideButtons}/> :
				<Pokemon pokemons={pokemons} displayButtons={displayButtons}
				         pokemonDetails={pokemonDetails} loading={loading}/>}
		
		</>
	
	);
};

export default PokemonGrid;

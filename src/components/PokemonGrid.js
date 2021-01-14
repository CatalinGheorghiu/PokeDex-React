import ButtonList from "./ButtonList";
import Pokemon    from "./Pokemon";

const PokemonGrid = ({pokemons, hideButtons, displayButtons, showButtons}) => {
	
	return (
		<>
			{showButtons ? <ButtonList hideButtons={hideButtons}/> :
				<Pokemon pokemons={pokemons} displayButtons={displayButtons}/>}
		
		</>
	
	);
};

export default PokemonGrid;

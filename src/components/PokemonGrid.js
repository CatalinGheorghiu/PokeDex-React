import ButtonList from "./ButtonList";
import Pokemon    from "./Pokemon";

const PokemonGrid = ({

	                     hideButtons,
	                     displayButtons,
	                     showButtons,
	                     pokemonDetails,
	                     loading
                     }) => {
	
	
	
	return (
		<>
			{showButtons ? <ButtonList hideButtons={hideButtons}/> :
				<Pokemon  displayButtons={displayButtons}
				         pokemonDetails={pokemonDetails} loading={loading}/>}
		
		</>
	
	);
};

export default PokemonGrid;

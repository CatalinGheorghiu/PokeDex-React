const PokemonGrid = ({pokemons}) => {
	
	return (
		<div className="text-red-900">
			<ul>
				{pokemons.map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	);
};

export default PokemonGrid;

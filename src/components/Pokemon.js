const Pokemon = ({pokemons}) => {
	console.log(pokemons);
	return (
		<>
			
			{pokemons.map((pokemon,index) => (<p key={index}>{pokemon.name}</p>))}
		</>
	);
};

export default Pokemon;

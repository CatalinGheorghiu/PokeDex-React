import {useEffect, useState} from "react";
import Navbar                from "./components/Navbar";
import PokemonGrid           from "./components/PokemonGrid";

const App = () => {
	const [pokemons, setPokemons] = useState(null);
	const [visibility, setVisibility] = useState(false);
	
	const handleClick = () => {
		setVisibility(true);
	};
	
	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
		.then(r => r.json())
		.then(data => {
			setPokemons(data.results);
		});
	}, []);
	
	
	return (
		<>
			<Navbar handleClick={handleClick}/>
			<main>
				{visibility && <PokemonGrid pokemons={pokemons}/>}
			</main>
		</>
	);
};

export default App;

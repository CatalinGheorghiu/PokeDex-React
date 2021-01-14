import {useEffect, useState} from "react";
import Navbar                from "./components/Navbar";
import PokemonGrid           from "./components/PokemonGrid";

const App = () => {
	const [pokemons, setPokemons] = useState("");
	const [showPokemons, setShowPokemons] = useState(false);
	const [showButtons, setShowButtons] = useState(true);
	const [showNavbar, setShowNavbar] = useState(true);
	
	const hideButtons = () => {
		setShowPokemons(true);
		setShowButtons(false);
		setShowNavbar(false);
		console.log(pokemons);
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
			{/*<Navbar hideButtons={hideButtons}/>*/}
			<Navbar/>
			<main className="w-5/6 h-3/4 mx-auto">
				
				
				{/*{showPokemons && <PokemonGrid pokemons={pokemons}/>}*/}
				<PokemonGrid pokemons={pokemons} hideButtons={hideButtons}
				             showButtons={showButtons}/>
			</main>
		</>
	);
};

export default App;

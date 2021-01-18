import {useEffect, useState} from "react";
import Navbar                from "./components/Navbar";
import PokemonGrid           from "./components/PokemonGrid";
import Loading               from "./components/Loading";

const App = () => {
	const [pokemons, setPokemons] = useState("");
	const [allPokemons, setAllPokemons] = useState("");
	const [showPokemons, setShowPokemons] = useState(false);
	const [showButtons, setShowButtons] = useState(true);
	const [showNavbar, setShowNavbar] = useState(true);
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [loading, setLoading] = useState(false);
	

	const hideButtons = () => {
		setLoading(true);
		setTimeout(() => {
			setShowPokemons(true);
			setShowButtons(false);
			setShowNavbar(false);
			setLoading(false);
		}, 1500);
	};
	
	const hidePokemonGrid = () => {
		setShowPokemons(false);
		setShowButtons(false);
	};
	
	const displayButtons = () => {
		setShowPokemons(false);
		setShowButtons(true);
		setShowNavbar(true);
	};
	
	const fetchPokemonDetails = async (url) => {
		const results = await fetch(url);
		return await results.json();
	};
	
	
	useEffect(() => {
		(async () => {
			try {
				const results = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118");
				const data = await results.json();
				setAllPokemons(data.results);
			} catch (e) {
				console.log(e);
			}
		})();
		
		
	}, []);
	
	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
		.then(r => r.json())
		.then(async data => {
			const rez = await Promise.all(data.results.map((details) => fetchPokemonDetails(details.url)));
			setPokemons(data.results);
			setPokemonDetails(rez);
		});
	}, []);
	
	
	return (
		<>
			{/*<Navbar hideButtons={hideButtons}/>*/}
			{allPokemons && <Navbar showNavbar={showNavbar}
			                        hidePokemonGrid={hidePokemonGrid}
			                        displayButtons={displayButtons}
			                        pokemons={pokemons}
			                        allPokemons={allPokemons}/>}
			
			<main className="w-5/6 h-full  mx-auto">
				{/*{showPokemons && <PokemonGrid pokemons={pokemons}/>}*/}
				
				{loading ? <Loading/> :
					<PokemonGrid pokemons={pokemons}
					             hideButtons={hideButtons}
					             showButtons={showButtons}
					             displayButtons={displayButtons}
					             showPokemons={showPokemons}
					             pokemonDetails={pokemonDetails}
					             loading={loading}/>}
			</main>
		</>
	);
};

export default App;

import {useEffect, useState} from "react";
import Navbar                from "./components/Navbar";
import PokemonGrid           from "./components/PokemonGrid";
import Loading               from "./components/Loading";

const App = () => {
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [allPokemons, setAllPokemons] = useState("");
	const [showPokemons, setShowPokemons] = useState(false);
	const [showButtons, setShowButtons] = useState(true);
	const [showNavbar, setShowNavbar] = useState(true);
	const [loading, setLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [loadingPokemons, setLoadingPokemons] = useState(false);
	
	const [sortPokemons, setSortPokemons] = useState();
	const [sortedPokemonDetails, setSortedPokemonDetails] = useState("");
	const [showSortedPokemon, setShowSortedPokemon] = useState(false);
	
	
	const wait = (ms) => new Promise((r) => setTimeout(r, ms));
	
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
	
	const handleScroll = async () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		)
			return;
		
		setLoadingPokemons(true);
		await wait(3000)
		setOffset(prev => prev + 20);
		setLoadingPokemons(false);
	};
	
	const selectedPokemons = (sortPokemons) => {
		setSortPokemons(sortPokemons);
		setShowSortedPokemon(true);
	};
	
	
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	useEffect(() => {
		(async () => {
			try {
				const results = await fetch(sortPokemons);
				const data = await results.json();
				setSortedPokemonDetails(data)
				// setAllPokemons(data.results);
			} catch (e) {
			}
		})();
		
		
	}, [sortPokemons]);
	
	useEffect(() => {
		(async () => {
			try {
				const results = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118");
				const data = await results.json();
				setAllPokemons(data.results);
			} catch (e) {
			}
		})();
		
		
	}, []);
	
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
				const {results} = await res.json();
				const rez = await Promise.all(results.map((details) => fetchPokemonDetails(details.url)));
				setPokemonDetails(prev => [...prev, ...rez]);
			} catch (e) {
			}
			
		})();
	}, [offset]);
	
	
	return (
		<>
			{allPokemons && <Navbar showNavbar={showNavbar}
			                        selectedPokemons={selectedPokemons}
			                        hidePokemonGrid={hidePokemonGrid}
			                        displayButtons={displayButtons}
			                        allPokemons={allPokemons}
			                        hideButtons={hideButtons}/>}
			
			<main className="w-5/6 h-full  mx-auto">
				{loading ? <Loading/> :
					<PokemonGrid
						sortedPokemonDetails={sortedPokemonDetails}
						showSortedPokemon={showSortedPokemon}
						sortPokemons={sortPokemons}
						hideButtons={hideButtons}
						showButtons={showButtons}
						displayButtons={displayButtons}
						showPokemons={showPokemons}
						pokemonDetails={pokemonDetails}
						loading={loading}
						loadingPokemons={loadingPokemons}
					/>}
			</main>
		</>
	);
};

export default App;

import {useEffect, useState} from "react";
import Navbar                from "./components/Navbar";
import PokemonGrid           from "./components/PokemonGrid";
import Loading               from "./components/Loading";
import useFetch              from "./helpers/useFetch";

const App = () => {
	const {results: allPokemons} = useFetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118", "");
	console.log(allPokemons);
	
	const [pokemonDetails, setPokemonDetails] = useState([]);
	// const [allPokemons, setAllPokemons] = useState("");
	
	const [showPokemons, setShowPokemons] = useState(false);
	const [showSortedPokemon, setShowSortedPokemon] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	
	const [loading, setLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [loadingPokemons, setLoadingPokemons] = useState(false);
	
	const [sortPokemons, setSortPokemons] = useState();
	const [sortedPokemonDetails, setSortedPokemonDetails] = useState("");
	
	
	const showAllPokemons = () => {
		setLoading(true);
		setTimeout(() => {
			setShowSortedPokemon(false);
			setShowPokemons(true);
			
			setShowNavbar(false);
			setLoading(false);
		}, 1500);
	};
	
	
	const displayButtons = () => {
		setShowPokemons(false);
		setShowSortedPokemon(false);
		
		setShowNavbar(true);
	};
	
	const fetchPokemonDetails = async (url) => {
		const results = await fetch(url);
		return await results.json();
	};
	
	
	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		)
			return;
		setLoadingPokemons(true);
		setOffset(prev => prev + 20);
		setLoadingPokemons(false);
	};
	
	const selectedPokemon = (sortPokemons) => {
		if (sortPokemons !== null) {
			setLoading(true);
			setSortPokemons(sortPokemons);
			setTimeout(() => {
				setShowSortedPokemon(true);
				setShowNavbar(false);
				setLoading(false);
			}, 1000);
			
			setShowPokemons(false);
		} else if (showPokemons === false) {
			setShowSortedPokemon(false);
			setShowPokemons(false);
		}
	};
	
	
	useEffect(() => {
		(async () => {
			try {
				const results = await fetch(sortPokemons);
				const data = await results.json();
				setSortedPokemonDetails(data);
			} catch (e) {
			}
		})();
		
		
	}, [sortPokemons]);
	
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const results = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118");
	// 			const data = await results.json();
	// 			setAllPokemons(data.results);
	// 		} catch (e) {
	// 		}
	// 	})();
	//
	//
	// }, []);
	
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
			                        selectedPokemons={selectedPokemon}
			                        displayButtons={displayButtons}
			                        allPokemons={allPokemons}
			                        hideButtons={showAllPokemons}/>}
			
			<main className="w-5/6 h-full  mx-auto">
				{loading ? <Loading/> :
					<PokemonGrid
						handleScroll={handleScroll}
						sortedPokemonDetails={sortedPokemonDetails}
						showSortedPokemon={showSortedPokemon}
						sortPokemons={sortPokemons}
						hideButtons={showAllPokemons}
						displayButtons={displayButtons}
						showPokemons={showPokemons}
						pokemonDetails={pokemonDetails}
						allPokemons={allPokemons}
						loading={loading}
						loadingPokemons={loadingPokemons}
						selectedPokemon={selectedPokemon}
					/>}
			</main>
		</>
	);
};

export default App;

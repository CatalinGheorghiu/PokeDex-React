import Select from "react-select-virtualized";

const Navbar = ({
	                handleClick,
	                showNavbar,
	                displayButtons,
	                hidePokemonGrid,
	                pokemons,
	                allPokemons
                }) => {
	
	// const [selectedPokemon, setSelectedPokemon] = useState();
	
	const options = allPokemons.map(pokemon => ({
		value: pokemon.name,
		label: pokemon.name
	}));
	
	
	const style = {
		control: base => ({
			...base,
			border: 0,
			// This line disable the blue border
			boxShadow: "none",
		}),
		
	};
	
	// const handleChange = (event) => {
	//
	// };
	
	
	return (
		<header className="w-5/6 mx-auto">
			{/*	Title*/}
			<h1 className=" font-nunito text-3xl py-8 ">What Pokemon are you
				looking
				for?</h1>
			{/*SEARCH BAR*/}
			<div
				className="flex border bg-white  rounded-1 focus:outline-none focus:ring-1 focus:border-gray-300 p-2 pl-2 w-full ">
				<button onClick={handleClick}
				        type="button"
				        className="px-2 focus:outline-none">
					<i className="fas fa-search"/>
				</button>
				
				
				<Select
					options={options}
					styles={style}
					components={{
						DropdownIndicator: () => null,
						IndicatorSeparator: () => null
					}}
					openMenuOnFocus={false}
					openMenuOnClick={false}
					onChange={hidePokemonGrid}
					className="w-full"
					placeholder="Search Pokemon..."/>
			</div>
			{!showNavbar && <button
				className="border focus:outline-none hover:bg-blue-500 hover:text-white w-full p-1.5 my-5 rounded-2"
				onClick={displayButtons}>Back</button>}
		
		</header>
	);
};

export default Navbar;

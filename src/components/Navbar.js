import Select from "react-select-virtualized";

const Navbar = ({
	                handleClick,
	                showNavbar,
	                displayButtons,
	                selectedPokemons,
	                allPokemons,
	                hideButtons
                }) => {
	
	
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
	
	
	const handleChange = (event) => {
		if (event !== null) {
			const [selectedPokemonArr] = allPokemons.filter(pokemon => pokemon.name === event.value);
			selectedPokemons(selectedPokemonArr.url);
		} else {
			selectedPokemons(event);
		}
		
	};
	
	
	return (
		<header className="w-5/6 mx-auto">
			{/*	Title*/}
			<h1 className=" font-nunito text-3xl py-8 ">What Pokemon are you
				looking
				for?</h1>
			
			<ul
				className="flex flex-col sm:flex-row  ">
				<li className="w-full h-14   bg-no-repeat bg-cover rounded-1 mx-2  my-3 sm:w-3/4">
					<div
						className="w-full flex border bg-white  rounded-1 focus:outline-none focus:ring-1 focus:border-gray-300 p-2 pl-2  ">
						<button onClick={handleClick}
						        type="button"
						        className="px-2 focus:outline-none">
							<i className="fas fa-search"/>
						</button>
						
						
						<Select
							options={options}
							styles={style}
							components={{
								// DropdownIndicator: () => null,
								IndicatorSeparator: () => null
							}}
							openMenuOnFocus={false}
							openMenuOnClick={false}
							// isClearable={true}
							onChange={handleChange}
							onSelectResetsInput={true}
							className="w-full "
							placeholder="Search Pokemon..."/>
					</div>
				</li>
				{showNavbar && <li
					className="w-full h-14 bg-green-600 bg-poke bg-center bg-cover rounded-1 my-3 sm:w-1/4 ">
					<button
						className="w-full h-full border-none  focus:outline-none text-center  text-gray-800 font-extrabold font-extrabold"
						onClick={hideButtons}>Show All Pokemons
					</button>
				</li>}
				{!showNavbar &&
				<li className="w-full h-14   bg-no-repeat bg-cover rounded-1  my-3 sm:w-1/4">
					<button
						className="w-full h-14 border focus:outline-none hover:bg-blue-500 hover:text-white mb-7  rounded-2 "
						onClick={displayButtons}>Back
					</button>
				</li>}
			</ul>
		
		</header>
	);
};

export default Navbar;

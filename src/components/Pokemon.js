import {v4 as uuidv4} from "uuid";

const Pokemon = ({pokemonDetails, loadingPokemons}) => {
	//console.log(pokemonDetails);//sprites.other["official-artwork"]["front_default"]
	
	
	const uppercaseFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};
	
	const zeroPad = (num) => num.toString().padStart(3, "0");
	
	const selectColor = (arr) => {
		let color = "bg-normal";
		
		const filteredColor = arr.types.filter(item => item.type.name !== "normal").map(item => item.type.name).slice(0, 1).join();
		
		switch (filteredColor) {
			case "fire":
				color = "bg-fire";
				break;
			case "ice":
				color = "bg-ice";
				break;
			case "grass":
				color = "bg-grass";
				break;
			case "electric":
				color = "bg-electric";
				break;
			case "water":
				color = "bg-water";
				break;
			case "ground":
				color = "bg-ground";
				break;
			case "rock":
				color = "bg-rock";
				break;
			case "fairy":
				color = "bg-fairy";
				break;
			case "poison":
				color = "bg-poison";
				break;
			case "bug":
				color = "bg-bug";
				break;
			case "dragon":
				color = "bg-dragon";
				break;
			case "psychic":
				color = "bg-psychic";
				break;
			case "flying":
				color = "bg-flying";
				break;
			case "fighting":
				color = "bg-fighting";
				break;
			case "ghost":
				color = "bg-ghost";
				break;
			case "steel":
				color = "bg-steel";
				break;
			case "dark":
				color = "bg-dark";
				break;
			default:
				return color;
		}
		return color;
	};
	
	const backgroundImage = (item) => {
		if (item.sprites.other["official-artwork"]["front_default"] !== null) {
			return item.sprites.other["official-artwork"]["front_default"];
		} else {
			return require("../img/ball2.png").default;
		}
	};
	
	
	return (
		<div className="flex flex-col mb-7">
			<div className="flex flex-wrap justify-center  mx-auto  w-full">
				{pokemonDetails.map((pokemon, index) => (
						
						<div key={uuidv4()} data-id={index + 1}
						     className={`${selectColor(pokemon)} border w-48 m-3 p-3 rounded-2 cursor-pointer`}>
							<div
								className="flex justify-between text-white font-bold">
								<h3>{uppercaseFirstLetter(pokemon.name)}</h3>
								<p>#{zeroPad(pokemon.id)}</p>
							</div>
							
							<div className="flex flex-row justify-between m-2">
								{pokemon.types.map(type => type.type.name !== "normal" ? (
									<p className="bg-white bg-opacity-25 rounded-2 text-center  px-2"
									   key={uuidv4()}>{type.type.name} </p>) : "")}
							</div>
							
							<div
								className="bg-white bg-opacity-50 rounded-full  relative">
								
								<img
									src={backgroundImage(pokemon)}
									alt={`${pokemon.name}`}/>
							</div>
						</div>
					)
				)}
				
			{loadingPokemons &&
			<div className="w-full text-center">Loading...</div>}
			</div>
		
		</div>
	
	);
};

export default Pokemon;

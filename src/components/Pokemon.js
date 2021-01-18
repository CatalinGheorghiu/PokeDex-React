import {v4 as uuidv4} from "uuid";

const Pokemon = ({pokemons, pokemonDetails, loading}) => {
	// console.log(pokemonDetails);//sprites.other["official-artwork"]["front_default"]
	
	
	const uppercaseFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};
	
	const zeroPad = (num) => {
		return num.toString().padStart(3, "0");
	};
	
	const selectColor = (arr) => {
		let color = "normal";
		
		const filteredColor = arr.filter(item => item.type.name !== "normal").map(item => item.type.name).slice(0, 1).join();
		switch (filteredColor) {
			case "fire":
				color = "fire";
				break;
			case "ice":
				color = "ice";
				break;
			case "grass":
				color = "grass";
				break;
			case "electric":
				color = "electric";
				break;
			case "water":
				color = "water";
				break;
			case "ground":
				color = "ground";
				break;
			case "rock":
				color = "rock";
				break;
			case "fairy":
				color = "fairy";
				break;
			case "poison":
				color = "poison";
				break;
			case "bug":
				color = "bug";
				break;
			case "dragon":
				color = "dragon";
				break;
			case "psychic":
				color = "psychic";
				break;
			case "flying":
				color = "flying";
				break;
			case "fighting":
				color = "fighting";
				break;
			case "ghost":
				color = "ghost";
				break;
			case "steel":
				color = "steel";
				break;
			case "dark":
				color = "dark";
				break;
			default:
				return color;
		}
		return filteredColor;
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
			<div className="flex flex-wrap justify-between mx-auto  w-full">
				{pokemons.map((pokemon, index) => (
						
						<div key={uuidv4()} data-id={index + 1}
						     className={`bg-${selectColor(pokemonDetails[index].types)} border w-48 m-3 p-3 rounded-2 cursor-pointer`}>
							<div
								className="flex justify-between text-white font-bold">
								<h3>{uppercaseFirstLetter(pokemon.name)}</h3>
								<p>#{zeroPad(pokemonDetails[index].id)}</p>
							</div>
							
							<div className="flex flex-row justify-between m-2">
								{pokemonDetails[index].types.map(type => type.type.name !== "normal" ? (
									<p className="bg-white bg-opacity-25 rounded-2 text-center  px-2"
									   key={uuidv4()}>{type.type.name} </p>) : "")}
							</div>
							
							<div
								className="bg-white bg-opacity-50 rounded-full  relative">
								
								<img
									src={backgroundImage(pokemonDetails[index])}
									alt={`${pokemon.name}`}/>
							</div>
						</div>
					)
				)}
			</div>
		
		</div>
	);
};

export default Pokemon;

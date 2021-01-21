export const uppercaseFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
export const zeroPad = (num) => num.toString().padStart(3, "0");
export const selectColor = (arr) => {
	let color = "bg-normal";
	
	const filteredColor = arr.filter(item => item.type.name !== "normal").map(item => item.type.name).slice(0, 1).join();
	
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
export const backgroundImage = (item) => {
	if (item.sprites.other["official-artwork"]["front_default"] !== null) {
		return item.sprites.other["official-artwork"]["front_default"];
	} else {
		return require("../img/ball2.png").default;
	}
};



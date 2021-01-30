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


export const calculateWeight = (weight) => weight / 10;

export const calculateHeight = (height) => height / 10;

export const kilogramsToLbs = (mass) => (mass * 2.205).toFixed(1);

export const metersToFeets = (length) => {
	let realfeet = (((length * 10) * 0.393700) / 12);
	let feet = Math.floor(realfeet);
	let inches = Math.round((realfeet - feet) * 12);
	return `${feet}'${inches}"`;
};

export const displayStat = (stat) => `${stat / 2.55}%`;

export const calculateTotalStats = (stats) => {
	let total = 0;
	for (let i = 0; i < stats.length; i++) {
		total += stats[i].base_stat;
	}
	return total;
};

export const getIdFromURL = (url) => {
	let arr = url.split("/").map(item => parseInt(item)).filter(item => (!isNaN(item)));
	return +arr;
};

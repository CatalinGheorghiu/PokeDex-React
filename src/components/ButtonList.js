import React from "react";

const ButtonList = ({hideButtons}) => {
	return (
		<>
			<ul
				className="h-full flex flex-wrap justify-between content-center">
				<li className="w-48 h-14 bg-green-500 bg-poke bg-left bg-no-repeat bg-cover rounded-1  my-3">
					<button
						className="px-3 w-full h-full border-none  focus:outline-none text-left  text-white font-extrabold font-extrabold"
						onClick={hideButtons}>Pokedex
					</button>
				</li>
				<li className="w-48 h-14 bg-red-500 bg-poke bg-left bg-no-repeat bg-cover rounded-1  my-3">
					<button
						className="px-3 w-full h-full border-none focus:outline-none text-left  text-white font-extrabold">Moves
					</button>
				</li>
				<li className="w-48 h-14 bg-blue-500 bg-poke bg-left bg-no-repeat bg-cover rounded-1  my-3">
					<button
						className="px-3 w-full h-full border-none focus:outline-none text-left  text-white font-extrabold">Abilities
					</button>
				</li>
				<li className="w-48 h-14 bg-yellow-300 bg-poke bg-left bg-no-repeat bg-cover rounded-1  my-3">
					<button
						className="px-3 w-full h-full border-none focus:outline-none text-left  text-white font-extrabold">Items
					</button>
				</li>
				<li className="w-48 h-14 bg-purple-500 bg-poke bg-left bg-no-repeat bg-cover rounded-1  my-3">
					<button
						className="px-3 w-full h-full border-none focus:outline-none text-left  text-white font-extrabold">Locations
					</button>
				</li>
				<li className="w-48 h-14 bg-yellow-700 bg-poke bg-left bg-no-repeat bg-cover rounded-1  my-3">
					<button
						className="px-3 w-full h-full border-none focus:outline-none text-left  text-white font-extrabold">Type
						Charts
					</button>
				</li>
			</ul>
		</>
	);
};

export default ButtonList;

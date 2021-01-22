import {v4 as uuidv4}                      from "uuid";
import {selectColor, uppercaseFirstLetter,calculateTotalStats,displayStat} from "../../helpers/helpers";

const Stats = ({pokemonSpecies, sortedPokemonDetails}) => {
	const stats = sortedPokemonDetails.stats.map(stat => stat);
	
	return (
		<div className=" p-3">
			{stats.map((stat, index) => (
				<div key={uuidv4()} className="w-full flex relative  ">
					<h1 className="py-3 font-bold w-1/4">{uppercaseFirstLetter(stat.stat.name)}</h1>
					<div className="flex w-1/5 mx-3 justify-center ">
						<p className="py-3 text-gray-600 font-medium ">{stat.base_stat}</p>
					</div>
					<div
						className="w-3/6 h-2 flex  mt-5 overflow-hidden  rounded-2 bg-gray-300">
						<p
							style={{width: `${displayStat(stats[index].base_stat)}`}}
							className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${selectColor(sortedPokemonDetails.types)}`}/>
					</div>
				</div>
			))}
			<div
				className="w-full flex relative">
				<h1 className="py-3 font-bold w-1/4">Total stats</h1>
				<div className="flex w-1/5 mx-3 justify-center">
					<p className="py-3 text-gray-600 font-medium ">{calculateTotalStats(stats)}</p>
				</div>
			
			</div>
		</div>
	);
};

export default Stats;

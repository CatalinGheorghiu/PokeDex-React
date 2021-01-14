const Navbar = ({handleClick}) => {
	
	
	const handleSubmit = (event) => {
		console.log(event.target.value);
	};
	
	return (
		<header className="w-5/6 mx-auto">
			{/*	Title*/}
			<h1 className=" font-nunito text-3xl p-8 ">What Pokemon are you
				looking
				for?</h1>
			{/*SEARCH BAR*/}
			<div
				className="flex border bg-gray-100  rounded-3xl focus:outline-none focus:ring-1 focus:border-gray-300 p-2 pl-2 w-5/6 mx-auto">
				<button onClick={handleClick}
				        type="button"
				        className="px-2 focus:outline-none">
					<i className="fas fa-search"/>
				</button>
				<input type="text"
				       onChange={handleSubmit}
				       className="w-full outline-none px-3 bg-gray-100"
				       placeholder="Search Pokemon..."/>
			</div>
		
		
		</header>
	);
};

export default Navbar;

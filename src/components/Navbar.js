const Navbar = ({handleClick, showNavbar, displayButtons}) => {
	
	
	const handleSubmit = (event) => {
		console.log(event.target.value);
	};
	
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
				<input type="text"
				       onChange={handleSubmit}
				       className="w-full outline-none px-3 bg-white "
				       placeholder="Search Pokemon..."/>
			</div>
			{!showNavbar && <button
				className="border focus:outline-none hover:bg-blue-500 hover:text-white w-full p-1.5 my-5 rounded-2"
				onClick={displayButtons}>Back</button>}
		
		</header>
	);
};

export default Navbar;

// import React from "react";

function Navbar({name, age}) {
	console.log(name);
	return (
		<div>
			<h1>Hello {name}!</h1>
			<p>Your age is: {age}</p>
		</div>
	);
}

export default Navbar;
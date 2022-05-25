import React from "react";
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Footer from "./Footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="flex-column vh-100">
				<Navbar />
				<Jumbotron />
				<Footer />
			</div>
		</>
	);
};

export default Home;

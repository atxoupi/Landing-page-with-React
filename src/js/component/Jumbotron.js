import React from "react";
import Card from "./Card.js";

const Jumbotron = () => {
	return (
		<>
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<hr className="my-4"></hr>
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
					<div className="d-flex">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</>
	);
};

export default Jumbotron;

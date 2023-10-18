import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";


// Navbar
const Navbar = () => {
	return (
		<div className="container-fluid ">
			<nav className="navbar navbar-expand-sm navbar-light bg-light ">
				<div className="container-fluid ">
					<a className="navbar-brand" href="#">Start Bootstrap</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

// Jumbotron
const Jumbotron = (props) => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string,
};

// Card
const Card = (props) => {
	return (
		<div className="card col mb-4">
			<img className="card-img-top" src={props.imageUrl} alt="Card cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} target="_blank" className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
};
const Footer = () => {
	return (
		<div className="footer" >
			<p>Made with ❤️ by <a href="https://github.com/sm-nat" target="_blank">Natalia Silva Medina</a></p>
		</div>
	);
};

ReactDOM.render(
	<div>
		<Navbar />
		<Jumbotron
			title="A Warm Welcome"
			description="Consistency is the silent architect of success, weaving dedication into every effort. It transforms ordinary actions into extraordinary habits, forming the bedrock of achievement. With unwavering perseverance, one can navigate challenges and triumph on the path to lasting greatness."
			buttonURL="#"
			buttonLabel="Call to action!"
		/>
		<div className="card-group" >
			<Card
				title="Happines"
				imageUrl="https://picsum.photos/id/106/200/300"
				description="Happiness is a journey, not a destination; it's found in the simple joys along the way."
				buttonUrl="https://en.wikipedia.org/wiki/Happiness"
				buttonLabel="Find out more..."
			/>

			<Card
				title="Love"
				imageUrl="https://picsum.photos/id/152/200/300"
				description="Love is a profound connection that transcends words, a dance of hearts entwined in endless emotions."
				buttonUrl="https://en.wikipedia.org/wiki/Love"
				buttonLabel="Find out more..."
			/>
			<Card
				title="Wisdom"
				imageUrl="https://picsum.photos/id/360/200/300"
				description="Wisdom is the compass of the soul, guiding us through the labyrinth of life with the light of experience and discernment."
				buttonUrl="https://en.wikipedia.org/wiki/Wisdom"
				buttonLabel="Find out more..."
			/>
			<Card
				title="Joy"
				imageUrl="https://picsum.photos/id/306/200/300"
				description="Joy is the melody of the heart, harmonizing the symphony of life with laughter, gratitude, and the warmth of shared moments."
				buttonUrl="https://en.wikipedia.org/wiki/Joy"
				buttonLabel="Find out more..."
			/>
			<Footer
			/>
		</div>
	</div>,
	document.getElementById("app")
);

export default home;

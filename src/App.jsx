import { useState } from 'react';
import './App.css';
import TabButton from './components/TabButton';
import AboutMe from './components/content/AboutMe';
import Portfolio from './components/content/Portfolio';
import Contact from './components/content/Contact';
import Resume from './components/content/Resume';
import assets from './assets';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand">Matt Christopherson</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav ms-auto">
								<TabButton
									isClicked={index === 0}
									click={() => handleSelect(0)}
								>
									Portfolio
								</TabButton>
								<TabButton
									isClicked={index === 1}
									click={() => handleSelect(1)}
								>
									About Me
								</TabButton>
								<TabButton
									isClicked={index === 2}
									click={() => handleSelect(2)}
								>
									Contact
								</TabButton>
								<TabButton
									isClicked={index === 3}
									click={() => handleSelect(3)}
								>
									Resume
								</TabButton>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<footer>
				<a
					href="https://github.com/Matt-Christopherson"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="footerimg" src={assets.github} alt="github" />
				</a>
				<a
					href="https://www.linkedin.com/in/matt-christopherson27/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="footerimg" src={assets.linkedin} alt="linkedin" />
				</a>
			</footer>

			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				interval={null}
				indicators={false}
				className="carousel-container"
			>
				<Carousel.Item>
					<div className="contentcontainer">
						<Portfolio />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="contentcontainer">
						<AboutMe />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="contentcontainer">
						<Contact />
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="contentcontainer">
						<Resume />
					</div>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default App;

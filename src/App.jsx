import { useState } from 'react';

import './App.css';
import TabButton from './components/TabButton.jsx';
import AboutMe from './components/content/AboutMe.jsx';
import Portfolio from './components/content/Portfolio.jsx';
import Contact from './components/content/Contact.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
	
	const [selectedContent, setSelectedContent] = useState(<AboutMe />);

	function handleClick(clickedButton) {
		setSelectedContent(clickedButton);
		console.log(clickedButton);
	}

	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand">Matt Christopherson</a>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<TabButton
									isClicked={selectedContent === <AboutMe />}
									click={() => handleClick(<AboutMe />)}
								>
									About Me
								</TabButton>
								<TabButton
									isClicked={selectedContent === <Portfolio />}
									click={() => handleClick(<Portfolio />)}
								>
									Portfolio
								</TabButton>
								<TabButton
									isClicked={selectedContent === <Contact />}
									click={() => handleClick(<Contact />)}
								>
									Contact
								</TabButton>
								<TabButton
									isClicked={selectedContent === 'resume'}
									click={() => handleClick('resume')}
								>
									Resume
								</TabButton>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<main>{selectedContent}</main>
			<footer>
				<p>I'm the footer!</p>
			</footer>
		</>
	);
}

export default App;

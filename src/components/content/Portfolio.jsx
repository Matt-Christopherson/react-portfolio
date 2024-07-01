import './Portfolio.css';
import assets from '../../assets.jsx';

export default function Portfolio() {
	return (
		<div className="contentcontainer">
			<h1>My Portfolio</h1>
			<h3>Welcome to my website! Check out my recent projects below.</h3>
			<div className="row">
				<div className="col">
					<div className="portfolio-item-wrapper">
						<a
							href="https://picture-chat.onrender.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="portfolio-item"
								src={assets.picture}
								alt="Picture Chat"
							/>
							<div className="overlay">
								<div className="text">Picture Chat</div>
							</div>
						</a>
					</div>
				</div>
				<div className="col">
					<div className="portfolio-item-wrapper">
						<a
							href="https://matt-christopherson.github.io/weather-dashboard/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="portfolio-item"
								src={assets.weather}
								alt="Weather Dashboard"
							/>
							<div className="overlay">
								<div className="text">Weather Dashboard</div>
							</div>
						</a>
					</div>
				</div>
				<div className="col">
					<div className="portfolio-item-wrapper">
						<a
							href="https://matt-christopherson.github.io/christophersons-crazy-calendar/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="portfolio-item"
								src={assets.scheduler}
								alt="Work Day Scheduler"
							/>
							<div className="overlay">
								<div className="text">Work Day Scheduler</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="portfolio-item-wrapper">
						<a
							href="https://github.com/Matt-Christopherson/rambunctious-readme-generator"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="portfolio-item"
								src={assets.readme}
								alt="README Generator"
							/>
							<div className="overlay">
								<div className="text">README Generator</div>
							</div>
						</a>
					</div>
				</div>
				<div className="col">
					<div className="portfolio-item-wrapper">
						<a
							href="https://github.com/Matt-Christopherson/Neat-Note-Taker"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="portfolio-item"
								src={assets.notes}
								alt="Note Taker"
							/>
							<div className="overlay">
								<div className="text">Note Taker</div>
							</div>
						</a>
					</div>
				</div>
				<div className="col">
					<div className="portfolio-item-wrapper">
						<a
							href="https://github.com/Matt-Christopherson/excellent-e-commerce-backend"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="portfolio-item"
								src={assets.ecommerce}
								alt="E-commerce Backend"
							/>
							<div className="overlay">
								<div className="text">E-commerce Backend</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

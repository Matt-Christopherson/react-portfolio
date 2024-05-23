import './Portfolio.css';
import assets from '../../assets.jsx';

export default function Portfolio() {
  return (
    <div className="container-xxl contentcontainer" id='portfolio-container'>
      <h1>Portfolio</h1>
      <div className="row">
        <div className="col">
          <a href="https://matt-christopherson.github.io/matts-weather-dashboard/">
            <div className="portfolio-item-wrapper">
              <img
                className="portfolio-item"
                src="src/assets/weather.png"
                alt="Weather Dashboard"
              />
              <div className="overlay">
                <div className="text">Weather Dashboard</div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://matt-christopherson.github.io/christophersons-crazy-calendar/">
            <div className="portfolio-item-wrapper">
              <img
                className="portfolio-item"
                src="src/assets/scheduler.png"
                alt="Work Day Scheduler"
              />
              <div className="overlay">
                <div className="text">Work Day Scheduler</div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/Matt-Christopherson/excellent-e-commerce-backend">
            <div className="portfolio-item-wrapper">
              <img
                className="portfolio-item"
                src={assets.ecommerce}
                alt="E-commerce Backend"
              />
              <div className="overlay">
                <div className="text">E-commerce Backend</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href="https://github.com/Matt-Christopherson/rambunctious-readme-generator">
            <div className="portfolio-item-wrapper">
              <img
                className="portfolio-item"
                src="src/assets/readme.png"
                alt="README Generator"
              />
              <div className="overlay">
                <div className="text">REAMDME Generator</div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/Matt-Christopherson/Neat-Note-Taker">
            <div className="portfolio-item-wrapper">
              <img
                className="portfolio-item"
                src="src/assets/notes.png"
                alt="Note Taker"
              />
              <div className="overlay">
                <div className="text">Note Taker</div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://matt-christopherson.github.io/matts-marvelous-password-generator/">
            <div className="portfolio-item-wrapper">
              <img
                className="portfolio-item"
                src="src/assets/password.png"
                alt="Random Password Generator"
              />
              <div className="overlay">
                <div className="text">Random Password Generator</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

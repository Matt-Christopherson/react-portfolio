import { useState } from 'react';
import './App.css';
import TabButton from './components/TabButton';
import AboutMe from './components/content/AboutMe';
import Portfolio from './components/content/Portfolio';
import Contact from './components/content/Contact';
import Resume from './components/content/Resume';
import assets from './assets';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [selectedContent, setSelectedContent] = useState('AboutMe');

  function handleClick(content) {
    setSelectedContent(content);
    console.log(content);
  }

  const renderContent = () => {
    switch (selectedContent) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
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
                  isClicked={selectedContent === 'AboutMe'}
                  click={() => handleClick('AboutMe')}
                >
                  About Me
                </TabButton>
                <TabButton
                  isClicked={selectedContent === 'Portfolio'}
                  click={() => handleClick('Portfolio')}
                >
                  Portfolio
                </TabButton>
                <TabButton
                  isClicked={selectedContent === 'Contact'}
                  click={() => handleClick('Contact')}
                >
                  Contact
                </TabButton>
                <TabButton
                  isClicked={selectedContent === 'Resume'}
                  click={() => handleClick('Resume')}
                >
                  Resume
                </TabButton>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>{renderContent()}</main>
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
    </>
  );
}

export default App;

import { useState } from 'react';

import './App.css';
import TabButton from './components/TabButton';
import AboutMe from './components/content/AboutMe';
import Portfolio from './components/content/Portfolio';
import Contact from './components/content/Contact';
import Resume from './components/content/Resume'; // Import the Resume component

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
        return <Resume />; // Render the Resume component
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
        <p>I'm the footer!</p>
      </footer>
    </>
  );
}

export default App;

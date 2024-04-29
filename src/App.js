// src/App.js
import React, { useState, useEffect } from 'react';
// import Preloader from './components/Preloader/Preloader';
import './App.css'; // Import any global styles if needed
import Preloader from './components/Preloader/preloader';
import Navbar from './components/NavBar/NavbarSection';
import Profile from './components/Profile/profile';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Achivements from './components/Achivements/achivements';
import Footer from './components/Footer/footer';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., fetching data from an API)
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulating a 6-second loading time
  }, []);

  return (
    <div className="app">
      {isLoading ? <Preloader /> :  (
      <div>
        <Navbar/>
        <Profile/>
        <About/>
        <Projects/>
        <Achivements/>





        <Footer/>
        
        
       
      </div>

      )}
      {/* Render other components or application content */}
    </div>
  );
}

export default App;

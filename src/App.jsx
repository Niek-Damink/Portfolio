import './App.css'
import './index.css'
import { Navbar } from './components/Navbar';
import { Projects } from './components/sections/Projects';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact'
import { MobileMenu } from './components/MobileMenu';
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-all duration-500 overflow-hidden 
        ${isLoaded ? "opacity-100" : "opacity-0"} 
        bg-background text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDark={isDark} setIsDark={setIsDark}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

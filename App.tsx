import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');

  return (
    <div className="min-h-screen bg-taiga-950 text-white font-sans relative z-0">
      <Header onNavigate={setCurrentView} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Services />
            <About />
            <Portfolio onOpenProject={() => setCurrentView('project')} />
            <Contact />
          </>
        ) : (
          <ProjectPage onBack={() => setCurrentView('home')} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
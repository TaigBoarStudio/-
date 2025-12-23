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
  const [currentView, setCurrentView] = useState<string>('home');

  return (
    <div className="min-h-screen bg-wild-night text-white font-sans relative z-0">
      <Header onNavigate={() => setCurrentView('home')} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Services />
            <About />
            <Portfolio onOpenProject={(id) => setCurrentView(id)} />
            <Contact />
          </>
        ) : (
          <ProjectPage 
            projectId={currentView} 
            onBack={() => setCurrentView('home')} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import { Works } from './components/Works';
import { Explorations, Stats } from './components/Explorations';
import Footer from './components/Footer';
import { Skills, Education } from './components/Skills';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-bg selection:bg-text-primary selection:text-bg">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content" className="animate-in fade-in duration-1000">
            <Hero />
            <Works />
            <Education />
            <Skills />
            <Explorations />
            <Stats />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

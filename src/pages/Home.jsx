import Hero from '../sections/home/Hero';
import WhatIDo from '../sections/home/WhatIDo';
import SelectedWork from '../sections/home/SelectedWork';
import PersonalWork from '../sections/home/PersonalWork';
import AboutTeaser from '../sections/home/AboutTeaser';
import HowIWork from '../sections/home/HowIWork';
import Currently from '../sections/home/Currently';
import PlaygroundTeaser from '../sections/home/PlaygroundTeaser';
import Contact from '../sections/home/Contact';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <WhatIDo />
      <SelectedWork />
      <PersonalWork />
      <AboutTeaser />
      <HowIWork />
      <Currently />
      <PlaygroundTeaser />
      <Contact />
    </div>
  );
}

export default Home;

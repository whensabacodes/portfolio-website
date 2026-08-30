import Hero from '../sections/home/Hero';

/**
 * Homepage — single-viewport landing: identity + orbit navigation.
 * Deeper content lives on destination routes (/work, /about, /contact, …).
 */
function Home() {
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
}

export default Home;

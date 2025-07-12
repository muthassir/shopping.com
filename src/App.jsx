import React from 'react';
import  Header  from './components/Header';
import Hero from './pages/Hero'
import Middle from './pages/Middle'
import Banner from './pages/Banner';
import Highlight from './pages/Highlight'
import Footer from './components/Footer';
import CarouselCard from './pages/CarouselCard';
import Faq from './pages/Faq';
import CarouselCards from './pages/CarouselCards';


function App() {
  return (
          <div>
            <Header />
            <Hero />
            <Middle />
            <Banner />
            <Highlight />
            <CarouselCard />
            <CarouselCards />
           < Faq />
            <Footer />
          </div>
  );
}

export default App;

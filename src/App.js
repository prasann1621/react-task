import React from 'react';
import Header from './Components/Header';
import BookingSection from './Components/BookingSection';
import './App.css';
import FeaturesSection from './Components/FeatureCard';

const App = () => {
    return (
        <div className="App">
            <Header />
            <BookingSection />
        
        <main>
          <FeaturesSection/>
        </main>
        </div>
    );
};

export default App;

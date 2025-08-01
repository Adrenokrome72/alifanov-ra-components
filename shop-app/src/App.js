import React, { useState } from 'react';
import './App.css';
import ShopItemFunc from './components/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
};

function App() {
  const [showFunctional, setShowFunctional] = useState(true);

  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <div className="toggle-switch">
          <span
            className={showFunctional ? 'toggle-link active' : 'toggle-link'}
            onClick={() => setShowFunctional(true)}
          >
            Функциональный
          </span>
          <span
            className={!showFunctional ? 'toggle-link active' : 'toggle-link'}
            onClick={() => setShowFunctional(false)}
          >
            Классовый
          </span>
        </div>
        {showFunctional ? <ShopItemFunc item={item} /> : <ShopItemClass item={item} />}
      </div>
    </div>
  );
}

export default App;
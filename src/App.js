import React from 'react';
import Carousel from '../src/Carousel/carousel';

function App() {
  return (
    <div className="App">
      <div style={{
        backgroundImage: 'radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
        minHeight: '100vh',
        padding: '2rem'
      }}>
        <h1 style={{ textAlign: 'center' }}>Accessible Carousel</h1>
        <Carousel />
      </div>
    </div>
  )
}

export default App;

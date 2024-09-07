



import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;


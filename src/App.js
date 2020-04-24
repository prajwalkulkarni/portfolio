import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
    </div>
  );
}

export default App;

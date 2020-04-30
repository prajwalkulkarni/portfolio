import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Work from './components/works/works';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Work/>
    </div>
  );
}

export default App;

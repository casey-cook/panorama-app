import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
  <BrowserRouter>
    <MainComponent/>
  </BrowserRouter>
  
  )}

export default App;

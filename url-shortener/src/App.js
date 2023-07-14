import logo from './logo.svg';
import './App.css';
import InputShortener from './InputShortener';
import BackAnimation from './BackAnimation';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); 

  return (
    <div className="container">
      <InputShortener  setInputValue={setInputValue} />
      <BackAnimation />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;

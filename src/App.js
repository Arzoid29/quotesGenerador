import { useState,useEffect } from 'react';

import './App.css';


function App() {
  const[quotes, setQuotes] = useState('');
  const getQuotes = () => {
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data =>{
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum])
    })
  }
  useEffect(() => {
    getQuotes();
  },[])
  return (
    <div className="App">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
        <div className='btnContainer'>
          <button onClick={getQuotes} className='btn'>Get Quote</button>
          <a 
          href={`https://twitter.com/intent/tweet?text=${quotes.text} - ${quotes.author}`} 
          target="_blank"
          rel="noopener noreferrer"
          className='btn'
          > Tweet</a>
        </div>
        
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Deck from './components/Deck';
import Message from './components/Message';
import Home from './components/Home';

function App()
{
  const [route, setRoute] = useState('')
  const [messageStatus, setMessageStatus] = useState('');
  const [idDeck, setIdDeck] = useState(null);
  const [nameDeck, setNameDeck] = useState('');
  const [metasZap, setMetasZap] = useState(null);

  useEffect(()=> {
    setRoute('home');
  },[]) 
  
    return(
        <div className="root">
          <Navbar/>
          <main>
          { route === 'deck' 
            ?
             <Deck setRoute={setRoute} metasZap={metasZap} idDeck={idDeck} nameDeck={nameDeck} setMessageStatus={setMessageStatus}/>
             : (
              (route === 'message') 
              ? <Message setRoute={setRoute} setMetasZap={setMetasZap} messageStatus={messageStatus}/>
              : 
              <Home setRoute={setRoute} metasZap={metasZap} setMetasZap={setMetasZap} setIdDeck={setIdDeck} setNameDeck={setNameDeck}/>
            )
          }
          </main>
      </div>
    );
}

export default App;
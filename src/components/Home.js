import React, { useState, useEffect, useRef } from 'react';
import Snackbar from "./Snackbar/Snackbar";
import recalls from './database/recalls.js';
import cards from './database/cards.js';

const Home = ({setRoute, setIdDeck, setNameDeck, setMetasZap}) =>
{
    const [metaValue, setMetaValue] = useState(null);
    const snackbarRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState('');

    const displayError = (message) =>
    {
         setErrorMsg(message);
         snackbarRef.current.show();
    }

    const getTotalCardsFromDeck = (idDeck) =>
    {
        return cards.filter(cards=> cards.idDeck === idDeck).length;
    }


    const chooseDeck = (idDeck, nameDeck) =>
    {
        const totalFromDeck = getTotalCardsFromDeck(idDeck);
        if(metaValue > getTotalCardsFromDeck(idDeck))
        {
            displayError(`O Recall escolhido tem ${totalFromDeck} cartas, enquanto que sua meta de zaps foi decidida em ${metaValue} cartas.
            Diminua o valor da meta de zaps :^)
            `);
        }
        else if(metaValue < 0)
        {
            displayError(`A meta de zaps não pode ser inferior a zero, não pode ser um número negativo :^(
            `);
        }
        else
        {
            setIdDeck(idDeck);
            setNameDeck(nameDeck);
            setMetasZap(metaValue);
            setRoute('deck');
        }
    }

    const onInputMetasZapChange = (evt) =>
    {
        setMetaValue(parseInt(evt.target.value));
    }

    return(
        <>
            <img src='assets/logo.png' />
            <input type="number" minLength={0} className='input-meta-zap' onChange={onInputMetasZapChange} placeholder='Sua meta de zaps' required/>
            <ul className='list-decks'>
            {
                recalls.map((deck, i) => 
                {
                    return (
                    <li className='animate__animated animate__slideInUp'><a onClick={()=>chooseDeck(deck.id, deck.name)} className='btn'>Praticar {deck.name}<img src="assets/next.png"/></a></li>
                );
                })
            }
            </ul>
            <Snackbar
           ref={snackbarRef}
           message={errorMsg}
           />
        </>     
    );
}

export default Home;
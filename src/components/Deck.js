import React, { useState, useEffect } from 'react';
import Card from './Card';
import cards from './database/cards.js';
import ProgressBar from './ProgressBar/ProgressBar';
const Deck = ({setRoute, setMessageStatus, idDeck, nameDeck, metasZap}) =>
{
    //Esse é o unico jeito de filtrar array sem referenciar o array antigo
    const cardsData = JSON.parse(JSON.stringify(cards.filter(card => card.idDeck === idDeck)));

    const [cardIndex,setCardIndex] = useState(0);

    //cardsOfDeck vai receber por padrao o primeiro dataSet de cardsData, pois inicialmente, cardIndex é zero
    const [cardsOfDeck, setCardsOfDeck] = useState([cardsData[cardIndex]]);
   
    const total = cardsData.length-1;
    
    const [face, setFace] = useState('front');

    const getAllCardZaps = () =>
    {
        return cardsOfDeck.filter(card => card.status === 'zap');
    }

    let state = {
        percent: 0,
        color: 'red'
    };

    if(metasZap)
    {
        let value = 1/metasZap;
        let update = value * getAllCardZaps().length;
        if(update > 1)
        state.percent = 1;
        else
        state.percent = update;

        if(update <= 0.3)
        state.color = 'red';
        else if(update > 0.3 && update <= 0.6)
        state.color = 'yellow';
        else if(update > 0.6 && update <= 0.8)
        state.color = 'green';
        else
        state.color = 'blue';
    }
    
    const onStatusChange = (statusChange) =>
    {
        cardsOfDeck[cardIndex].status = statusChange;
        setCardsOfDeck([...cardsOfDeck]);
        setFace('front');
        if(cardIndex < total)
        {
            setTimeout(() => onNextCard(), 1000);
        }
        else
        {
            //usuario terminou o Recall
            if(metasZap)
            {
                let zaps = getAllCardZaps();
                if(zaps.length < metasZap)
                setMessageStatus('failure');
                else
                setMessageStatus('success');
            }
            else
            {
                let incorretos = cardsOfDeck.filter(card => card.status === 'nl');
                if(incorretos.length)
                    setMessageStatus('failure');
                else
                    setMessageStatus('success');
            }
            setRoute('message');
        }
    }
    
    const onNextCard = () => 
    {
        setCardsOfDeck([...cardsOfDeck, cardsData[cardIndex]]);
        setCardIndex(cardIndex+1);
    }
    
    return(
        <>
            <h1 className='title-deck'>{nameDeck}</h1>
            <Card index={cardIndex} face={face} setFace={setFace} status={cardsOfDeck[cardIndex].status} cardData={cardsOfDeck[cardIndex]} onStatusChange={onStatusChange}  total={total} />
            {
                metasZap && metasZap !== 0
              ?
              <div className='meta-container'>
                  <span>Metas zap: {(getAllCardZaps().length >= metasZap) ? 'Concluiu as metas, parabéns' : getAllCardZaps().length+'/'+metasZap}</span> 
                    <ProgressBar width={392} percent={state.percent} progressColor={state.color} />
              </div>
              : ''
            }
           
        </>
    );

}

export default Deck;
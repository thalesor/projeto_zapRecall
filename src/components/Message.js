import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Message = ({messageStatus, setRoute, setMetasZap}) =>
{

    const backToHome = () =>
    {
        setMetasZap(null);
        setRoute('home');
    }

    const Buttons = () =>
    {
        return (
        <div className='message-buttons'>
            <a className='btn' onClick={()=>setRoute('deck')}>Tentar novamente <img src="assets/next.png"/></a>
             <a className='btn' onClick={()=>backToHome()}>Voltar para o início <img src="assets/next.png"/></a>
        </div>
        );
    }
    
    return(
        <>
            { messageStatus === 'success'
           ? 
           <>
           
           <div className='message animate__animated animate__zoomIn'>
                <h1>
                    PARABÉNS! <img src='assets/party.png' />
                </h1>
                <h2>
                    Você não esqueceu de nenhum flashcard!
                </h2>
                <Buttons />
            </div>
            <Confetti>
            </Confetti>
            </>
            :
            <div className='message animate__animated animate__zoomIn'>
                <h1>
                    Putz.. <img src='assets/sad.png' />
                </h1>
                <h2 onClick={()=> setRoute('deck')}>
                    Você esqueceu alguns flashcards!<br/>Não desanime! Na próxima você consegue!
                </h2>
                <Buttons />
            </div>
            }
        </>
    );
}

export default Message;
import React from 'react';

const Card = ({total, setFace, face, index, status, cardData, onStatusChange}) =>
{
    return(
    <>
    <div data-identifier="flashcard" class={`card ${face === 'back' ? 'flipped' : ''} ${status}`}>
        <div className='card-inner'>
            <div class='card-front'>
                <div class="card-header">
                    <span class="card-indicator" data-identifier="counter">{index}/{total}</span>
                </div>
                <div class="card-content">
                    <h2 class="card-question">{cardData.question}</h2>
                </div>
                <div class="card-footer">
                    <a onClick={()=> setFace('back')} data-identifier="arrow" class="card-switch"><img src="assets/turn.png" alt="" /></a>
                </div>
            </div>
            <div className='card-back'>
                <div class="card-header">
                    <span class="card-title">{cardData.question}</span>
                    <span class="card-indicator" data-identifier="counter">{index}/{total}</span>
                </div>
                <div class="card-content">
                    <div class="card-answer">
                        {cardData.answer}
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-choices">
                        <a onClick={() => onStatusChange('ap')} class="choice ap">Aprendi agora</a>
                        <a onClick={() => onStatusChange('nl')} class="choice nl">Não lembrei</a>
                        <a onClick={() => onStatusChange('le')} class="choice le">Lembrei com esforço</a>
                        <a onClick={() => onStatusChange('zap')} class="choice zap">Zap!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Card;
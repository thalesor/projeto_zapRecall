import React from 'react';

const Suggestion = ({ user, razao }) => {
  return (
    <div className="sugestao">
        <div className="usuario">
        <img src={user.image} />
        <div className="texto">
            <div className="nome">{user.name}</div>
            <div className="razao">{razao}</div>
        </div>
        </div>

        <div className="seguir">Seguir</div>
    </div>
  );
}

export default Suggestion;

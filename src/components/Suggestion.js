import React from 'react';

const Suggestion = ({ user, razao }) => {
  return (
    <div class="sugestao">
        <div class="usuario">
        <img src={user.image} />
        <div class="texto">
            <div class="nome">{user.name}</div>
            <div class="razao">{razao}</div>
        </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
  );
}

export default Suggestion;

import React from 'react';
import parse from 'html-react-parser';

const Post = ({ user, text }) => {
  return (
    <div class="post">
        <div class="topo">
        <div class="usuario">
            <img src={user.image} />
            {user.name}
        </div>
        <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        </div>

        <div class="conteudo">
        <img src="assets/img/gato-telefone.svg" />
        </div>

        <div class="fundo">
        <div class="acoes">
            <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
            <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>

        <div class="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div class="texto">
            {parse(text)}
            </div>
        </div>
        </div>
    </div>
  );
}

export default Post;

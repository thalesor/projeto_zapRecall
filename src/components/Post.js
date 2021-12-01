import React from 'react';
import Icon from './Icon';
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
            <Icon name="ellipsis-horizontal" />
        </div>
        </div>

        <div class="conteudo">
        <img src="assets/img/gato-telefone.svg" />
        </div>

        <div class="fundo">
        <div class="acoes">
            <div>
            <Icon name="heart-outline" />
            <Icon name="chatbubble-outline" />
            <Icon name="paper-plane-outline" />
            </div>
            <div>
            <Icon name="bookmark-outline" />
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

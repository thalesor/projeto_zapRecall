import React from 'react';
import Icon from './Icon';
import parse from 'html-react-parser';

const Post = ({ user, text }) => {
  return (
    <div className="post">
        <div className="topo">
        <div className="usuario">
            <img src={user.image} />
            {user.name}
        </div>
        <div className="acoes">
            <Icon name="ellipsis-horizontal" />
        </div>
        </div>

        <div className="conteudo">
        <img src="assets/img/gato-telefone.svg" />
        </div>

        <div className="fundo">
        <div className="acoes">
            <div>
            <Icon name="heart-outline" />
            <Icon name="chatbubble-outline" />
            <Icon name="paper-plane-outline" />
            </div>
            <div>
            <Icon name="bookmark-outline" />
            </div>
        </div>

        <div className="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div className="texto">
            {parse(text)}
            </div>
        </div>
        </div>
    </div>
  );
}

export default Post;

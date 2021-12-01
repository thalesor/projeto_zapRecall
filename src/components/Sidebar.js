import React from 'react';
import Suggestions from './Suggestions';

function Sidebar(props) {
    const{name, alias, image} = props;
return (
    <div class="sidebar">
        <div class="usuario">
        <img src={image} />
        <div class="texto">
            <strong>{name}</strong>
            {alias}
        </div>
        </div>
        <Suggestions />
        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
);
}
export default Sidebar;
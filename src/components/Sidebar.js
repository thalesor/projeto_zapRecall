import React from 'react';
import Suggestions from './Suggestions';
import UserPanel from './UserPanel';
import user from './database/userdata';

function Sidebar(props) {
    const{name, alias, image} = props;
return (
    <div class="sidebar">
        <UserPanel name={user[0].name} alias={user[0].alias} image={user[0].image}/>
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
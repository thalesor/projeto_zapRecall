import React from 'react';
import Suggestions from './Suggestions';
import UserPanel from './UserPanel';
import user from './database/userdata';

function Sidebar(props) {
    const{name, alias, image} = props;
return (
    <div className="sidebar">
        <UserPanel name={user[0].name} alias={user[0].alias} image={user[0].image}/>
        <Suggestions />
        <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
);
}
export default Sidebar;
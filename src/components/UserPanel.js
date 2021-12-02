import React from 'react';

function UserPanel(props) {
    const{name, alias, image} = props;
return (
        <div class="usuario">
            <img src={image} />
            <div class="texto">
                <strong>{name}</strong>
                {alias}
            </div>
        </div>
        
);
}
export default UserPanel;
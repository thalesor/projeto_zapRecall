import React from 'react';

function UserPanel(props) {
    const{name, alias, image} = props;
    return (
        <div className="usuario">
            <img src={image} />
            <div className="texto">
                <strong>{name}</strong>
                {alias}
            </div>
        </div>

    );
    }
export default UserPanel;
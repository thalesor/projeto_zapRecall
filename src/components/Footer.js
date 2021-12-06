import React from 'react';
import Icon from './Icon';

function Footer()
{
    return(
        <div className="fundo-mobile">
        <Icon name="home"/>
        <Icon name="search-outline"/>
        <Icon name="add-circle-outline"/>
        <Icon name="heart-outline"/>
        <Icon name="person-outline"/>
      </div>
    );
}

export default Footer;
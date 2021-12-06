import React from 'react';
import SearchBox from './SearchBox';
import Icon from './Icon';

function Navbar({searchChange})
{
  const logo = <Icon name="logo-instagram" />
  const plane = <Icon name="paper-plane-outline" />

    return(
      <div className="navbar">
        <div className="container">
          <div className="logo">
            {logo}
            <div className="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div className="logo-mobile">
            {logo}
          </div>

          <div className="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <SearchBox searchChange={searchChange}/>
  
          <div className="icones">
            {plane}
            <Icon name="compass-outline" />
            <Icon name="heart-outline" />
            <Icon name="person-outline" />
          </div>

          <div className="icones-mobile">
            {plane}
          </div>
        </div>
      </div>
    );
}

export default Navbar;
import React from 'react';
import SearchBox from './SearchBox';
import Icon from './Icon';

function Navbar({searchChange})
{
  const logo = <Icon name="logo-instagram" />
  const plane = <Icon name="paper-plane-outline" />

    return(
      <div class="navbar">
        <div class="container">
          <div class="logo">
            {logo}
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            {logo}
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <SearchBox searchChange={searchChange}/>
  
          <div class="icones">
            {plane}
            <Icon name="compass-outline" />
            <Icon name="heart-outline" />
            <Icon name="person-outline" />
          </div>

          <div class="icones-mobile">
            {plane}
          </div>
        </div>
      </div>
    );
}

export default Navbar;
import React from 'react';
import SearchBox from './SearchBox';

function Navbar({searchChange})
{
    return(
      <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <SearchBox searchChange={searchChange}/>
  
          <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
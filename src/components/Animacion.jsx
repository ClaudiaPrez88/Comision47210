import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animacion from '../img/animacion/404.json'

export default function Animacion() {
  return (
    <div id='error'>
      <h1>Los sentimos, la página que buscas no ha sido encontrada, te pedimos intentes nuevamente.</h1>
      <h1>Error 404</h1>
      
        <Player
        src={animacion}
        className="player"
        loop
        autoplay
        speed={1}
        />
    </div>
  )
}

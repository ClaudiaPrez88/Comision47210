import React from 'react';
import loading from '../../src/img/animacion/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Loader() {
  return (
    <div>
   <Player
        src={loading}
        className="player"
        loop
        autoplay
        speed={1}
        />
    </div>
  )
}

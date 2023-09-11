import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Animacion() {
  return (
    <div>
        <Player
        src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
        className="player"
        loop
        autoplay
        speed={1}
        style={{ height: '300px', width: '300px' }}
        />
    </div>
  )
}

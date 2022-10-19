import React from 'react'
import audio from './audio.mp3.wav'
import './Audio.css'

const Audio = () => {
  return (
    <div>
    <h1>How to Import an Audio</h1>
    <div className="audio">
    <audio controls>
    <source src={audio}/>
    </audio>
    </div>
    </div>
  )
}

export default Audio
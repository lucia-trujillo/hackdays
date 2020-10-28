import React from 'react'
import Figure from './Figure'
import WrongLetters from './WrongLetters'
import Word from './Word'
import Popup from './Popup'
import Notification from './Notification'

import GetRandomWord from '../hooks/getRandomWord'
import HandleKeyDown from '../hooks/handleKeyDown'

const Game = () => {
    GetRandomWord()
    HandleKeyDown()

    return (
        <>
            <div className="game-container">
                <Figure />
                <WrongLetters />
                <Word />
            </div>
            <Popup  />
            <Notification />
        </>
    )
}

export default Game;
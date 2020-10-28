import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const WrongLetters = () => {
  const { wrongLetters } = useContext(GlobalContext)
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters

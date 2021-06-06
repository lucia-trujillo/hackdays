import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Hints = () => {
    const {
        selectedWord,
        showHints,
        wrongLetters,
        toggleHints 
    } = useContext(GlobalContext)
  
    return (
        <>
        {wrongLetters.length > 2 && showHints === false && selectedWord.definitions &&
             <div className={`hints-container`}>
                <button type="button" onClick={ () => toggleHints() }>Need some help?</button>
            </div>
        }
        
        {wrongLetters.length > 2 && showHints === true && selectedWord.definitions && 
            <div className={`hints-container ${showHints ? 'show' : ''}`}>
                {showHints === true && selectedWord.definitions  && 
                <>
                    <p>Type: {selectedWord.definitions[0].type}</p>
                    <p>Hint: {selectedWord.definitions[0].definition}</p>
                </>
                }   
            </div>
          }
        </>
        
    )
}

export default Hints

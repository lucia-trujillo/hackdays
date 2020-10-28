import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'



const HandleKeyDown = () => {
    const {
        selectedWord, 
        wrongLetters,
        correctLetters,
        setWrongLetters,
        setCorrectLetters,
        toggleNotification
    } = useContext(GlobalContext)
    
    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;

          if (keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.word.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(letter);
              } else {
                toggleNotification();
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(letter);
              } else {
                toggleNotification();
              }
            }
          }
          
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correctLetters, wrongLetters, selectedWord, setCorrectLetters, setWrongLetters, toggleNotification]);
}

export default HandleKeyDown
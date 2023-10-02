import React, {createContext, useReducer, useCallback, useState} from 'react'
import AppReducer from './AppReducer'
import randomWords from 'random-words'

// Initial state
const initialState = {
  playable: false,
  selectedWord: {},
  correctLetters: [],
  wrongLetters: [],
  showNotification: false,
  showHints: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const toggleNotification = useCallback(() => {
    dispatch({ 
      type: 'SET_NOTIFICATION',
      payload: true
    })
    setTimeout(() => {
      dispatch({ 
        type: 'SET_NOTIFICATION',
        payload: false
      })
    }, 2000);
  }, [])

  const toggleHints = useCallback(() => {
    dispatch({ 
      type: 'SET_HINTS',
      payload: true
    })
    setTimeout(() => {
      dispatch({ 
        type: 'SET_HINTS',
        payload: false
      })
    }, 5000);
  }, [])
  
  const resetGame = () => {
    dispatch({ 
      type: 'RESET_GAME'
    })
  }

  const setSelectedWord = useCallback(() => {
    if(state.playable === false) {


        const ikeaWords = [
          "Billy",
          "Hemnes",
          "Poäng",
          "Kallax",
          "Ektorp",
          "Lack",
          "Malm",
          "Karlstad",
          "Rast",
          "Brimnes",
          "Hektar",
          "Linnmon",
          "Rens",
          "Fjällbo",
          "Svalsta",
          "Gjöra",
          "Lisabo",
          "Ingolf",
          "Granas",
          "Strandmon",
          "Kivik",
          "Vittsjö",
          "Norden",
          "Stockholm",
          "Tarva",
          "Flisat",
          "Bestå",
          "Skubb",
          "Sniglar",
          "Nockeby",
          "Algot",
          "Torsby",
          "Söderhamn",
          "Tärnö",
          "Tullsta",
          "Eivor",
          "Lillangen",
          "Kungsbacka",
          "Grimsbu",
          "Valje",
          "Äpplarö",
          "Fredde",
          "Variera",
          "Råskog",
          "Tived",
          "Skarsta",
          "Vittsjo",
          "Grundtal",
          "Sinnerlig",
          "Tärnby"
        ];




        const getRandomWord = () => {
          const randomIndex = Math.floor(Math.random() * ikeaWords.length);
           return ikeaWords[randomIndex]
        }


      const word = getRandomWord()

        dispatch({ 
          type: 'SET_SELECTED_WORD',
          payload: {
            word: word
          }
        })

    } 
  }, [state.playable])

  const setCorrectLetters = (letter) => {
    dispatch({ 
      type: 'SET_CORRECT_LETTERS',
      payload: letter
    })
  }

  const setWrongLetters = (letter) => {
    dispatch({ 
      type: 'SET_WRONG_LETTERS',
      payload: letter
    })
  }

  return (
  <GlobalContext.Provider value={{
    playable: state.playable,
    correctLetters: state.correctLetters,
    wrongLetters: state.wrongLetters,
    showNotification: state.showNotification,
    selectedWord: state.selectedWord,
    showHints: state.showHints,
    toggleNotification,
    toggleHints,
    setSelectedWord,
    setCorrectLetters,
    setWrongLetters,
    resetGame
  }}>
    {children}
  </GlobalContext.Provider>
  )
}
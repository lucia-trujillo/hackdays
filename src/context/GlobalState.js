import React, { createContext, useReducer, useCallback } from 'react'
import AppReducer from './AppReducer'
import Owlbot from 'owlbot-js'
import randomWords from 'random-words'

// Initial state
const initialState = {
  playable: false,
  selectedWord: {},
  correctLetters: [],
  wrongLetters: [],
  showNotification: false
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
  
  const resetGame = () => {
    dispatch({ 
      type: 'RESET_GAME'
    })
  }

  const setSelectedWord = useCallback(() => {
    if(state.playable === false) {
      const client = Owlbot(process.env.REACT_APP_OWLBOT_TOKEN)
      const word = randomWords()
      client.define(word).then((result) => {
        dispatch({ 
          type: 'SET_SELECTED_WORD',
          payload: result
        })
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
    toggleNotification,
    setSelectedWord,
    setCorrectLetters,
    setWrongLetters,
    resetGame
  }}>
    {children}
  </GlobalContext.Provider>
  )
}
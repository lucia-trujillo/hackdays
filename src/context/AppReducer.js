const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return {
        ...state,
        showNotification: action.payload
      }
      case 'SET_HINTS':
        return {
          ...state,
          showHints: action.payload
        }
    case 'SET_SELECTED_WORD':
      return {
        ...state,
        playable: true,
        selectedWord: action.payload
      }
    case 'SET_CORRECT_LETTERS':
      return {
        ...state,
        correctLetters: [...state.correctLetters, action.payload]
      }
    case 'SET_WRONG_LETTERS':
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.payload]
      }
    case 'RESET_GAME':
      return {
        playable: false,
        selectedWord: {},
        correctLetters: [],
        wrongLetters: [],
        showNotification: false,
        showHints: false
      }
    default:
      return state;
    }
}

export default AppReducer
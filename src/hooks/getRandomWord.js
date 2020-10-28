import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

const GetRandomWord = () => {
    const { setSelectedWord } = useContext(GlobalContext)

    useEffect(() => {
        setSelectedWord()
    }, [setSelectedWord]) 
}

export default GetRandomWord
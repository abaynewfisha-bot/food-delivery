import { createContext } from 'react' 
import { useState } from 'react'
import { foodItems } from '../assets/food'
export  const dataContext = createContext()

function UserContext({ children }) {
     let [Cate, setCate] = useState(foodItems)
    let [input, setInput] = useState(false)
    let [showCart, setShowCart] = useState(false)
    let data = {
        input,
        setInput,
        Cate,
        setCate,
        showCart,
        setShowCart
    }
  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext

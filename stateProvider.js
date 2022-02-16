import { useContext, useReducer, createContext } from 'react'

//Prepare the Data Layer
export const StateContext = createContext()

//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, inintialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, inintialState)}>
    {children}
  </StateContext.Provider>
)

//Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext)

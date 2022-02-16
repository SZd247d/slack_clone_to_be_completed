export const initialState = {
  user: null,
  id: 1,
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_CANNEL_ID':
      return {
        ...state,
        id: action.payload,
      }
    default:
      return state
  }
}

export default reducer

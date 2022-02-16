import reducer, { initialState } from '../reducer'
import { StateProvider } from '../stateProvider'
import '../styles/globals.css'

console.log(initialState)
console.log(reducer)

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp

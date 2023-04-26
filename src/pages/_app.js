import '@/styles/globals.css'
import { store } from '../storage/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

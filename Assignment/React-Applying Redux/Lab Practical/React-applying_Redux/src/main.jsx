import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { RecoilRoot } from 'recoil'
import { store } from './App/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    {/* <RecoilRoot> */}
      <App />
    {/* </RecoilRoot> */}
    </Provider>
  </StrictMode>
)

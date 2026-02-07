import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ekspresi from './ekspresi.jsx'
import Component from './component.jsx'
import Props from './props.jsx'
import State from './state.jsx'
import Event from './Event.jsx'
import Conditional from './Conditional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Ekspresi /> */}
    {/* <Component /> */}
    {/* <Props /> */}
    {/* <State /> */}
    {/* <Event /> */}
    <Conditional />
  </StrictMode>,
)

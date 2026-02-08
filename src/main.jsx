import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App1.jsx'
import Ekspresi from './ekspresi.jsx'
import Component from './component.jsx'
import Props from './props.jsx'
import State from './state.jsx'
import Event from './Event.jsx'
import Conditional from './Conditional.jsx'
import List from './List.jsx'
import Form from './Form.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Ekspresi /> */}
    {/* <Component /> */}
    {/* <Props /> */}
    {/* <State /> */}
    {/* <Event /> */}
    {/* <Conditional /> */}
    {/* <List /> */}
    {/* <Form /> */}
    <App />
  </StrictMode>,
)

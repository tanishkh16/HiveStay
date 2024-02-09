import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider>
       <Login/> 
       </Provider>
    </>
  )
}

export default App

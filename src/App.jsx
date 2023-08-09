import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { routes } from '../utils/routes/routes'
import {

  RouterProvider,
} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
   <div className="">
      <RouterProvider
    router={routes}/>
   </div>
  )
}

export default App

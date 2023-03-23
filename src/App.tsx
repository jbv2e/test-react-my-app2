import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './Button.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button></button>
      <h1>test</h1>
      <Button />
    </div>
  )
}

export default App

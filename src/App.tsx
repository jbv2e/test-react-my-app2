import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './Button'
// import './style.css'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className={styles.title}>1test</h1>
      <Button text='test2' cls='btn' />
    </div>
  )
}

export default App

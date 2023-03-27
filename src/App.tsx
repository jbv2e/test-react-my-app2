import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './Button'
// import './style.css'
import styles from './App.module.css'

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => {
    setShowing((cur) => !cur)
  }
  function Hello() {
    // console.log('Hello')
    function effectFn() {
      console.log('hello')
      return destroy
    }
    function destroy() {
      console.log('bye')
    }

    useEffect(effectFn, [])
    return <h1>Hello</h1>
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default App

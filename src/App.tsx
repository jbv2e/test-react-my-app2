import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './Button'
// import './style.css'
import styles from './App.module.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value)
  }
  function onClick() {
    setCounter((cur) => cur + 1)
  }
  console.log('render')
  function isRunOnlyOnce() {
    console.log('once')
  }
  useEffect(isRunOnlyOnce, [])
  useEffect(() => {
    if (keyword !== '') console.log('Search For', keyword)
  }, [keyword])
  return (
    <div>
      <input onChange={onChange} type='text' placeholder='Search'></input>
      <h1 className={styles.title}>1test {counter}</h1>
      <button onClick={onClick}>{counter}</button>
      {/* <Button text='test2' cls='btn' /> */}
    </div>
  )
}

export default App

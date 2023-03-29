import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './Button'
// import './style.css'
import styles from './App.module.css'

function App() {
  const [toDo, setToDo] = useState<string>('')
  const [toDoArray, setToDoArray] = useState<string[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setToDo(e.target.value)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (toDo === '') return
    setToDoArray((cur) => [toDo, ...cur])
    setToDo('')
    //console.log(toDoArray)
  }
  return (
    <div>
      <h1>Todo ({toDoArray.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type='text' placeholder='Write your to do'></input>

        <button>Add To do</button>
        <hr />
        {toDoArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </form>
    </div>
  )
}

export default App

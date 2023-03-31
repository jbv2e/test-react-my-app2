// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './Button'
// import './style.css'
import styles from './App.module.css'
// import Home from 'routes/Home'
// import { Home } from 'routes*'
import Home from 'routes/Home'
import Details from 'routes/Details'
// import Movie from 'component/Movie'

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/details/:id',
    element: <Details></Details>,
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

/*
      // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />}></Route>
    //   </Routes>
    // </Router>
                */

export default App

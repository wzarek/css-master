import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Menu from './components/homepage/menu/Menu'
import About from './components/about/About'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-800 to-cyan-900 m-0 p-4 text-gray-200'>
      <Menu />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/homepage/Homepage'
import Menu from './components/homepage/menu/Menu'
import About from './components/about/About'
import Temp from './components/Temp'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-800 to-cyan-900 m-0 p-4 text-gray-200'>
      <Menu />
      <main className='w-3/4 m-auto'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/temp' element={<Temp />} />
        </Routes>
      </main>

    </div>
  )
}

export default App

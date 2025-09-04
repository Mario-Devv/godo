

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HeaderMobile } from './components/header/mobile/Header'
import { NewGoalsMobile } from './components/newgoals/mobile/NewGoals'
import { Dashboard } from './pages/Dashboard'
import { Pomodoro } from './pages/Pomodoro'
import { Stats } from './pages/stats'
import { Task } from './pages/Task'


function App() {


  return (
    <BrowserRouter>
      <header className='p-4 flex justify-between bg-[#FFFFFF] items-center shadow-md'>
        <HeaderMobile />
      </header>

      <section>
        {/* <NewGoalsMobile />
        Move to Task */}
        <Routes>
          {/* Redirect / to dashboard */}
          <Route path='/' element={<Navigate to='/dashboard' replace/>} />

          {/* Routes for users */}
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/pomodoro' element={<Pomodoro/>} />
          <Route path='/tareas' element={<Task/>} />
          <Route path='/estadisticas' element={<Stats/>} />
        </Routes>
      </section>

    </BrowserRouter>
  )
}

export default App

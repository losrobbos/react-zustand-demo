import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Profile } from './pages/Profile'
import { TodoList } from './pages/TodoList'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <nav style={{ display: 'flex', gap: 30 }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todos">Todos</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </nav>
          <Routes>
            <Route index element={<h1>Zustand Demo</h1>}></Route>
            <Route path='/todos' element={ <TodoList /> } ></Route>
            <Route path="/profile" element={<Profile /> } ></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App

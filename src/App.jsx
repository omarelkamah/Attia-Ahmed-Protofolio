import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
// import WorkPage from './pages/workPage/WorkPage';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exect element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

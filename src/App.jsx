import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './pages/homepage/HomePage'
import ProjectPage from './pages/projectPage/ProjectPage'
import WorkPage from './pages/workPage/WorkPage'
import CategoriePage from './pages/categoriePage/CategoriePage'

function App () {
  const [data, setData] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exect
          element={<HomePage data={data} setData={setData} />}
        />
        <Route path='/projects' element={<WorkPage />} />
        <Route path='/projects/:id' element={<ProjectPage data={data} />} />
        <Route path='/categories/:name' element={<CategoriePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './pages/homepage/HomePage'
import ProjectPage from './pages/projectPage/ProjectPage'
import WorkPage from './pages/workPage/WorkPage'
import CategoriePage from './pages/categoriePage/CategoriePage'
import { all } from './data'

function App () {
  const [openMenue, setOpenMenue] = useState(false)
  const [dark, setDark] = useState(false)

  const [data, setData] = useState(all)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exect
          element={
            <HomePage
              data={data}
              setData={setData}
              openMenue={openMenue}
              setOpenMenue={setOpenMenue}
              dark={dark}
              setDark={setDark}
            />
          }
        />
        <Route path='/projects' element={<WorkPage />} />
        <Route
          path='/projects/:name'
          element={<ProjectPage data={data} dark={dark} />}
        />
        <Route path='/categories/:name' element={<CategoriePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

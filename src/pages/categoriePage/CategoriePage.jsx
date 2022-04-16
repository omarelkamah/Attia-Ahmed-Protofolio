import './CategoriePage.scss'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/NavBar/Navbar'
import { logo, socialMediaDesign, labels, videos } from '../../data'
import { useEffect, useState } from 'react'
import Menue from '../../components/menue/Menue'

function CategoriePage (props) {
  const { dark, setDark, openMenue, setOpenMenue } = props
  const param = useParams()
  const [data, setData] = useState([])
  const categorieName = param.name

  useEffect(() => {
    switch (categorieName) {
      case 'social':
        setData(socialMediaDesign)
        break

      case 'labels':
        setData(labels)
        break

      case 'logo':
        setData(logo)
        break

      case 'videos':
        setData(videos)
        break

      default:
        setData(socialMediaDesign)
    }
  }, [categorieName])

  return (
    <div className='categoriePage'>
      <Navbar openMenue={openMenue} setOpenMenue={setOpenMenue} />
      <Menue
        setDark={setDark}
        dark={dark}
        openMenue={openMenue}
        setOpenMenue={setOpenMenue}
      />
      <h1 className='categorieTitle'>
        Welcom to {categorieName} All Projects..!
      </h1>
      <div className='categoriePageContainer'>
        {data.map(item => (
          <div className='item' key={Math.random()}>
            <div className='img-container'>
              <img src={item.mainImg} alt={item.title} />
            </div>
            <div className='imgInfo'>
              <h3>{item.title}</h3>
              <Link to={`/projects/${item.title}`}>view</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriePage

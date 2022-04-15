import './CategoriePage.scss'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/NavBar/Navbar'
import { logo, socialMediaDesign, labels, videos } from '../../data'
import { useEffect, useState } from 'react'

function CategoriePage () {
  const param = useParams()
  const [data, setData] = useState([])
  const categorieName = param.name

  console.log(data)

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
      <Navbar />
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
              <Link to={`/projects/${item.id}`}>view</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriePage

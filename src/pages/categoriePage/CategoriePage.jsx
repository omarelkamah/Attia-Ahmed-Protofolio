import './CategoriePage.scss'
import { useParams } from 'react-router-dom'
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
      {data.map(item => item.title)}
    </div>
  )
}

export default CategoriePage

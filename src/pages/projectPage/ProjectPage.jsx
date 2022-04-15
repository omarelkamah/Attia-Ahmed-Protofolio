import { Fade } from 'react-reveal'
import { Link, useParams } from 'react-router-dom'
import ProtofolioImg from '../../components/protofolioImg/ProtofolioImg'

import './projectPage.scss'

function ProjectPage ({ dark, data }) {
  const projectName = useParams()

  const findItem = data.filter(item => item.title === projectName.name)

  return (
    <>
      {findItem.map(item => (
        <div
          className='projectPage'
          id=''
          style={{ background: dark && '#222' }}
        >
          <Link to='/' className='icon' style={{ color: dark && '#fff' }}>
            <i className='fas fa-chevron-left'></i>
            Home
          </Link>
          <div className='container'>
            <div className='img-container'>
              <ProtofolioImg src={item.mainImg} secondImgs={item.secondImgs} />
            </div>
            <Fade right>
              <div className='info'>
                {item.brandLogo ? (
                  <img src={item.brandLogo} className='logo-brand' alt='' />
                ) : (
                  ''
                )}
                <h2 style={{ color: dark && '#fff' }}>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link} rel='noreferrer' target='_blank'>
                  Link in behance
                </a>
              </div>
            </Fade>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectPage

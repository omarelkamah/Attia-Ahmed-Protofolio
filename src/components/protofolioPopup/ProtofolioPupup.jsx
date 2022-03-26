import { Fade } from 'react-reveal'
import ProtofolioImg from '../protofolioImg/ProtofolioImg'
import './protofolioPupup.scss'

export default function ProtofolioPupup ({ dark, open, setOpen, item, id }) {
  return (
    <>
      {item.id === id ? (
        <div
          className='popup'
          id={id}
          style={{ display: !open && 'none', background: dark && '#222' }}
        >
          <div className='icon' onClick={() => setOpen(false)}>
            <i className='fas fa-chevron-left'></i>
            Home
          </div>
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
      ) : (
        ''
      )}
    </>
  )
}

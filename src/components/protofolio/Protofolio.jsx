import React, { useEffect, useState } from 'react'
import ProtofolioList from '../protofolioList/ProtofolioList'
import './protofolio.scss'
import { all, socialMediaDesign, logo, videos, labels } from '../../data'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

export default function Protofolio ({ dark, data, setData }) {
  const [selected, setSelected] = useState('all')

  const theList = [
    {
      id: 'all',
      title: 'All'
    },
    {
      id: 'socialMediaDesign',
      title: 'Social Media Design'
    },
    {
      id: 'logo',
      title: 'Logo / Brand Identity'
    },
    {
      id: 'labels',
      title: 'Labels'
    },
    {
      id: 'videos',
      title: 'Videos'
    }
  ]

  useEffect(() => {
    switch (selected) {
      case 'all':
        setData(all)
        break

      case 'socialMediaDesign':
        setData(socialMediaDesign)
        break

      case 'logo':
        setData(logo)
        break

      case 'labels':
        setData(labels)
        break

      case 'videos':
        setData(videos)
        break

      default:
        setData(all)
    }
  }, [selected])

  return (
    <div className='protofolio' id='protofolio'>
      <Fade top>
        <div className='section-title' style={{ color: dark && '#fff' }}>
          <h2>Protofolio</h2>
        </div>
      </Fade>
      <Fade bottom>
        <ul className='list'>
          {theList.map(item => (
            <ProtofolioList
              dark={dark}
              title={item.title}
              id={item.id}
              key={item.id}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </Fade>

      <div className='container'>
        {data.map(item => (
          <>
            {item.type === 'video' ? (
              <Fade bottom>
                <div
                  className='item'
                  key={Math.random()}
                  style={{ height: '230px' }}
                >
                  <div className='video-container' style={{ height: '100%' }}>
                    <video
                      src={item.mainImg}
                      controls
                      loop
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </Fade>
            ) : (
              <Fade bottom>
                <Link to={`/projects/${item.title}`}>
                  <div className='item' key={Math.random()}>
                    <div className='img-container'>
                      <img src={item.mainImg} alt={item.title} />
                    </div>
                    <div className='imgInfo'>
                      <h3>{item.title}</h3>
                      <Link to={`/projects/${item.title}`}>view</Link>
                    </div>
                  </div>
                </Link>
              </Fade>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

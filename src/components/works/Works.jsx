import React from 'react';
import { useState } from 'react/cjs/react.development';

import './works.scss';

function Works() {

  const [slider, setSlider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (target) => {
    target === "left"
      ? setSlider(slider > 0 ? slider - 1 : 2)
      : setSlider(slider < data.length -1 ? slider + 1 : 0)
  }

  return (  
    <div className='works' id='works'>
            <div className="section-title">
              <h2>Works</h2>
            </div>
        <div className='slider' style={{transform: `translateX(-${slider * 100}vw)`}}>
            {data.map(item => (
              <div className="container" key={item.id}>
                <div className="item">
                  <div className="left">
                    <div className="img-container">
                      <img src={item.icon} alt="img" />
                    </div>
                    <h3 className="title">{item.title}</h3>
                    <p>{item.desc}</p>
                    <span>Projects</span>
                  </div>
                  <div className="right">
                      <img src={item.img} alt="" />
                  </div>
                </div>
              </div>
            ))}

        </div>
        <div className="arrow">
          <i className="fas fa-chevron-left left" onClick={() => handleClick("left")}></i>
          <i className="fas fa-chevron-right right"  onClick={() => handleClick()}></i>
        </div>
    </div>
  );
}

export default Works;

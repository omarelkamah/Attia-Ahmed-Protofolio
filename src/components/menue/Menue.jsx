import React from 'react';
import Togler from '../togler/Togler';

import './menue.scss';

export default function Menue({openMenue, handeleMenue, dark, setDark}) {
  return (
    <div className={'menue ' + (openMenue && "active")}>
        <ul className="list">
            <li onClick={() => handeleMenue(!openMenue)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={() => handeleMenue(false)}>
                <a href="#protofolio">Protofolio</a>
            </li>
            <li onClick={() => handeleMenue(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={() => handeleMenue(false)}>
                <a href="#testimoials">Testimonials</a>
            </li>
            <li onClick={() => handeleMenue(false)}>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <Togler dark={dark} setDark={setDark} />
            </li>
        </ul>
    </div>
  );
}

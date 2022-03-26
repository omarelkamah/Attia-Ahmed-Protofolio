import React from 'react';

import './protofolioList.scss';

export default function ProtofolioList({dark, title, active, id, setSelected}) {
  return (
        <li className={active ? "active" : ""} style={{color: dark && "#fff"}} key={id} onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}

import './togler.scss'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'

export default function Togler({dark, setDark}) {
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={ () =>  setDark(!dark)}
        style={{left: dark ? 0 : "27px"}}
      ></div>
    </div>
  )
}

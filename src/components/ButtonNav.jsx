import './ButtonNav.css'
import { Link } from './Link'

export function ButtonNav ({ icon, idSection, link, label, onMouseEnter, onMouseLeave }) {
  if (link) {
    return (
      <a id={label} className="button-nav" href={link} target='_blank' rel="noreferrer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {icon}
      </a>
    )
  } else {
    return (
      <Link to={idSection !== 'home' ? `/${idSection}` : '/'}>
        <button id={label} className="button-nav" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {icon}
        </button>
      </Link>
    )
  }
}

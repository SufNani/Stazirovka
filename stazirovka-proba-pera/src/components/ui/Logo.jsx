import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Logo({ to = '/' }) {
  return (
    <Link to={to} className="kt-logo" aria-label="КалендАрт, на главную">
      <img className="kt-logo__mark" src={logo} alt="" aria-hidden="true" />
      <span className="kt-logo__text">
        Календ<b>Арт</b>
      </span>
    </Link>
  )
}

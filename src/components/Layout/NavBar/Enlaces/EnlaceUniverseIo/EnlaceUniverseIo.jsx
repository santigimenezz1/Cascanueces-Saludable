 import { Link } from 'react-router-dom'
import '../EnlaceUniverseIo/enlaceUniverseIo.css'
const EnlaceUniverseIo = ( {text, ruta} ) => {
    return (
        <div>
            <Link to={`${ruta}`}>
            <a href="#" class="menu__link">{text}</a>
            </Link>

        </div>
    )
}
export default EnlaceUniverseIo
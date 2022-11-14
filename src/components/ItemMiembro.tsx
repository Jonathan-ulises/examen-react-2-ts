import { Link } from 'react-router-dom';

import Avatar1 from '../assets/img/avatar1.png';
import Avatar2 from '../assets/img/avatar2.png';
import Avatar3 from '../assets/img/avatar3.png';
import AvatarExample from '../assets/img/universidad.png';


type PropsMiembro = {
    id: string,
    nombre: string,
    avatar: string,
    twitter: string,
  }

const ItemMiembro = ({ id, nombre, avatar, twitter}: PropsMiembro) => {
  return (
    <div className='row my-1 mx-1 shadow-sm rounded'>
      <div className="col-3">
        <Link to={`/editar/${id}`}>
          <div>
            {avatar == 'A1' ? (
              <img src={Avatar1} style={{ maxWidth: 100 }} alt="Logo" className="img-fluid" />

            ) : avatar == 'A2' ? (
              <img src={Avatar2} style={{ maxWidth: 100 }} alt="Logo" className="img-fluid" />

            ) : avatar == 'A3' ? (
              <img src={Avatar3} style={{ maxWidth: 100 }} alt="Logo" className="img-fluid" />

            ) : <img src={AvatarExample} style={{ maxWidth: 100 }} alt="Logo" className="img-fluid" />}
          </div>
        </Link>
      </div>
      <div className="col-8 ms-3">
        <p className="h2">{nombre}</p>
        <div className="d-flex">
          <img src="https://cdn.svgporn.com/logos/twitter.svg" style={{ maxWidth: 30 }} className="img-fluid" alt="..." />
          <p>@{twitter}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemMiembro
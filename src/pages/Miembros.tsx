import React, { useContext, useEffect } from 'react'
import ItemMiembro from '../components/ItemMiembro';
import MiembroContext from '../context/Miembro/MiembroContext';
import { MbrContext } from '../model/Miembro.interface';
import { Link } from 'react-router-dom';

const Miembros = () => {

  const { miembros, getMiembros } = useContext(MiembroContext)
  
  useEffect(() => {
    getMiembros!();
    console.log('MIEMBROS => ', miembros)
  }, [])

  return (
    <div className='container'>
      <div className="d-grid mt-2">
        <Link to={'/registrar'} className='btn btn-warning'>
          Agregar
        </Link>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-11 shadow rounded">
          {
            miembros?.map(({id, nombre, avatar, twitter}) => (
              <ItemMiembro key={id!} id={id!} nombre={nombre} avatar={avatar} twitter={twitter}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Miembros
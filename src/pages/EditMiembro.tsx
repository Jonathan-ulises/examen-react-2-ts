import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import A1 from '../assets/img/avatar1.png';
import A2 from '../assets/img/avatar2.png';
import A3 from '../assets/img/avatar3.png';
import MiembroContext from '../context/Miembro/MiembroContext';
import { KEY_STORAGE, Miembro } from '../model/Miembro.interface';

const EditMiembro = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { editMiembro, getMiembro, miembroSeleccionado } = useContext(MiembroContext)
  const [data, setData] = useState<Miembro>({
    nombre: miembroSeleccionado?.nombre!,
    apellidoP: miembroSeleccionado?.apellidoP!,
    apellidoM: miembroSeleccionado?.apellidoM!,
    email: miembroSeleccionado?.email!,
    twitter: miembroSeleccionado?.twitter!,
    avatar: miembroSeleccionado?.avatar!,
    isTermAccept: miembroSeleccionado?.isTermAccept!
  });

  useEffect(() => {
    const local = localStorage.getItem(KEY_STORAGE)
    const data = JSON.parse(local != null ? local : "[]") as Miembro[]
    const m = data.find(d => d.id === id);
    if (m) {
      const info = getMiembro!(id!)
      console.log('INFO => ', info)
      setData({ ...info })
    } else {
      navigate('/miembros')
    }
  }, [])

  const { nombre, apellidoP, apellidoM, email, twitter, avatar, isTermAccept } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target[e.target.name == 'isTermAccept' ? 'checked' : 'value']
    })
    console.log('DATA => ', data)
  }

  const handleAdd = () => {
    editMiembro!(data);
    navigate('/miembros')
  }




  return (
    <div className='container'>
      <p className='h3 text-center my-3'>Editar</p>
      <div className="row">
        <div className="col shadow rounded">
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="txtNombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name='nombre' id="txtNombre"
              onChange={e => handleChange(e)}
              value={nombre} />
          </div>

          {/* Apellido Paterno */}
          <div className="mb-3">
            <label htmlFor="txtApellidoP" className="form-label">Apellido Paterno</label>
            <input
              type="text"
              className="form-control"
              name='apellidoP' id="txtApellidoP"
              onChange={e => handleChange(e)}
              value={apellidoP} />
          </div>

          {/* Apellido Materno */}
          <div className="mb-3">
            <label htmlFor="txtApellidoM" className="form-label">Apellido Materno</label>
            <input
              type="text"
              className="form-control"
              name='apellidoM' id="txtApellidoM"
              onChange={e => handleChange(e)}
              value={apellidoM} />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="txtEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name='email' id="txtEmail"
              onChange={e => handleChange(e)}
              value={email} />
          </div>

          {/* Twitter */}
          <div className="mb-3">
            <label htmlFor="txtTW" className="form-label">Twitter</label>
            <input
              type="text"
              className="form-control"
              name='twitter' id="txtTW"
              onChange={e => handleChange(e)}
              value={twitter} />
          </div>

          {/* Avatar */}
          <div className="mb-3 row justify-content-center">
            <div className="col-4 col-md-2 col-xl-2">
              <img src={A1} style={{ maxWidth: 100 }} alt="" className="img-fluid" />
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="avatar" id="avatar1"
                  value="A1"
                  checked={avatar == 'A1'}
                  onChange={e => handleChange(e)} />
                <label className="form-check-label" htmlFor="avatar1">
                  Opcion 1
                </label>
              </div>
            </div>
            <div className="col-4 col-md-2 col-xl-2">
              <img src={A2} style={{ maxWidth: 100 }} alt="" className="img-fluid" />
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="avatar" id="avatar2"
                  value='A2'
                  checked={avatar == 'A2'}
                  onChange={e => handleChange(e)} />
                <label className="form-check-label" htmlFor="avatar2">
                  Opcion 2
                </label>
              </div>
            </div>
            <div className="col-4 col-md-2 col-xl-2">
              <img src={A3} style={{ maxWidth: 100 }} alt="isTermAccept" className="img-fluid" />
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="avatar" id="avatar3"
                  value="A3"
                  checked={avatar == 'A3'}
                  onChange={e => handleChange(e)} />
                <label className="form-check-label" htmlFor="avatar4">
                  Opcion 3
                </label>
              </div>
            </div>
          </div>

          {/* Terminos y Condiciones */}
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isTermAccept}
                name='isTermAccept' id="terminos"
                onChange={e => handleChange(e)} />
              <label className="form-check-label" htmlFor="terminos">
                Lei y acepto los terminos y condiciones
              </label>
            </div>
          </div>

          {/* Guardar */}
          <div className="d-grid my-3">
            <button onClick={handleAdd} className="btn btn-dark">Editar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditMiembro
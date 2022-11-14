import UTL from '../assets/img/universidad.png';
import CONGRESO from '../assets/img/congresoNacional.png';

const Home = () => {
  return (
    <div className='container'>
        <div className="row justify-content-center mt-5">
            <div className="col-6">
                <img src={UTL} alt="UTL" style={{maxWidth: 200}} className='img-fluid' />
            </div>
        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-6">
                <img src={CONGRESO} alt="CONGRESO" style={{maxWidth: 200}} className='img-fluid' />
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-auto text-center">
                <h1>Congreso de tecnologias de la informacion</h1>
            </div>
        </div>
        <div className="d-grid mt-5">
            <button className='btn btn-warning'>
                Entrar
            </button>
        </div>
    </div>
  )
}

export default Home
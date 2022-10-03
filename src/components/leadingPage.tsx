import { useNavigate } from 'react-router-dom'
import image from '../assets/img/bookshelf.png'
import '../styles/home.css'

export const LeadingPage = () => {
  const navigate = useNavigate()
  const handleNav = () => navigate('/search')

  return (
    <section className='container-section'>

      <div className='container-section-grid'>
        <p>"Si esta nación es tan sabia como fuerte,
          si queremos alcanzar nuestro destino,
          entonces necesitamos más ideas nuevas, más hombres sabios,
          más libros buenos en más bibliotecas públicas.
          Estas bibliotecas deben estar abiertas a todos, excepto al censor.
          Debemos saber todos los hechos, escuchar todas las alternativas y oír todas las críticas.
          Acojamos libros polémicos y autores controvertidos".
          John Fitzgerald Kennedy, Ex - Presidente de los Estados Unidos.</p>

        <button onClick={handleNav}>Get search books</button>
      </div>

      <div className='container-section-img'>
        <img src={image} />
      </div>

    </section>
  )
}

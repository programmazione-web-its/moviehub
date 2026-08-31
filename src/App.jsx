import Container from './components/Container'
import MovieCard from './components/MovieCard'

import d13 from './assets/distretto-13.jpg'
import noCountryForOldMan from './assets/non-un-paese-per-vecchi1.jpg'
import vizioForma from './assets/vizio-di-forma.jpg'

function App() {
  return (
    <Container>
      <div className='grid'>
        <MovieCard
          title='Non è un paese per vecchi'
          year='2007'
          poster={noCountryForOldMan}
        />
        <MovieCard
          title='Distretto 13 - Le brigate della morte'
          year='1976'
          poster={d13}
        />
        <MovieCard title='Vizio di forma' year='2014' poster={vizioForma} />
      </div>
    </Container>
  )
}

export default App

import Header from './components/Header'
import ListarLibros from './components/ListarLibros'
import Footer from './components/Footer'
import Filtros from './components/Filtros'

function App() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden  mx-20 my-16 '>
        <Filtros /> 
        <ListarLibros />
      </main>
      <Footer />
    </>
  )
}

export default App

import Header from './components/Header'
import ListarLibros from './components/ListarLibros'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden'>
        <ListarLibros />
      </main>
      <Footer />
    </>
  )
}

export default App

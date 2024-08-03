import './App.css'
import { Container } from 'react-bootstrap'
import Footer from '../src/components/Footer.jsx'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx'
function App() {
  
  return (
    <>
    <Header/>
      <main>
        <Container>
          <h1>Ecommerce app</h1>
          <Homepage/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App

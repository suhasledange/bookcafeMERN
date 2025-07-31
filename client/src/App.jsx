import BookSlider from './components/BookSlider/BookSlider'
import HomeSlider from './components/HomeSlider/HomeSlider'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HomeSlider/>
      <BookSlider/>
      <BookSlider/>
      <BookSlider/>
      <Footer/>
    </div> 
  )
}

export default App

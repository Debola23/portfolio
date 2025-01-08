import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'


function App() {
  return (
    <>
      <div className={styles.Body}>
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default App
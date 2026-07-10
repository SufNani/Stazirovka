import Header from '../components/Header'
import Hero from '../components/Hero'
import Collections from '../components/Collections'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'

function Home(){
  return (
    <>
    <Header/>

    <main>
        <Hero/>
        <Collections/>
        <Catalog/>
    </main>
    
    <Footer/>
    </>
  );
}

export default Home
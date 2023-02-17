
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Banner } from '@/components/Banner'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Prices from '@/components/Prices'
import Reviews from '@/components/Reviews'
import Map from '@/components/Map'



export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />

      <Projects />
      <Prices />
      <Map />
      <Reviews />

      <Footer />
    </>
  )
}

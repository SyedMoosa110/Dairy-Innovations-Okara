import { SiteProvider } from './hooks/useSite'
import Preloader from './components/Preloader'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SplitFeature from './components/SplitFeature'
import NewsGrid from './components/NewsGrid'
import Machinery from './components/Machinery'
import MediaGrid from './components/MediaGrid'
import Resources from './components/Resources'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import QuoteModal from './components/QuoteModal'
import VideoModal from './components/VideoModal'
import StoryModal from './components/StoryModal'

export default function App() {
  return (
    <SiteProvider>
      <Preloader />
      <TopBar />
      <Navbar />
      <main>
        <Hero /><SplitFeature /><NewsGrid /><Machinery /><MediaGrid /><Resources />
      </main>
      <Footer />
      <WhatsAppFloat />
      <QuoteModal /><VideoModal /><StoryModal />
    </SiteProvider>
  )
}

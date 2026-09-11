import { About } from './About'
import { Contact } from './Contact'
import { FloatingLine } from './FloatingLine'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Navbar } from './Navbar'
import { Process } from './Process'
import { Services } from './Services'
import { WhyUs } from './WhyUs'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#services"
        className="sr-only left-4 top-4 z-[60] rounded-full bg-royal px-4 py-2 text-white focus:not-sr-only focus:absolute"
      >
        ข้ามไปยังเนื้อหา
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingLine />
    </div>
  )
}

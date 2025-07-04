import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Fees from '@/components/Fees'
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-50 min-h-screen pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-20">
          <Hero />
          <About />
          <section className="max-w-5xl mx-auto">
            <Services />
          </section>
          <Fees />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

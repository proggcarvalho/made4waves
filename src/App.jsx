import Header from './components/Header'
import Marquee from './components/Marquee'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 bg-grain font-sans selection:bg-zinc-900 selection:text-white">
      <Header />
      <Marquee /> {/* A Fita entra aqui! */}
      
      <main className="flex-grow pb-24">
        <Dashboard />
      </main>

      <Footer />
    </div>
  )
}

export default App
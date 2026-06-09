import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <Header />
      <main className="pb-12">
        <Dashboard />
      </main>
    </div>
  )
}

export default App
export default function Header() {
  return (
    <header className="w-full bg-blue-900 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider flex items-center gap-2">
          Made4Waves 🌊
        </h1>
        <p className="text-blue-200 text-sm hidden sm:block">
          Previsões Marítimas Nacionais
        </p>
      </div>
    </header>
  )
}
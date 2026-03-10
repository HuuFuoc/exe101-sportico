import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="min-h-[60vh] bg-white pt-24">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          This is a placeholder route for the Sportico landing page demo.
        </p>
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainers" element={<PlaceholderPage title="Find Trainers" />} />
        <Route path="/messages" element={<PlaceholderPage title="Messages" />} />
        <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


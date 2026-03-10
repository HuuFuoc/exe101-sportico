import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CoachDashboardPage } from "./pages/CoachDashboardPage";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";

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
  );
}

/** Routes that use the global Navbar + Footer shell */
function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ShellLayout>
            <HomePage />
          </ShellLayout>
        }
      />
      <Route path="/signin" element={<SignInPage />} />
      <Route
        path="/trainers"
        element={
          <ShellLayout>
            <PlaceholderPage title="Find Trainers" />
          </ShellLayout>
        }
      />
      <Route
        path="/messages"
        element={
          <ShellLayout>
            <PlaceholderPage title="Messages" />
          </ShellLayout>
        }
      />
      <Route path="/dashboard" element={<CoachDashboardPage />} />
    </Routes>
  );
}

export default App;

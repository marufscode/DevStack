import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StackProvider } from "./context/StackContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <StackProvider>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <main>
          <Hero />
          <TechGrid />
        </main>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        pauseOnHover
      />
    </StackProvider>
  );
}

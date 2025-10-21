// src/App.tsx
import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./App/Ui/ThemeContext";
import Navber from "./components/Navbar";
import Home from "./App/Home/Home";
import CodeLoader from "./components/Loading/CodeLoader";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or preload assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CodeLoader />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Navber />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

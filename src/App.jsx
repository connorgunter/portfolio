import "../src/css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Services from "./pages/Services";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Welcome />
        <About />
        <Services />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

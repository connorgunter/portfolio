import "../src/css/App.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

import Welcome from "./pages/Welcome"
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
function App() {

  return (
    <div className="App">
      <Header />
      <main>
      <Welcome />
      <Home />
      <Skills />
      <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
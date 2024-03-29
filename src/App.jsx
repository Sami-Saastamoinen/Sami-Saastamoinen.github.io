import {} from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
  return (
    <div className="min-h-screen bg-background dark:dark">
      <Router>
        <Navbar />
        {routes}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

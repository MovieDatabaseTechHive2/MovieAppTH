import "./App.css";
import HomePage from "./components/home/HomePage"; // Corrected path for HomePage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/watch/singlePage";
import Header from "./components/header/header"; // Corrected import for Header
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

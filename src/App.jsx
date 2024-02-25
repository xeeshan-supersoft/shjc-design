import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home/index";
import { Error } from "./pages/Error/index";
import Layout from "./components/Layout";
import AboutPage from "./pages/About";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route >
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="*" element={ <Error code="404" /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Diplomas from "./Diplomas";

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="diplomas" element={<Diplomas />} />
            </Routes>

            <footer className="container">
                &copy;2025 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
            </footer>
        </div>
    )
};

export default App;
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <footer>
                &copy;2025 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
            </footer>
        </div>
    )
};

export default App;
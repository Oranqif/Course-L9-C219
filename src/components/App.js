import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="diplomas" element={<Diplomas />}>
                    <Route path=":dipId" element={<Diploma />}>
                        <Route path=":moduleId" element={<Module />} />
                    </Route>
                    <Route index element={<h2>Select a diploma from above</h2>} />
                </Route>
                <Route path="register" element={<Register />} />
                <Route path="confirmed" element={<Confirmation />} />
                <Route path="*" element={<h1 className="not found">Page Not Found</h1>} />
            </Routes>

            <footer className="container">
                &copy;2025 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
            </footer>
        </div>
    )
};

export default App;
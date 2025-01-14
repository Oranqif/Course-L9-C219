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
                <Route path="diplomas" element={<Diplomas />}>
                    <Route path=":dipId">
                        <Route path=":moduleId" />
                    </Route>
                    <Route index element={<h3>Select a diploma from above</h3>}/>
                </Route>
            </Routes>

            <footer className="container">
                &copy;2025 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
            </footer>
        </div>
    )
};

export default App;
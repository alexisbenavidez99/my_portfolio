import React from "react";
import Navbar from "./components/NavTabs";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <AnimatedRoutes />
                <Footer />
            </Router>
        </div>
    )
}

export default App;

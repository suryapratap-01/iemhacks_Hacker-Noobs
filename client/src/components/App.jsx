import React from "react";
import Bot from "./Bot/Bot";
import NavBar from "./NavBar"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <> 
        <Router>
           <NavBar />
             <Routes>
             <Route path="/" element={<Bot />} />
             </Routes>
           </Router>
        </>

    );
}

export default App;
import React from "react";
import Bot from "./Bot/Bot";
import PdfPage from "./Documents_Page/pdfPage";
import NavBar from "./NavBar"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <> 
        <Router>
           <NavBar />
             <Routes>
             <Route path="/" element={<Bot />} />
             <Route path="/pdf" element={<PdfPage />} />
             </Routes>
           </Router>
        </>

    );
}

export default App;
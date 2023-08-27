import React from "react";
import Bot from "./Bot/Bot";
<<<<<<< HEAD
import PdfPage from "./Documents_Page/pdfPage";
=======
import NavBar from "./NavBar"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 8aadee1f436f212ce423626dab1ea24c2c1ce5b0

function App() {
    return (
        <> 
<<<<<<< HEAD
            <Bot/>
            <hr />
            <PdfPage />
=======
        <Router>
           <NavBar />
             <Routes>
             <Route path="/" element={<Bot />} />
             </Routes>
           </Router>
>>>>>>> 8aadee1f436f212ce423626dab1ea24c2c1ce5b0
        </>

    );
}

export default App;
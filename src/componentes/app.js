import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/maestro";
import Nofound from "./pages/Nofound";
import Navergar from "./pages/Navegar";

const App = ()=>(
    <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Nofound/>}></Route>
                <Route path="/formu" element={<Navergar/>}></Route>
                <Route path="/cartas" element={<Maestro/>}></Route>
            </Routes>
        </BrowserRouter>
)

export default App
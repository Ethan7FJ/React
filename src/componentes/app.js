import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/maestro";
import Wuenas from "./pages/wuenas";
import Nofound from "./pages/Nofound";

const App = ()=>(
    <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Nofound/>}></Route>
                <Route path="/formu" element={<Wuenas/>}></Route>
                <Route path="/cartas" element={<Maestro/>}></Route>
            </Routes>
        </BrowserRouter>
)

export default App
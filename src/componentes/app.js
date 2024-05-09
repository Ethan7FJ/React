import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maestro from "./pages/maestro";
import Wuenas from "./pages/wuenas";
import Nofound from "./pages/Nofound";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<Nofound/>}></Route>
                <Route exact path="/Pagina/new" element={<Wuenas/>}></Route>
                <Route exact path="/cartas" element={<Maestro/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
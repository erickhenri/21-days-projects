import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Index";
import { HelloWord } from "./projects/day2/HelloWord";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="HelloWord" element={<HelloWord />} />
            </Routes>
        </BrowserRouter>
    )
}
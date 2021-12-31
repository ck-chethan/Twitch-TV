import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

const PageOne = () => {
    return (
        <div>PageOne</div>
    )
}

const PageTwo = () => {
    return (
        <div>PageTwo</div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Routes>
                    <Route path="/" exact element={PageOne()}/>
                    <Route path="/pagetwo" element={PageTwo()} />
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

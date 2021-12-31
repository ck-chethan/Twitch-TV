import React from 'react'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

const PageOne = () => {
    return (
        <div>
        PageOne
        {/* <a href="/pagetwo">Navigate to Page2</a> -- Bad Approach Because it'll rerender the whole index.html*/}
        <Link to="/pagetwo">Navigate to Page2</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
        PageTwo
        {/* <a href="/">Navigate to Page1</a> */}
        <Link to="/">Navigate to Page1</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Routes>
                    <Route path="/" element={PageOne()}/>
                    <Route path="/pagetwo" element={PageTwo()} />
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

import React from 'react'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                <Header />
                <Routes>
                    <Route path="/" element={<StreamList />}/>
                    <Route path="/streams/show" element={<StreamShow />}/>
                    <Route path="/streams/new" element={<StreamCreate />}/>
                    <Route path="/streams/edit" element={<StreamEdit/>}/>
                    <Route path="/streams/delete" element={<StreamDelete/>}/>
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

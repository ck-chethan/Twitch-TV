import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import history from '../history'; 
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () => {
    
    return (
        <div className="ui container">
            <BrowserRouter history={history}>
            {/* This History prop will use this history instead of a default history  */}
                <div>
                <Header />
                <Routes>
                    <Route path="/" element={<StreamList />}/>
                    <Route path="/streams/show" element={<StreamShow />}/>
                    <Route path="/streams/new" element={<StreamCreate />}/>
                    <Route path="/streams/edit/:id" element={<StreamEdit />}/>
                    {/* <Route path="/streams/edit/:id" children={({ match }) => (
                        match ? ( <StreamEdit match={match} />) : ( 
                        <StreamList />
                        ))}/> */}
                    <Route path="/streams/delete" element={<StreamDelete/>}/>
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

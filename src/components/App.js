import React from 'react'
import {Route, Routes, BrowserRouter, unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import history from '../history'; 
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamIssue from './streams/StreamIssue';
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () => {
    return (
        <div className="ui container">
            <HistoryRouter history={history}>
            {/* This History prop will use this history instead of a default history  */}
                <div>
                <Header />
                <Routes>
                    <Route path="/" element={<StreamList />}/>
                    <Route path="/streams/show" element={<StreamShow />}/>
                    <Route path="/streams/new" element={<StreamCreate />}/>
                    <Route path="/streams/edit/:id" element={<StreamIssue stream='edit'/>}/>
                    {/* <Route path="/streams/edit/:id" children={({ match }) => (
                        match ? ( <StreamEdit match={match} />) : ( 
                        <StreamList />
                        ))}/> */}
                    <Route path="/streams/delete/:id" element={<StreamIssue stream='delete'/>}/>
                </Routes>
                </div>
            </HistoryRouter>
        </div>
    )
}

export default App

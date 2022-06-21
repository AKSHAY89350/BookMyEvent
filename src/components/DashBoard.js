import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CreateEvent from './CreateEvent'
import DeleteEvent from './DeleteEvent';
import EditEvent from './EditEvent';
import EventDetail from './EventDetail';
import NotFound from './NotFound';
import UpcomingEvent from './UpcomingEvent'
class DashBoard extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav class="navbar navbar-expand-lg navbar-light   bg-light">
                        <div class="container-fluid">

                            <div class="collapse navbar-collapse" id="navbarNav">

                                <Link className="nav-link active" to="/">Home</Link>
                                <Link className="nav-link active" to="/Create">Create</Link>
                                <Link className="nav-link active" to="/Edit">Edit</Link>
                                <Link className="nav-link active" to="/Detail">Detail</Link>
                                <Link className="nav-link active" to="/Delete">Delete</Link>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<UpcomingEvent />} />

                        <Route path="/Create" element={<CreateEvent />} />

                        <Route path="/Edit" element={<EditEvent />} />

                        <Route path="/Detail" element={<EventDetail />} />

                        <Route path="/Delete" element={<DeleteEvent />} />

                        <Route path="*" element={NotFound}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
export default DashBoard;



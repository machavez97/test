import React, { useState } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

const Location = () => {
    const navigate = useNavigate()
    const [location_id, setLocationID] = useState("");
    const [location_type, setLocationType] = useState("");
    const [item_id, setItemID] = useState("");
    const [qty, setQty] = useState("");
    const [item_owner, setItemOwner] = useState("");
    const [physical_location, setPhysicalLocation] = useState("");
    const [notes, setNotes] = useState("");
    
    
    const submit = () => {
        Axios.post("http://localhost:3001/api/insert", {location_id: location_id, location_type: location_type, item_id: item_id, qty: qty, item_owner: item_owner, physical_location: physical_location, notes: notes})
        .then(()=> {
            alert('inserted');
        })
    };
    return (
        <div className="page">
            <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link pl-4" to="/">Home</Link>
                        <Link className="nav-link">Settings</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light">Sign In</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD LOCATION</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location Information</h5>
                        </div>
                       
                        <div className="form-row">
                            <label htmlFor="location-id" className="col-sm-2 col-form-label">Location ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="location-id" onChange={(e) =>{
                                    setLocationID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="type" id="type" onChange={(e) =>{
                                    setLocationType(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="1">X1_TBD</option>
                                    <option value="2">X2_TBD</option>
                                    <option value="3">X3_TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-sm-2 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="item-id" onChange={(e) =>{
                                    setItemID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="qty" className="col-sm-2 col-form-label">Qty</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="qty" onChange={(e) =>{
                                    setQty(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="owner" className="col-sm-2 col-form-label">Owner</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="owner" id="owner" onChange={(e) =>{
                                    setItemOwner(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="1">X1_TBD</option>
                                    <option value="2">X2_TBD</option>
                                    <option value="3">X3_TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="physical-location" className="col-sm-2 col-form-label">Physical Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="physical-location" id="physical-location" onChange={(e) =>{
                                    setPhysicalLocation(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="1">X1_TBD</option>
                                    <option value="2">X2_TBD</option>
                                    <option value="3">X3_TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) =>{
                                    setNotes(e.target.value)
                                }}/>
                            </div>
                        </div>

                    </div>

                    <div className="submit">
                        <button type="submit" id="add-product" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location History</h5>
                        </div>
                        
                        <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope ="col">Item ID</th>
                                        <th scope ="col">Qty</th>
                                        <th scope ="col">Date Added</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>No records</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </form>

                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>

            </div>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm">
                            <label>Absolute Media, Inc.</label>
                        </div>
                        <div className="col-sm">
                            <label>3350 Victor Ct. Santa Clara, CA 95054</label>
                        </div>
                        <div className="col-sm">
                            <label>(408) 970-3283</label>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Location;

import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";

const Component = ({ handleLogout }) => {
    const navigate = useNavigate();
    const[component_id, setComponentID] = useState("");
    const[customer_id, setCustomerID] = useState(null);
    const[component_type, setComponent_Type] = useState(null);
    const[title, setTitle] = useState(null);
    const[oem_pn, setOEM_PN] = useState(null);
    const[component_description, setComponent_Description] = useState(null);
    const[size, setSize] = useState(null);
    const[supplier_brand_id, setSupplier_Brand_ID] = useState(null);
    const[color, setColor] = useState(null);
    const[notes, setNotes] = useState(null);
    const[uom, setUOM] = useState(null);
    const[component_status, setComponent_Status] = useState(null);
    const[owned_by, setOwned_By] = useState(0);
    const[packaging_component, setPackaging_Component] = useState(0);
    
    const[textBox, setTextBox] = useState(false);


    const submit = () => {
        Axios.post("http://localhost:3001/api/insertComponent", 
        {
            customer_id: customer_id,
            component_type: component_type,
            title: title, 
            oem_pn: oem_pn, 
            component_description: component_description,  
            size: size, 
            supplier_brand_id: supplier_brand_id, 
            color: color, 
            notes: notes, 
            uom: uom, 
            component_status: component_status,
            owned_by: owned_by,  
            packaging_component: packaging_component 
            //item_location: item_location
        }).then(()=> {
            alert('inserted component');
        })
        // }).then((result) => {
        //     console.log(result.data);
        // }).catch(err => {
        //     console.log(err);
        // });
    };

    const handleDropDown = (e) => {
        if (e.target.value == "Other") {
            setTextBox(true);
        } else {
            setTextBox(false);
        }
        setComponent_Type(e.target.value);
    }

    const [latestComponentId, setComponentId] = useState(null);
    const nextNewComponentId = latestComponentId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestComponentId')
        .then(response => {
            setComponentId(response.data[0]['MAX(component_id)']);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

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

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>


            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD COMPONENT</h2>
                </div>

                <form>
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>Enter/Edit Components</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_id" className="col-sm-2 col-form-label">Component ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input tabindex="-1" readOnly type="text" className="form-control" id="component_id" value={nextNewComponentId}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="customer_id" onChange={(e) => {
                                    setCustomerID(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="componenttype" className="col-sm-2 col-form-label">Component Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="componenttype" id="componenttype" onChange={handleDropDown} required >
                                    <option selected value="">Select Value</option>
                                    <option value="Assembly"> Assembly</option>
                                    <option value="Bag"> Bag</option>
                                    <option value="Blu-ray"> Blu-ray</option>
                                    <option value="CD"> CD</option>
                                    <option value="Component"> Component</option>
                                    <option value="Document"> Document</option>
                                    <option value="DVD"> DVD</option>
                                    <option value="Enclosure"> Enclosure</option>
                                    <option value="Envelope"> Envelope</option>
                                    <option value="Insert"> Insert</option>
                                    <option value="Label"> Label</option>
                                    <option value="Promotional Item"> Promotional Item</option>
                                    <option value="USB"> USB</option>
                                    <option value="Other"> Other</option>
                                </select>
                            </div>
                                {textBox && (
                                    <div className="form-row">
                                        <label htmlFor="other_component_type" className="col-sm-2 col-form-label">Please Specify: </label>
                                        <div className="input-group input-group-sm mb-3 col-sm-10">
                                            <input type="text" className="form-control" id="other_component_type" onChange={(e) => {setComponent_Type(e.target.value)}} />
                                        </div>
                                    </div>
                                )} 
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="3" cols="50" className="form-control" name="title" id="custom-area" onChange={(e) => {
                                    setTitle(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem" className="col-sm-2 col-form-label">OEM P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="oem" onChange={(e) => {
                                    setOEM_PN(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_description" className="col-sm-2 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="component_description" id="custom-area" onChange={(e) => {
                                    setComponent_Description(e.target.value)
                                 }} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="size" className="col-sm-2 col-form-label">Size</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="size" onChange={(e) => {
                                    setSize(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="supplier/brand" className="col-sm-2 col-form-label">Supplier/Brand</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="supplier/brand" onChange={(e) => {
                                    setSupplier_Brand_ID(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="color" onChange={(e) => {
                                    setColor(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) => {
                                    setNotes(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="uom" className="col-sm-2 col-form-label">Unit of Measure</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="uom" onChange={(e) => {
                                    setUOM(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => {setComponent_Status(e.target.value)}} className="form-control" id= "status" >
                                    <option selected value="">Select Value</option>
                                    <option value="Active"> Active</option>
                                    <option value="Inactive"> Inactive</option>
                                    <option value="Obsolete"> Obsolete</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div class="form-check form-check-inline">
                                <input onChange={(prev) => setOwned_By(prev => !prev)} checked={owned_by} class="form-check-input" type="checkbox" id="owned_by" value="owned_by" />
                                <label class="form-check-label" for="owned_by">Owned by Individual Company?</label>
                            </div>

                            <div class="form-check form-check-inline">
                                    <input  onChange={(prev) => setPackaging_Component(prev => !prev)} checked={packaging_component} class="form-check-input" type="checkbox" id="packagingcomponent" value="packagingcomponent" />
                                    <label class="form-check-label" for="packagingcomponent">Packaging Component</label>
                            </div>
                        </div>
                    </div>

                    <div className="submit p-3">
                        <button onClick = {submit} type="submit" id="add-contact" className="btn btn-success">Submit</button>
                    </div>
                    
                </form>

                <form>                       
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>List of Inventory Locations</h5>
                        </div>

                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Item ID</th>
                                    <th scope="col">Location ID</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Physical Location</th>
                                    <th scope="col">Qty on Loc</th>
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

                <div className="product-location m-3 p-3">
                    <label htmlFor="add_location" className="col-form-label-sm">Add a location for this Component</label>
                    <div className="input-group input-group-sm mb-3 col-sm-4">
                        <select className="form-control form-control-sm" id="add_location">
                            <option defaultValue="0">Select Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <button type="submit" id="add_location" className="btn btn-info btn-sm ml-3">Add Location</button>
                    </div>
                </div>

               

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
    );
};

export default Component;

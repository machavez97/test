import React, { useState } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

const Company = ({ handleLogout }) => {
    const navigate = useNavigate();
    const [company_ID, setCompanyID] = useState(null);
    const [company_Name, setCompanyName] = useState(null);
    const [addr1, setAddr1] = useState(null);
    const [addr2, setAddr2] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [zip, setZip] = useState(null);
    const [Salesperson, setSalesperson] = useState(null);
    const [phone, setPhone] = useState(null);
    const [Extension, setExtension] = useState(null);
    const [fax, setFax] = useState(null);
    const [email, setEmail] = useState(null);
    const [Web_addr, setWebAddr] = useState(null);
    const [Tax_ID, setTaxID] = useState(null);
    const [Resale, setResale] = useState(null);
    const [credit_checked, setCreditChecked] = useState(null);
    const [status, setStatus] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [vendor, setVendor] = useState(null);
    const [OEM, setOEM] = useState(null);
    const [other_class, setOtherClass] = useState(null);
    const [notes, setNotes] = useState(null);
    
    const submit = () => {
        Axios.post("http://localhost:3001/api/insertCompany", {company_ID: company_ID, company_Name: company_Name, addr1: addr1, addr2: addr2, city: city, state: state, country: country, zip: zip, Salesperson: Salesperson, phone: phone, Extension: Extension, fax: fax, email: email, Web_addr: Web_addr, Tax_ID: Tax_ID, Resale: Resale, credit_checked: credit_checked, status: status, customer: customer, vendor: vendor, OEM: OEM, other_class: other_class, notes: notes})
        .then(()=> {
            alert('inserted Company');
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

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>



            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD COMPANY</h2>
                </div>

                <form>
                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Name</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CID" className="col-sm-2 col-form-label">Company ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="CID" onChange={(e) =>{
                                    setCompanyID(e.target.value)
                                }} maxLength = "8" required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CName" className="col-sm-2 col-form-label">Company Name</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="CName" onChange={(e) =>{
                                    setCompanyName(e.target.value)
                                }} maxLength = "128" required/>
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Location</h5>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Addr1" className="col-sm-2 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="Addr1" onChange={(e) =>{
                                    setAddr1(e.target.value)
                                }} maxLength = "64"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Addr2" className="col-sm-2 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="Addr2" onChange={(e) =>{
                                    setAddr2(e.target.value)
                                }} maxLength = "64"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="city" onChange={(e) =>{
                                    setCity(e.target.value)
                                }} maxLength = "64"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="state" id="state" onChange={(e) =>{
                                    setState(e.target.value)
                                }}>
                                    <option selected value="">Select State</option>
                                    <option value="AL">AL</option>
                                    <option value="AK">AK</option>
                                    <option value="AR">AR</option>
                                    <option value="AZ">AZ</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DC">DC</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="IA">IA</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="MA">MA</option>
                                    <option value="MD">MD</option>
                                    <option value="ME">ME</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MO">MO</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="NC">NC</option>
                                    <option value="NE">NE</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NV">NV</option>
                                    <option value="NY">NY</option>
                                    <option value="ND">ND</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VT">VT</option>
                                    <option value="VA">VA</option>
                                    <option value="WA">WA</option>
                                    <option value="WI">WI</option>
                                    <option value="WV">WV</option>
                                    <option value="WY">WY</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="zip" className="col-sm-2 col-form-label">Zip</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="zip" onChange={(e) =>{
                                    setZip(e.target.value)
                                }} maxLength = "16"/>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="country" onChange={(e) =>{
                                    setCountry(e.target.value)
                                }} maxLength = "25"/>
                            </div>
                        </div>

                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Contact</h5>
                        </div>


                        <div className="form-row">
                            <label htmlFor="sp" className="col-sm-2 col-form-label">Salesperson</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="sp" onChange={(e) =>{
                                    setSalesperson(e.target.value)
                                }} maxLength = "60"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="phone" onChange={(e) =>{
                                    setPhone(e.target.value)
                                }} maxLength = "16"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ext" className="col-sm-2 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="ext" onChange={(e) =>{
                                    setExtension(e.target.value)
                                }} maxLength = "5"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-sm-2 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="fax" onChange={(e) =>{
                                    setFax(e.target.value)
                                }} maxLength = "16"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="email" onChange={(e) =>{
                                    setEmail(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="wAddr" className="col-sm-2 col-form-label">WebAddress</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="wAddr" onChange={(e) =>{
                                    setWebAddr(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Other Company Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="TID" className="col-sm-2 col-form-label">Tax ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="TID" onChange={(e) =>{
                                    setTaxID(e.target.value)
                                }} maxLength = "64"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Resale" className="col-sm-2 col-form-label">Resale Certificate</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="Resale" onChange={(e) =>{
                                    setTaxID(e.target.value)
                                }} maxLength = "64"/>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Status" className="col-sm-2 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="Status" id="Status" onChange={(e) =>{
                                    setStatus(e.target.value)}}>
                                    <option defaultValue="act">Active</option>
                                    <option value="inAct">Inactive</option>
                                    <option value="inAct">Obsolete</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setCreditChecked(prev => !prev)} checked={credit_checked} type="checkbox" className="custom-control-input" id="creditCheck"/>
                                    <label htmlFor="creditCheck" className="custom-control-label">Credit Checked?</label>
                                </div>
                            </div>


                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input  onChange={(prev) => setCustomer(prev => !prev)} checked={customer} type="checkbox" className="custom-control-input" id="customerCheck"/>
                                    <label htmlFor="customerCheck" className="custom-control-label">Customer?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input  onChange={(prev) => setVendor(prev => !prev)} checked={vendor} type="checkbox" className="custom-control-input" id="vendorCheck"/>
                                    <label htmlFor="vendorCheck" className="custom-control-label">Vendor?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input  onChange={(prev) => setOEM(prev => !prev)} checked={OEM}  type="checkbox" className="custom-control-input" id="OEMCheck"/>
                                    <label htmlFor="OEMCheck" className="custom-control-label">OEM?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="otherClass" className="col-sm-2 col-form-label">Other Classification</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="otherClass" onChange={(e) =>{
                                    setOtherClass(e.target.value)
                                }} maxLength = "64"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) =>{
                                    setNotes(e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div className="Add/Cancel">
                        <button onClick = {submit} type="Add" id="add-company" className="btn btn-success m-2">Add</button>
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
export default Company;



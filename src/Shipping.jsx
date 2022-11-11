import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"


const Shipping = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form>
        <div class="address-list">
          <h2>List of Shipping Addresses for</h2>
          <label for="address-info">Edit | Company Name | Contact | Address 1 | City | State | Reg Ship Date | Reg Arrival Date | Requested Ship Via</label>
          <input type = "text" id = "address-info" name = "address-info"></input>
          <br></br>
        </div>

        <div class ="ship-info">
          <h2>Sales Order Shipping Information</h2>
          <label for="comp-name">Company Name</label>
          <input type = "text" id = "comp-name" name = "comp-name"></input>
          <br></br>
          <label for="con-name">Contact Name</label>
          <input type = "text" id = "con-name" name = "con-name"></input>
          <br></br>
          <label for="address1">Address 1</label>
          <input type = "text" id = "address1" name = "address1"></input>
          <br></br>
          <label for="address2">Address 2</label>
          <input type = "text" id = "address2" name = "address2"></input>
          <br></br>
          <label for="city">City | </label>
          <label for="state">State | </label>
          <label for="zip">Zip</label>
          <input type = "text" id = "city" name = "city"></input>
          <select name="state" id="state">
            <option value="" selected="selected">Select a State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <input type = "text" id = "zip" name = "zip"></input>
          <br></br>
          <label for="province">Province</label>
          <input type = "text" id = "province" name = "province"></input>
          <br></br>
          <label for="province">Province</label>
          <input type = "text" id = "province" name = "province"></input>
          <br></br>
          <label for="phone">Phone</label>
          <input type = "tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
          <br></br>
          <label for="fax">Fax</label>
          <input type = "text" id = "fax" name = "fax"></input>
          <br></br>
          <label for="email">Email</label>
          <input type = "text" id = "email" name = "emai"></input>
          <br></br>

          <h3>Request Ship via</h3>
          <label for="fedex">Fedex</label>
          <select></select><br></br>
          <label for = "ups">UPS</label>
          <select></select><br></br>
          <label for="c/w-cal">Courier | Will Call</label>
          <select></select><br></br>
          <label for="abs">ABS Van</label>
          <select></select><br></br>

          <label for="other-ship">Other Ship Method</label>
          <input type = "text" id = "other-ship" name = "other-ship"></input>
          <br></br>
          <label for="pay-method">Payment Method</label>
          <select></select><br></br>
          <label for="acc-num">Account Number</label>
          <input type = "text" id = "acc-num" name = "acc-num"></input>
          <br></br>
          <label for="ship-date">Requested Ship Date</label>
          <input type = "text" id = "ship-date" name = "ship-date"></input>
          <select name="ship-date" id="ship-date">
            <option value="" selected="selected">Ship Time</option>
          </select><br></br>
          <label for="arrival-date">Requested Arrival Date/Time</label>
          <input type = "text" id = "arrival-date" name = "arrival-date"></input>
          <select name="arrival-date" id="arrival-date">
            <option value="" selected="selected">Arrival Time</option>
          </select>
          <label for = "sat-arrival">Saturday Delivery?</label>
          <input type="checkbox" id="sat-arrivall" name="sat-arrival" value="saturday"></input>
          <br></br>
          <label for = "fob">FOB</label>
          <select name="fob" id="fob">
            <option value="" selected="selected">Point of Shipment</option>
          </select><br></br>
          <form action="" id="ship-notes">Shipping Notes</form>
          <textarea name="ship-notes" form="ship-notes"></textarea>

          <h3>Order Details</h3>
          <label for="item">Item | </label>
          <label for="total-order">Total of Order | </label>
          <label for="already-order">Already Ordered | </label>
          <label for="ship-to-address">Ship To This Address</label><br></br> 
        </div>
      </form>
    </div>         
  );
};

export default Shipping;
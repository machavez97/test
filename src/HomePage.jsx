/*import logo from './absolutemedialogo.png';*/
import React from 'react';
import './App.css';

import { Link } from "react-router-dom";

function HomePage({ handleLogout }) {

 	return (
    	<div class='HomePage'>
      		{/*<img src={logo} className="App-logo" alt="logo" />*/}
			<div class='HomePageBar'>
				<nav className="navbar navbar-dark bg-maroon">
					<label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>
					<button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
				</nav>
			</div>

			<div class='block1'>
				<Link to = "Company">
					<button type="button" id="Add Company" class="HomePageButton">Add Company</button>
				</Link>
				<Link to = "Shipping">
					<button type="button" id="Add Shipping" class="HomePageButton">Add Shipping</button>
				</Link>
			</div>

			<div class='block2'>
				<Link to = "Component">
					<button type="Add Component" id="Add Component" class="HomePageButton">Add Component</button>
				</Link>
				<Link to = "Contact">
					<button type="Add Contact" id="Add Contact" class="HomePageButton">Add Contact</button>
				</Link>
			</div> 

			<div class='block3'>
				<Link to = "Location">
					<button type="Add Location" id="Add Location" class="HomePageButton">Add Location</button>
				</Link>
				<Link to = "Order">
					<button type="Add Order" id="Add Order" class="HomePageButton">Add Order</button>
				</Link>
			</div>

			<div class='block4'>
				<Link to = "Product">
					<button type="Add Product" id="Add Product" class="HomePageButton">Add Product</button>
					</Link>
				<Link to = "ItemCheckIn">
					<button type="Item Check In" id="Item Check In" class="HomePageButton">Item Check In</button>
				</Link>
			</div>

			<div class='block5'>
				{/*<Link to = "Edit">*/}
					<button type="Edit" id="Edit" class="InactiveHomePageButton">Edit</button>
				{/*</Link>*/}
				{/*<Link to = "View">*/}
					<button type="View" id="View" class="InactiveHomePageButton">View</button>
				{/*</Link>*/}
			</div>

			<div class="block6">
				<Link to = "Search">
					<button type="Search" id="Search" class="HomePageButton" >Search</button>
				</Link>
			</div>

			<div class="block7">
				<Link to = "Invoice">
					<button type="Search" id="Search" class="HomePageButton" >Invoice</button>
				</Link>
			</div>
			
			<div class="block8">
				<Link to = "PackingSlip">
					<button type="Search" id="Search" class="HomePageButton" >Packing Slip</button>
				</Link>
			</div>

		</div>
	);
}

export default HomePage;

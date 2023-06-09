const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "password",
    database: "absolutemedia",
});

// PORT LISTEN
app.listen(3001, () =>{
    console.log("Running on port 3001");
});

// CONTACT PAGE - POST API =>
app.post("/api/insertContact", (req, res)=> {
    const customer_id = req.body.customer_id;
    const company = req.body.company;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contact_type = req.body.contact_type;
    const title = req.body.title;
    const dept = req.body.dept;
    const add_1 = req.body.add_1;
    const add_2 = req.body.add_2;
    const city = req.body.city;
    const state_in_country = req.body.state_in_country;
    const zip = req.body.zip;
    const country = req.body.country;
    const phone = req.body.phone;
    const extension = req.body.extension;
    const fax = req.body.fax;
    const email = req.body.fax;
    const cell_phone_number = req.body.cell_phone_number;
    const third_party_compnay = req.body.third_party_company;
    const notes = req.body.notes;


    const sqlInsert = "INSERT INTO contact_table (customer_id, company, fname, lname, contact_type, title, dept, add_1, add_2, city, state_in_country, zip, country, phone, extension, fax, email, cell_phone_number, third_party_company, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(sqlInsert, [customer_id, company, fname, lname, contact_type, title, dept, add_1, add_2, city, state_in_country, zip, country, phone, extension, fax, email, cell_phone_number, third_party_compnay, notes], (err, result)=>{
        console.log(result);
    
    });
});

// ORDER PAGE - POST API =>
app.post("/api/insertOrder", (req, res) => {
    //go to back_end directory in terminal and type 'node index.js'
    const productID = req.body.productID;
    const companyID = req.body.companyID;

    const salesPerson = req.body.salesPerson;
    const requestor = req.body.requestor;
    const customerContact = req.body.customerContact;
    const reOrder =  req.body.reOrder;
    
    // Custom Product
    const factoryOrderQuantity = req.body.factoryOrderQuantity;
    const customInvoice = req.body.customInvoice;
    const customPackingSlip = req.body.customPackingSlip;
    const customQuantity = req.body.customQuantity;
    const customUnitPrice = req.body.customUnitPrice;
    const customTotalPrice = req.body.customTotalPrice;

    // Billing Information
    const assemblyChargesQuantity = req.body.assemblyChargesQuantity;
    const assemblyChargesUnitPrice = req.body.assemblyChargesUnitPrice;
    const assemblyChargesTotalPrice = req.body.assemblyChargesTotalPrice;
    const printingChargesQuantity = req.body.printingChargesQuantity;
    const printingChargesUnitPrice = req.body.printingChargesUnitPrice;
    const printingChargesTotalPrice = req.body.printingChargesTotalPrice;
    const setupCharge = req.body.setupCharge;
    const numberOfScreens = req.body.numberOfScreens;
    const screensPrice = req.body.screensPrice;
    const subTotal = req.body.subTotal;
    const taxRate = req.body.taxRate;
    const tax = req.body.tax;
    const freightCharges = req.body.freightCharges;
    const priceTotal = req.body.priceTotal;
    
    // Invoice Information
    const invoiceDate = req.body.invoiceDate;
    const invoiceDatePaid = req.body.invoiceDatePaid;
    const invoiceNotes = req.body.invoiceNotes;
    
    // Job Information
    const ABSOrder = req.body.ABSOrder;
    const customerOrder = req.body.customerOrder;
    const customerPODate = req.body.customerPODate;
    const customerPONumber = req.body.customerPONumber;
    const creditChecked = req.body.creditChecked;
    const daysTurn = req.body.daysTurn;
    const dateCodePrinting = req.body.dateCodePrinting;
    const customerProvidedMaterial = req.body.customerProvidedMaterial;
    const customerMaterialETA = req.body.customerMaterialETA;
    const customerNotes = req.body.customerNotes;
    const vendorNotes = req.body.vendorNotes;
    const orderNotes = req.body.orderNotes;
    const orderStatus = req.body.orderStatus;
    
    db.query(
        "INSERT INTO order_table (product_id, company_id, salesperson, requestor, customer_contact, re_order, \
                                  factory_order_quantity, custom_invoice, custom_packing_slip, custom_quantity, custom_unit_price, custom_total_price, \
                                  assembly_charges_quantity, assembly_charges_unit_price, assembly_charges_total_price, date_code_printing_charges_quantity, date_code_printing_charges_unit_price, date_code_printing_charges_total_price, date_code_setup_charge, number_of_screens, art_manipulation, sub_total, tax_rate, tax, freight_charges, order_price_total, \
                                  invoice_date, invoice_date_paid, invoice_notes, \
                                  abs_sales_order_date, customer_order_date, customer_po_date, customer_po_number, credit_checked, days_turn, date_code_printing, customer_provided_material, customer_material_eta, customer_notes, vendor_notes, order_notes, order_status) \
                                  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [productID, companyID, salesPerson, requestor, customerContact, reOrder,
            factoryOrderQuantity, customInvoice, customPackingSlip, customQuantity, customUnitPrice, customTotalPrice,
            assemblyChargesQuantity, assemblyChargesUnitPrice, assemblyChargesTotalPrice, printingChargesQuantity, printingChargesUnitPrice, printingChargesTotalPrice, setupCharge, numberOfScreens, screensPrice, subTotal, taxRate, tax, freightCharges, priceTotal,
            invoiceDate, invoiceDatePaid, invoiceNotes,
            ABSOrder, customerOrder, customerPODate, customerPONumber, creditChecked, daysTurn, dateCodePrinting, customerProvidedMaterial, customerMaterialETA, customerNotes, vendorNotes, orderNotes, orderStatus]
            , (err, result) => {
                console.log(result);
        }
    );
});

// ORDER PAGE(NON-ITEM) - POST API =>
app.post("/api/insertOrderNonItem", (req, res) => {
    const productID = req.body.productID;
    const companyID = req.body.companyID;

    // Non-Inventory Items
    const nonItem1 = req.body.nonItem1;
    const nonItemInvoice1 = req.body.nonItemInvoice1;
    const nonItemPackingSlip1 = req.body.nonItemPackingSlip1;
    const nonItemQuantity1 = req.body.nonItemQuantity1;
    const nonItemUnitPrice1 = req.body.nonItemUnitPrice1;
    const nonItemTotalPrice1 = req.body.nonItemTotalPrice1;
    const nonItem2 = req.body.nonItem2;
    const nonItemInvoice2 = req.body.nonItemInvoice2;
    const nonItemPackingSlip2 = req.body.nonItemPackingSlip2;
    const nonItemQuantity2 = req.body.nonItemQuantity2;
    const nonItemUnitPrice2 = req.body.nonItemUnitPrice2;
    const nonItemTotalPrice2 = req.body.nonItemTotalPrice2;
    const nonItem3 = req.body.nonItem3;
    const nonItemInvoice3 = req.body.nonItemInvoice3;
    const nonItemPackingSlip3 = req.body.nonItemPackingSlip3;
    const nonItemQuantity3 = req.body.nonItemQuantity3;
    const nonItemUnitPrice3 = req.body.nonItemUnitPrice3;
    const nonItemTotalPrice3 = req.body.nonItemTotalPrice3;
    const nonItem4 = req.body.nonItem4;
    const nonItemInvoice4 = req.body.nonItemInvoice4;
    const nonItemPackingSlip4 = req.body.nonItemPackingSlip4;
    const nonItemQuantity4 = req.body.nonItemQuantity4;
    const nonItemUnitPrice4 = req.body.nonItemUnitPrice4;
    const nonItemTotalPrice4 = req.body.nonItemTotalPrice4;
    const nonItem5 = req.body.nonItem5;
    const nonItemInvoice5 = req.body.nonItemInvoice5;
    const nonItemPackingSlip5 = req.body.nonItemPackingSlip5;
    const nonItemQuantity5 = req.body.nonItemQuantity5;
    const nonItemUnitPrice5 = req.body.nonItemUnitPrice5;
    const nonItemTotalPrice5 = req.body.nonItemTotalPrice5;
    const nonItem6 = req.body.nonItem6;
    const nonItemInvoice6 = req.body.nonItemInvoice6;
    const nonItemPackingSlip6 = req.body.nonItemPackingSlip6;
    const nonItemQuantity6 = req.body.nonItemQuantity6;
    const nonItemUnitPrice6 = req.body.nonItemUnitPrice6;
    const nonItemTotalPrice6 = req.body.nonItemTotalPrice6;

    db.query(
        "INSERT INTO order_nonItem (product_id, company_id, non_inventory_line_item1, non_inventory_invoice1, non_inventory_packing_slip1, non_inventory_quantity1, non_inventory_unit_price1, non_inventory_total_price1, \
                                             non_inventory_line_item2, non_inventory_invoice2, non_inventory_packing_slip2, non_inventory_quantity2, non_inventory_unit_price2, non_inventory_total_price2, \
                                             non_inventory_line_item3, non_inventory_invoice3, non_inventory_packing_slip3, non_inventory_quantity3, non_inventory_unit_price3, non_inventory_total_price3, \
                                             non_inventory_line_item4, non_inventory_invoice4, non_inventory_packing_slip4, non_inventory_quantity4, non_inventory_unit_price4, non_inventory_total_price4, \
                                             non_inventory_line_item5, non_inventory_invoice5, non_inventory_packing_slip5, non_inventory_quantity5, non_inventory_unit_price5, non_inventory_total_price5, \
                                             non_inventory_line_item6, non_inventory_invoice6, non_inventory_packing_slip6, non_inventory_quantity6, non_inventory_unit_price6, non_inventory_total_price6) \
                                             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [productID, companyID, nonItem1, nonItemInvoice1, nonItemPackingSlip1, nonItemQuantity1, nonItemUnitPrice1, nonItemTotalPrice1,
            nonItem2, nonItemInvoice2, nonItemPackingSlip2, nonItemQuantity2, nonItemUnitPrice2, nonItemTotalPrice2,
            nonItem3, nonItemInvoice3, nonItemPackingSlip3, nonItemQuantity3, nonItemUnitPrice3, nonItemTotalPrice3,
            nonItem4, nonItemInvoice4, nonItemPackingSlip4, nonItemQuantity4, nonItemUnitPrice4, nonItemTotalPrice4,
            nonItem5, nonItemInvoice5, nonItemPackingSlip5, nonItemQuantity5, nonItemUnitPrice5, nonItemTotalPrice5,
            nonItem6, nonItemInvoice6, nonItemPackingSlip6, nonItemQuantity6, nonItemUnitPrice6, nonItemTotalPrice6]
            , (err, result) => {
                console.log(result);
        }
    );
});

// ORDER PAGE(ITEM) - POST API =>
app.post("/api/insertOrderItem", (req, res) => {
    const productID = req.body.productID;
    const companyID = req.body.companyID;

    // Inventory Items
    const item1 = req.body.item1;
    const itemInvoice1 = req.body.itemInvoice1;
    const itemPackingSlip1 = req.body.itemPackingSlip1;
    const itemQuantity1 = req.body.itemQuantity1;
    const itemUnitPrice1 = req.body.itemUnitPrice1;
    const itemTotalPrice1 = req.body.itemTotalPrice1;
    const item2 = req.body.item2;
    const itemInvoice2 = req.body.itemInvoice2;
    const itemPackingSlip2 = req.body.itemPackingSlip2;
    const itemQuantity2 = req.body.itemQuantity2;
    const itemUnitPrice2 = req.body.itemUnitPrice2;
    const itemTotalPrice2 = req.body.itemTotalPrice2;
    const item3 = req.body.item3;
    const itemInvoice3 = req.body.itemInvoice3;
    const itemPackingSlip3 = req.body.itemPackingSlip3;
    const itemQuantity3 = req.body.itemQuantity3;
    const itemUnitPrice3 = req.body.itemUnitPrice3;
    const itemTotalPrice3 = req.body.itemTotalPrice3;

    db.query(
        "INSERT INTO order_item (product_id, company_id, inventory_item1, inventory_invoice1, inventory_packing_slip1, inventory_quantity1, inventory_unit_price1, inventory_total_price1, \
                                             inventory_item2, inventory_invoice2, inventory_packing_slip2, inventory_quantity2, inventory_unit_price2, inventory_total_price2, \
                                             inventory_item3, inventory_invoice3, inventory_packing_slip3, inventory_quantity3, inventory_unit_price3, inventory_total_price3) \
                                             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [productID, companyID, item1, itemInvoice1, itemPackingSlip1, itemQuantity1, itemUnitPrice1, itemTotalPrice1,
            item2, itemInvoice2, itemPackingSlip2, itemQuantity2, itemUnitPrice2, itemTotalPrice2,
            item3, itemInvoice3, itemPackingSlip3, itemQuantity3, itemUnitPrice3, itemTotalPrice3]
            , (err, result) => {
                console.log(result);
        }
    );
});

// PRODUCT TABLE INFO - GET API <=
app.get("/api/getProductData", (req, res) => {
    //db.query ("SELECT MAX(product_id), product_category, oem_product_id, product_title FROM product_table", (err, result) =>{
    db.query ("SELECT product_id, product_title FROM product_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// PRODUCT TABLE INFO - GET API <=
app.get("/api/getProductInfo", (req, res) => {
    db.query ("SELECT product_id, product_category, oem_product_id, product_title FROM product_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});


// LATEST PRODUCT ID - GET API <=
app.get("/api/getLatestProductId", (req, res) => {
    db.query ("SELECT MAX(product_id) FROM product_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// COMPANY TABLE INFO - GET API <=
app.get("/api/getCompanyData", (req, res) => {
    db.query ("SELECT company_ID, company_Name FROM company_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// COMPONENT TABLE INFO - GET API <=
app.get("/api/getComponentData", (req, res) => {
    db.query ("SELECT component_id, customer_id, title, component_type FROM component_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getSearchContact", (req, res) =>{
    const customer_id = req.body.customer_id;
    const company = req.body.company;

    if (!company) { //Looking via customer id
        db.query("SELECT * FROM contact_table WHERE customer_id = ?", [customer_id], (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    } else if (!customer_id) { //looking via company name
        db.query("SELECT * FROM contact_table WHERE company = ?", [company], (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    } else if (!company && !customer_id) { //invalid 
        throw err;
    } else { //search with both criteria 
        db.query("SELECT * FROM contact_table WHERE customer_id = ? AND company = ?", [customer_id, company], (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    }
});

app.get("/api/getSearchCompany", (req, res) =>{
    const company_ID = req.body.company_ID;
    const company_Name = req.body.company_Name;

    if (!company_Name) { //Looking via comapny id
        db.query("SELECT * FROM company_table WHERE company_ID = ?", [company_ID], (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    } else if (!company_ID) { //looking via company name
        db.query("SELECT * FROM company_table WHERE company_Name = ?", [company_Name], (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    } else if (!company_Name && !company_ID) { //invalid 
        throw err;
    } else { //search with both criteria 
        db.query("SELECT * FROM company_table WHERE company_ID = ? AND company_Name = ?", [company_ID, company_Name], (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    }
});

// PRODUCT INFO BY ID - GET API <=
app.get("/api/products/:product_id", (req, res) => {
    const product_id = req.params.product_id;
    db.query("SELECT * FROM product_table WHERE product_id = ?", [product_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving product data');
        } else {
            res.send(result[0]);
        }
    });
});

// PRODUCT PAGE - POST API =>
app.post("/api/insertProduct", (req, res) => {
    const oldId = req.body.old_abs_id;
    const customerId = req.body.customer_id;
    const productCategory = req.body.product_category;
    const oemId = req.body.oem_product_id;
    const productTitle = req.body.product_title;
    const productDesc = req.body.product_desc;
    const productRepl = req.body.product_repl;
    const masterFormat = req.body.master_format;
    const masterReceived = req.body.master_received;
    const masterLabel = req.body.master_label;
    const masterCapacity = req.body.master_capacity;
    const masterLoc = req.body.master_loc;
    const filmsLoc = req.body.films_loc;
    const dateCodeRequired = req.body.date_code_required;
    const dateCodePosition = req.body.date_code_position;
    const innerHub = req.body.inner_hub;
    const innerHubPosition = req.body.inner_hub_position;
    const floodCoat = req.body.floodcoat;
    const rimagePrint = req.body.rimage_print;
    var colorCount = 0;
    var colors = [null, null, null, null, null, null, null, null];
    for(let i=0; i<req.body.numOfColors; i++) 
    {
        colors[i] = req.body.colorList[i].color;
        colorCount = i;
    }
    if(colors[0] !== "") { colorCount += 1; }
    if(colors[0] === "") { colors[0] = null }
    const colorNotes = req.body.color_notes;
    var components = [null, null, null, null, null, null, null, null, null, null, null, null];
    for(let i=0; i<req.body.numOfComponents; i++) 
    {
        components[i] = req.body.componentList[i].component;
    }
    if(components[0] === "") { components[0] = null }
    const packagingNotes = req.body.packaging_notes;
    const productNotes = req.body.product_notes;
    const productStatus = req.body.product_status;

    const sqlInsert = "INSERT INTO product_table (old_abs_id, customer_id, product_category, oem_product_id, product_title, product_desc, product_repl, master_format, master_received, master_label, master_capacity, master_loc, films_loc, date_code_required, date_code_position, inner_hub, inner_hub_position, floodcoat, rimage_print, num_colors, color_1, color_2, color_3, color_4, color_5, color_6, color_7, color_8, color_notes, component_1, component_2, component_3, component_4, component_5, component_6, component_7, component_8, component_9, component_10, component_11, component_12, packaging_notes, product_notes, product_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [oldId, customerId, productCategory, oemId, productTitle, productDesc, productRepl, masterFormat, masterReceived, masterLabel, masterCapacity, masterLoc, filmsLoc, dateCodeRequired, dateCodePosition, innerHub, innerHubPosition, floodCoat, rimagePrint, colorCount, colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6], colors[7], colorNotes, components[0], components[1], components[2], components[3], components[4], components[5], components[6], components[7], components[8], components[9], components[10], components[11], packagingNotes, productNotes, productStatus], (err, result) => {
        console.log(result);
    });
});

// LOCATION PAGE - POST API =>
app.post("/api/insertLocation" , (req, res) =>{
    const location_id = req.body.location_id;
    const location_type = req.body.location_type;
    const item_id = req.body.item_id;
    const qty = req.body.qty;
    const item_owner = req.body.item_owner;
    const physical_location = req.body.physical_location;
    const notes = req.body.notes;

    const sqlInsert = "INSERT INTO location_table (location_id, item_id, physical_location, location_type, item_owner, notes, qty) VALUES (?,?,?,?,?,?,?)";
    db.query(sqlInsert, [location_id, item_id, physical_location, location_type, item_owner, notes, qty], (err, result) => {
        console.log(result);
    });
});

// LOCATION TABLE - GET API <=
app.get("/api/getLocationHistory", (req, res) =>{
    const location_id = req.body.location_id;
    const item_id = req.body.item_id;
    const qty = req.body.qty;
    //const date = req.body.date;

    db.query("SELECT location_id, item_id, qty, date_added FROM location_history", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// LOCATION PAGE - POST API =>
app.post("/api/insertLocationHistory", (req, res) =>{
    const location_id = req.body.location_id;
    const item_id = req.body.item_id;
    const qty = req.body.qty;

    const sqlInsert = "INSERT INTO location_history (location_id, item_id, qty) VALUES (?,?,?)";
    db.query(sqlInsert, [location_id, item_id, qty], (err, result) =>{
        console.log(result);
    });
});

// ITEM CHECKIN TABLE PAGE - POST API =>
app.post("/api/insertItem" , (req, res) =>{
    const customer_id = req.body.customer_id;
    const item_id = req.body.item_id;
    const mfr_pn = req.body.mfr_pn;
    const description = req.body.description;
    const carrier = req.body.carrier;
    const quantity = req.body.quantity;
    const disposition = req.body.disposition;
    const signed_for_by = req.body.signed_for_by;
    const date_in = req.body.date_in;
    const date_complete = req.body.date_complete;

    const sqlInsert = "INSERT INTO item_check_in_table (customer_id, item_id, mfr_pn, description, quantity, carrier, signed_for_by, disposition, date_in, date_complete) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [customer_id, item_id, mfr_pn, description, quantity, carrier, signed_for_by, disposition, date_in, date_complete], (err, result) => {
        console.log(result);
    });
});

// ITEM INFO BY ID - GET API <=
app.get("/api/itemCheckIn/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM item_check_in_table WHERE id = ?", [id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving item check in data');
        } else {
            res.send(result[0]);
        }
    });
});

// LATEST ITEM CHECK IN ID - GET API <=
app.get("/api/getLatestItemCheckInId", (req, res) => {
    db.query ("SELECT MAX(id) FROM item_check_in_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// LATEST COMPONENT ID - GET API <=
app.get("/api/getLatestComponentId", (req, res) => {
    db.query ("SELECT MAX(component_id) FROM component_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// COMPONENT PAGE - POST API =>
app.post("/api/insertComponent", (req, res) =>{
    /*------------------------------------------ Component Page ------------------------------------------*/
    const customer_id = req.body.customer_id;
    const component_type = req.body.component_type;
    const title = req.body.title;
    const oem_pn = req.body.oem_pn;
    const component_description = req.body.component_description;
    const size = req.body.size;
    const supplier_brand_id = req.body.supplier_brand_id;
    const color = req.body.color;
    const notes = req.body.notes;
    const uom = req.body.uom;
    const component_status = req.body.component_status;
    const owned_by = req.body.owned_by;
    const packaging_component = req.body.packaging_component;
    //const item_locaiton = req.body.item_locaiton;

    const sqlInsert = "INSERT INTO component_table (customer_id, component_type, title, oem_pn, component_description, size, supplier_brand_id, color, notes, uom, component_status, owned_by, packaging_component) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [customer_id, component_type, title, oem_pn, component_description, size, supplier_brand_id, color, notes, uom, component_status, owned_by, packaging_component], (err, result) => {
        console.log(result);
    });
    /*------------------------------------------ Component Page ------------------------------------------*/
});

// SHIPPING PAGE - POST API =>
app.post("/api/insertShipping", (req, res) =>{
    const company_name = req.body.company_name;
    const contact_name = req.body.contact_name;
    const add1 = req.body.add1;
    const add2 = req.body.add2;
    const city = req.body.city;
    const country_state = req.body.state;
    const zip = req.body.zip;
    const province = req.body.province;
    const country = req.body.country;
    const phone = req.body.phone;
    const fax = req.body.fax;
    const email = req.body.email;
    const fedex = req.body.fax;
    const ups = req.body.ups;
    const courier_willcall = req.body.courier_willcall;
    const abs = req.body.abs;
    const other_ship_method = req.body.other_ship_method;
    const payment_type = req.body.payment_type;
    const account_number = req.body.account_number;
    const request_ship_date = req.body.request_ship_date;
    const request_ship_time = req.body.request_ship_time;
    const arrival_ship_date = req.body.arrival_ship_date;
    const arrival_ship_time = req.body.arrival_ship_time;
    const fob = req.body.fob;
    const notes = req.body.notes;

    const sqlInsert =  "INSERT INTO shipping_table (company_name, contact_name, add1, add2, city, country_state, zip, province, country, phone, fax, email, fedex, ups, courier_willcall, abs, other_ship_method, payment_type, account_number, request_ship_date, request_ship_time, arrival_ship_date, arrival_ship_time, fob, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [company_name, contact_name, add1, add2, city, country_state, zip, province, country, phone, fax, email, fedex, ups, courier_willcall, abs, other_ship_method, payment_type, account_number, request_ship_date, request_ship_time, arrival_ship_date, arrival_ship_time, fob, notes], (err, result) => {
        console.log(result);
    })
});

// COMPANY PAGE - POST API =>
//--------------------Company page----------------------
app.post("/api/insertCompany" , (req, res) =>{

    const company_ID = req.body.company_ID;
    const company_Name  = req.body.company_Name;
    const addr1 = req.body.addr1;
    const addr2 = req.body.addr2;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const zip = req.body.zip;
    const Salesperson = req.body.Salesperson;
    const phone = req.body.phone;
    const Extension = req.body.Extension;
    const fax = req.body.fax;
    const email = req.body.email;
    const Web_addr = req.body.Web_addr;
    const Tax_ID = req.body.Tax_ID;
    const Resale = req.body.Resale;
    const credit_checked = req.body.credit_checked;
    const status = req.body.status;
    const customer = req.body.customer;
    const vendor = req.body.vendor;
    const OEM = req.body.OEM;
    const other_class = req.body.other_class;
    const notes = req.body.notes;


     const sqlInsert = "INSERT INTO company_table (company_ID, company_Name, addr1, addr2, city, state, country, zip, Salesperson, phone, Extension, fax, email, Web_addr, Tax_ID, Resale, credit_checked, status, customer, vendor, OEM, other_class, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     db.query(sqlInsert, [company_ID, company_Name, addr1, addr2, city, state, country, zip, Salesperson, phone, Extension, fax, email, Web_addr, Tax_ID, Resale, credit_checked, status, customer, vendor, OEM, other_class, notes], (err, result) => {
         console.log(result);
     });
});
//----------------end of Company page------------------


app.get("/api/orders", (req, res) =>{
    const customer_id = req.body.customer_id;
    const company = req.body.company;

        db.query("SELECT * FROM orders", (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    
});

app.get("/api/packingSlip", (req, res) =>{
        db.query("SELECT * FROM shipping", (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    
});
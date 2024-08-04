import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "user",
        password: "postgresql",
        port: 5432,
});
db.connect();

const groceryJSON = '[{"id":"1","p_name": "Apple","price": 120.00},{"id":"2","p_name": "Banana","price": 135.00 },{"id":"3","p_name": "Mango","price": 97.00 },{"id":"4","p_name": "Avocado","price": 164.00 },{"id":"5","p_name": "Orange","price": 75.00 },{"id":"6","p_name": "Carrot","price": 115.00 },{"id":"7","p_name": "Brocoli","price": 123.00 },{"id":"8","p_name": "Onion","price": 47.00 },{"id":"9","p_name": "Potato","price": 35.00 }]';

const clothingJSON = '[{"id":"10","p_name": "Womens Shirt","price": 599.00},{"id":"11","p_name": "Womens Kurta","price": 799.00 },{"id":"12","p_name": "Womens Anarkali","price": 1499.00 },{"id":"13","p_name": "Womens Kurti","price": 699.00 },{"id":"14","p_name": "Womens Pant","price": 1199.00 },{"id":"15","p_name": "Womens Top","price": 899.00 },{"id":"16","p_name": "Mens Shirt","price": 1299.00 },{"id":"17","p_name": "Mens Jeans","price": 999.00 },{"id":"18","p_name": "Mens Tshirt","price": 899.00 }]';

const electronicsJSON = '[{"id":"19","p_name": "Laptop","price": 29999.00},{"id":"20","p_name": "Phone","price": 34699.00 },{"id":"21","p_name": "Camera","price": 17999.00 },{"id":"22","p_name": "Watch","price": 4799.00 },{"id":"23","p_name": "Ipad","price": 457999.00 },{"id":"24","p_name": "Printer","price": 18999.00 },{"id":"25","p_name": "Iron","price": 3499.00 },{"id":"26","p_name": "Vacuum","price": 5799.00 },{"id":"27","p_name": "Juicer","price": 2999.00 }]';
const arr = [];

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
let data;
let c_id;

app.get("/groceries", (req, res) => {
    res.render("groceries.ejs");
});

app.get("/clothing", (req, res) => {
    res.render("clothing.ejs");
});

app.get("/electronics", (req, res) => {
    res.render("electronics.ejs");
});

app.get("/cart", (req, res) => {
    res.render("cart.ejs", {item:arr});
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs" );
});

app.get("/check", (req, res) => {
    res.render("checkout.ejs", {item:arr});
});

app.post("/add", (req, res) => {

    switch(req.body.choice) {
        case "Apple":
            data = JSON.parse(groceryJSON)[0];
            arr.push(data);
            break;

        case "Banana":
            data = JSON.parse(groceryJSON)[1]; 
            arr.push(data);
            break;
        case "Mango":
            data = JSON.parse(groceryJSON)[2];
            arr.push(data);
            break;
        case "Avocado":
            data = JSON.parse(groceryJSON)[3];
            arr.push(data);
            break;
        case "Orange":
            data = JSON.parse(groceryJSON)[4];
            arr.push(data);
            break;
        case "Carrot":
            data = JSON.parse(groceryJSON)[5];
            arr.push(data);
            break; 
        case "Brocoli":
            data = JSON.parse(groceryJSON)[6];
            arr.push(data);
            break;
        case "Onion":
            data = JSON.parse(groceryJSON)[7];
            arr.push(data);
            break;
        case "Potato":
            data = JSON.parse(groceryJSON)[8];
            arr.push(data);
            break;
        case "Womens Shirt":
            data = JSON.parse(clothingJSON)[0];
            arr.push(data);
            break;
        case "Womens Kurta":
            data = JSON.parse(clothingJSON)[1]; 
            arr.push(data);
            break;
        case "Womens Anarkali":
            data = JSON.parse(clothingJSON)[2];
            arr.push(data);
            break;
        case "Womens Kurti":
            data = JSON.parse(clothingJSON)[3];
            arr.push(data);
            break;
        case "Womens Pant":
            data = JSON.parse(clothingJSON)[4];
            arr.push(data);
            break;
        case "Womens Top":
            data = JSON.parse(clothingJSON)[5];
            arr.push(data);
            break; 
        case "Mens Shirt":
            data = JSON.parse(clothingJSON)[6];
            arr.push(data);
            break;
        case "Mens Jeans":
            data = JSON.parse(clothingJSON)[7];
            arr.push(data);
            break;
        case "Mens Tshirt":
            data = JSON.parse(clothingJSON)[8];
            arr.push(data);
            break;
        case "Laptop":
            data = JSON.parse(electronicsJSON)[0];
            arr.push(data);
            break;
    
        case "Phone":
            data = JSON.parse(electronicsJSON)[1]; 
            arr.push(data);
            break;
        case "Camera":
            data = JSON.parse(electronicsJSON)[2];
            arr.push(data);
            break;
        case "Watch":
            data = JSON.parse(electronicsJSON)[3];
            arr.push(data);
            break;
        case "Ipad":
            data = JSON.parse(electronicsJSON)[4];
            arr.push(data);
            break;
        case "Printer":
            data = JSON.parse(electronicsJSON)[5];
            arr.push(data);
            break; 
        case "Iron":
            data = JSON.parse(electronicsJSON)[6];
            arr.push(data);
            break;
        case "Vacuum":
            data = JSON.parse(electronicsJSON)[7];
            arr.push(data);
            break;
        case "Juicer":
            data = JSON.parse(electronicsJSON)[8];
            arr.push(data);
            break;    
        default:
            break;
    }

    console.log(arr);

});

app.post("/remove", (req, res) => {
    console.log(arr);

    const index = arr.findIndex(product => product.id == req.body.choice1);

    if (index === -1) {
      console.log('Product not found');
    } else {
      arr.splice(index, 1); 
      res.redirect("/cart"); 
    }
  });

  app.post("/finalreview", async(req, res) => {
    const { email, fullname, address } = req.body;
    try {
      const text = 'INSERT INTO customer(email, fullname, address) VALUES($1, $2, $3) RETURNING *';
      const values = [email, fullname, address];
      const result = await db.query(text, values);
      let Result = await db.query('SELECT c_id FROM customer WHERE email = $1', [email]);
      c_id = Result.rows[0].c_id;
      console.log(result.rows[0]);
      res.render("review.ejs", {item: arr});
    } catch (err) {
      console.error(err);
      res.send('Error inserting data');
    }
});

app.post("/confirm", async (req, res) => {
    try {
        for (const item of arr) {
            const text = 'INSERT INTO order_items (c_id, p_name, price) VALUES ($1, $2, $3) RETURNING *';
            const values = [c_id, item.p_name, item.price];
            const result = await db.query(text, values);
            console.log(result.rows[0]);
        }
        res.render("confirm.ejs");
    } catch (err) {
        console.error('Error inserting data into database', err);
        res.status(500).send('Internal Server Error');
    }
});

app.post("/signup", async(req,res) => {
    const email = req.body["email"];
    const password = req.body["password"];
    await db.query("InSERT INTO signup(email,password) VALUES ($1, $2)", [
        email,
        password
    ]);
    res.redirect("/login");
});

app.post("/submit", async(req,res) => {
    const email = req.body["email"];
    const password = req.body["password"];
    const dbpassword = await db.query("SELECT password FROM signup WHERE email = $1", [email]);
    if (dbpassword.rows.length !== 0) {
        const data = dbpassword.rows[0];
        const pwd = data.password;
        if (password == pwd){
            res.redirect("/");
        } else {
            res.send("password does not match");
    }
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
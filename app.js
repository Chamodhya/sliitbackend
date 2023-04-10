const express=require("express")
const morgan=require('morgan')
const bodyParser=require('body-parser')

const app=express();

const mongoose=require('mongoose')

const AuthRoute=require('./routes/AuthRoute')
const AdminRoute=require('./routes/AdminRoute')
const CustomerRoute=require('./routes/CustomerRoute')
const FuelStationRoute=require('./routes/FuelStationRoute')
const ShopRoute=require('./routes/ShopRoute')

const url = 'mongodb+srv://sangeethnavodya33:san123navodya@cluster0.hzfaqmo.mongodb.net/?retryWrites=true&w=majority';
async function connect(){
  try{
    await mongoose.connect(url)
    console.log("connected")
  } catch(e){
    console.log(e);
  } 
}

connect();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const PORT=4000;

app.listen(PORT,console.log("server started"))

app.use('/register',AuthRoute)
app.use('/register',AdminRoute)
app.use('/register',CustomerRoute)
app.use('/register',FuelStationRoute)
app.use('/shop',ShopRoute)
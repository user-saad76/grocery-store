import express from 'express'
 const  server = express()
 import 'dotenv/config'
 import freshMilkRoutes from './routes/freshMilk.route.js'
 import bodyParser from 'body-parser'
  import { connectDB } from './config/db.js'
  import cors from 'cors'


 const port =  process.env.PORT || 5000;
 connectDB().catch(error => console.log("Error in connection",error))
 server.use(cors())
server.use(bodyParser.json())
server.use(freshMilkRoutes)



 server.listen(port ,()=>{
    console.log(`Server is running on port ${port}`)
 })
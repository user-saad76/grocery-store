import express from 'express'
 const  server = express()
 import 'dotenv/config'
 import freshMilkRoutes from './routes/freshMilk.route.js'
 import bodyParser from 'body-parser'


 const port =  process.env.PORT || 5000;
server.use(bodyParser.json())
server.use(freshMilkRoutes)



 server.listen(port ,()=>{
    console.log(`Server is running on port ${port}`)
 })
import express from 'express'
import bodyParser from 'body-parser'
import {router as adminRouter} from "./routes/admin.js";
import {router as shopRouter} from "./routes/shop.js";

const app =  express()
app.use(bodyParser.urlencoded({extended:false}))
const port= process.env.PORT || 3000




app.use('/admin',adminRouter)

app.use(shopRouter)


app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>")
}    )

app.listen(port,()=>{

    console.log('http://localhost:3000')


})




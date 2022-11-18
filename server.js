import express, { Router, json } from "express"
const app = express()
const routes = Router()


app.use(json())
const SERVER_PORT =3003

app.route("/")
.get((req,res)=>{
    res.send("Before Main")

})

app.route("/api")
    .get((req,res)=>{
        res.send("Employees Main Page")

    })

   

   


    



app.listen(SERVER_PORT,()=>{
    console.log("http://localhost:3003/")
    console.log("Successfully created the server")
})


const express=require("express")
const app=express()
const port=3001;
const cors=require("cors")
const employee={id:36,name:"sowmya",qualification:"studying"}

const students=require("./data.js")

app.use(cors())
app.get("/",(req,res)=>{
	res.send("server is busy")
})
app.get("/demo",(req,res)=>{
	res.send("this is demo route")
})
app.get("/emp",(req,res)=>{

	res.json(employee)
})
app.get("/studentsLists",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server is running on webpage"))
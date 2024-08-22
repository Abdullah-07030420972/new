
const express = require("express")

const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
  console.log("server active")
})

// FIRST API
const number = ([1, 3, 7, 42, 99, 45,])

app.get("/number", (request, response)=>{
  response.json(number)
})

// SECOND API
const details  = [
  {"name": "Alice", "age": "30", "occupation": "Engineer"},
  {"name": "Bob", "age": "25", "occupation": "Designer"}
]

app.get("/details", (request, response)=>{
  response.json(details)
})

// THIRD API
const language  = ["JavaScript", "Python", "Java", "C++","Ruby"]

app.get("/language", (request, response)=>{
  response.json(language)
})
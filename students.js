import express from "express"
import cors from "cors"
const app = express()
const port = 4001

app.use(cors())
app.use(express.json())

let students = ['bob', 'lily', 'charly', 'samantha']

app.get("/movies/:movieTitle", (req, res) => {
    
    const movieTitle = req.params.movieTitle
    let output = "<html><body><ul>" //start
    //output = output + "hello there thml" //middle
    for (let i=0; i < students.lenght; i++)
    output = output + 
    '<li><input type="checkbox">' +
    students[i] + '</li>' 

    output = output + "</ul></body></html>" //end
    res.send(output)
})

app.listen(port, () => {
    console.log("Localhost:4001")
})
/* CONST, definição de variáveis constantes */
const express = require("express");
const morgan = require("morgan")
const router = express.Router();
const app = express();
const port = 3000
/* APP FUNCTIONS, definição de funções quaisquer */
/* app.use(morgan('min')); Comentei pois essa linha poluí a console */
app.use(express.static("public"))

app.get("/home", (req, res) => {
  res.sendFile('index.html', {root:'public/html'})
})
//dkjengenkgnekmvklem
app.get("/escolas", (req, res) => {
  res.sendFile('info-escola.html', {root:'public/html'})
})

app.get("/login", (req, res) => {
  res.sendFile('login.html', {root:'public/html'})
})

app.get("/visualizar", (req, res) => {
  res.sendFile('visualiz-escolas.html', {root:'public/html'})
})


app.get("/cadastro", (req, res) => {
  res.sendFile('cadastro.html', {root:'public/html'})
})





app.get("/*", (req, res, next) => {
    console.log("Página não encontrada 404")
    res.sendFile('404.html', {root:'public/html'})
  })





/*const userRouter = require("./routes/users")

app.use("/users", userRouter)*/
app.use("/", router)
app.listen(3000)


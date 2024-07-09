/* CONST, definição de variáveis constantes */
const express = require("express");
const morgan = require("morgan")
const router = express.Router();
const app = express();
const port = 3000
/* APP FUNCTIONS, definição de funções quaisquer */
/* app.use(morgan('min')); Comentei pois essa linha poluí a console */
app.use(express.static("public"))

app.get("/*", (req, res, next) => {
    console.log("Página não encontrada 404")
    res.sendFile('404.html', {root:'public/html'})
  })





/*const userRouter = require("./routes/users")

app.use("/users", userRouter)*/
app.use("/", router)
app.listen(3000)


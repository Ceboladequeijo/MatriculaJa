/* CONST, definição de variáveis constantes */
//const express = require("express"); //
//const morgan = require("morgan") //
import express from 'express'; //
import morgan from 'morgan'; //
import { v4 as uuidv4 } from 'uuid'; //
import cors from 'cors'; //
import { dados } from './dados_escolas.js'; //
const router = express.Router();
const app = express();
const port = 3000
/* APP FUNCTIONS, definição de funções quaisquer */
/* app.use(morgan('min')); Comentei pois essa linha poluí a console */
app.use(express.static("public"))

//
app.use(express.json());

app.use(morgan('tiny'));

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
  })
);
//

app.get("/home", (req, res) => {
  res.sendFile('index.html', {root:'public/html'})
})

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

//
app.get('/dados', (req, res) => {
  return res.json(dados);
});

app.post("/dados", (req, res) => {
  const dado = req.body;

  const id = uuidv4();

  const novoDado = { id, ...dado };

  if (dado) {
    dados.push(novoDado);

    res.status(201).json(novoDado);
  } else {
    throw new HTTPError('Unable to create data', 400);
  }
});
//

app.get("/*", (req, res, next) => {
    console.log("Página não encontrada 404")
    res.sendFile('404.html', {root:'public/html'})
  })





/*const userRouter = require("./routes/users")

app.use("/users", userRouter)*/
app.use("/", router)
app.listen(3000)


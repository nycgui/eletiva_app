const express = require("express")
const app = express()

//habilita recepcao de json
app.use(express.json())

app.get("/home", (request, response) => {
  a = "Home Page"
  return response.send(a)
})

app.get("/products", (request, response) => {
  return response.json([
  {
    "id": "1",
    "nome": "Batata Doce",
    "image": "batata.pgn",
    "categoria": "7",
    "descricao": "Batata da boa",
    "status": "1"
  },
  {
    "id": "1",
    "nome": "Batata Doce",
    "image": "batata.pgn",
    "categoria": "7",
    "descricao": "Batata da boa",
    "status": "1"
  }
  ])
})

app.post("/products", (request, response) => {
  const body = request.body
  console.log(body)
  const {nome, image, categoria, descricao, status} = request.body

  min = Math.ceil(0)
  max = Math.floor(99)
  const id = Math.floor(Math.random() * (max - min)) + min

  var objeto = {
    id,
    nome,
    image,
    categoria,
    status,
    descricao
  }
  return response.json(objeto)
})

app.get("/products/index/:id", (request, response) => {
  const id = request.params.id
  response.json(
    [{
      "id": id,
      "nome": "Maca",
      "image": "champson.pgn",
      "categoria": "10",
      "descricao": "Acabou de cair da arvore",
      "status": "21"
    }]
  )
})

app.get("/products/list/", (request, response) => {
  const {name, categId} = request.query

  const id = 1
  const image = "imagemmmm"
  const status = "ativo"
  const descricao = "Descricao descritiva"
  var objeto = {
    id,
    name,
    image,
    categId,
    status,
    descricao
  }
  return response.json(objeto)
})

app.put("/products/:id", (request, response) => {
  const id = request.params.id
  const body = request.body

  const {nome, image, categoria, descricao, status} = request.body

  var objeto = {
    id,
    nome,
    image,
    categoria,
    status,
    descricao
  }

  response.json(objeto)
})

app.delete("/products/:id", (request, response) => {
  const id = request.params.id
  response.json({"message": "Produto excluido com sucesso"})
})

app.listen(3000)
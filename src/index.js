const express = require("express")
const app = express()
const cliente = express()
const vendas = express()

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

const categorias = express()

categorias.get("/nome/:nome", (request, response) => {
  const nome = request.params.nome
  var id = Math.random() * 10
  var descricao = "descricao descritiva"
  response.json({
    nome,
    id,
    descricao
  })
})

categorias.get("/id/:id", (request, response) => {
  var nome = 'Nyc'
  const id = request.params.id
  var descricao = "descricao descritiva"
  response.json({
    nome,
    id,
    descricao
  })
})

categorias.post("/adicionar", (request, response) => {
  const {id, nome, descricao} = request.body
  mensagem = 'Categoria cadastrada com sucesso'
  var objeto = {
    id,
    nome,
    descricao,
    mensagem
  }
  response.json(objeto)
})

categorias.delete("/remover/:id", (request, response) => {
  const id = request.params.id
  response.json({"message": "Categoria removida com sucesso"})
})

cliente.get("/buscar/", (request, response) => {
  const {endereco, cidade, estado} = request.query

  response.json(
    [{
      "id": "123",
      "nome": "Maca",
      "telefone": "1169588565",
      "email": "nyc.gui@gmail.com",
      "senha": "a##@$a",
      "cpf": "548415151",
      "endereco": endereco,
      "cidade": cidade,
      "estado": estado,
      "bairro": "21"
    }]
  )
})

cliente.post("/adicionar", (request, response) => {
  const {id, nome, telefone, email, senha, cpf, endereço, cidade, estado , bairro} = request.body
  mensagem = 'Categoria cadastrada com sucesso'
  var objeto = {
    id,
    nome,
    telefone,
    email,
    senha,
    cpf,
    endereço,
    cidade,
    estado,
    bairro
  }
  response.json(objeto)
})

cliente.delete("/remover/:id", (request, response) => {
  const id = request.params.id
  response.json({"message": "Cliente removido com sucesso"})
})

app.use('/vendas', vendas)
app.use('/cliente', cliente)
app.use('/categorias', categorias)
app.listen(3000)
const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extend: true}))

app.get( '/', (req, res) => {
res.send(`
    <h1>Loja On-line</h1>
    <p>Exemplo prático de HTTPS</p>
    <a href="/cadastro">Ir para cadastro/compra</a>
  `);
});

app.get('/cadastro', (req, res) => {
  res.send(`
  <h1>Finalizar compra</h1>
  <form action"/finalizar" method="POST">
  <label>Nome:</label><br>
  <input type="text" name="nome"><br><br>

  <label>E-mail:</label><br>
  <input type="email" name="email"><br><br>

  <label>Número do cartão (ficticio):</label><br>
  <input type="text" name="cartao"><br><br>

  <label>Endereço:</label><br>
  <input type="text" name="endereço"><br><br>

  <button type="submit">Enviar compra</button>
  </form>
  `);
});

app.post('finalizar', (req, res) => {
  const {nome, email, cartao, endereço} = req.body;

  res.send(`
    <h1>Compra recebida</h1>
    <p><strong>Nome</strong> ${nome}</p>
    <p><strong>E-mail</strong> ${email}</p>
    <p><strong>cartão</strong> ${cartao}</p>
    <p><strong>Endereço</strong> ${endereco}</p>

    <hr>
    <p>Esses dados do navegador para o servidor</p>
    <p>É por isso que o uso de HTTPS é essencial: ele protege a comunicação durante a transmissão.</p>
  `);
})
app.listen(port, () =>{
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require('express');
const user = require('./routes/userRouter');
const btc = require('./routes/btcRouter');
const posts = require('./routes/postsRouter');

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).send('Server ok')
})

app.use('/user', user);
app.use('/btc', btc);
app.use('/posts', posts);

app.listen(3000, () => console.log("Rodando na porta 3000"));
import express from 'express'

const app = express();

app.get('/helloworld', (req, res) => res.send('HelloWorld'))

app.listen(8000, () => { console.log('listening on port 8000')})

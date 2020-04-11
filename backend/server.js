import express from 'express'
import cmd from 'node-cmd'

const app = express();

app.get('/helloworld', (req, res) => {
  cmd.get(
    `
        cd ..
        npm start
        ls
    `,
      function(err, data, stderr){
          if (!err) {
            console.log('the node-cmd cloned dir contains these files :\n\n',data)
          } else {
            console.log('error', err)
          }

      }
  );
  res.send('HelloWorld')
})

app.listen(8000, () => { console.log('listening on port 8000')})

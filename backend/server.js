import express from 'express'
import cmd from 'node-cmd'

const app = express();

app.get('/fritzbox', (req, res) => {
  cmd.get(
    `
        cd ..
        npm start
    `,
      (err, data) => {
          if (!err) {
            data=data.split("\\n").join(' ')
            data=data.split("> node index")
            res.status(200).json({
              'command':data[0],
              'status':data[1]
            })
          } else {
            res.status(500).json({
              'command':data[0],
              'status': '500 -  Internal server error'
            })
          }
      }
  );
})

app.listen(8000, () => { console.log('listening on port 8000')})

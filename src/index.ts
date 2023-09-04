import express from 'express'
const app = express()
import useRouter from './user.routes'
const port = 3000

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.use('/user', useRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

import express from 'express'
import { handler } from '../lambda'

const app = express()
const port = 3000

app.use('/', (req, res, next) => handler(req, res, next))

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

import express from 'express';
import cors from 'cors';
const router = require('./routes/router')

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

export default app

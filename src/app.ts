import express from 'express';
import cors from 'cors';

import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const router = require('./routes/router')
const path = require('path');


const app = express()


const definition = {
  openapi: '3.0.0',
  info: {
    title: 'Valo Agents API',
    version: '1.0.0',
    description: 'Documenting the valorant agent api'
  },
};

const options = {
  definition,
  servers: [{
    url: '<http://localhost:4000>',
    description: 'Local server'
  }],
  apis: ['src/controllers/*/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.json())

app.use(cors())

app.set('views', path.resolve(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(router)

export default app

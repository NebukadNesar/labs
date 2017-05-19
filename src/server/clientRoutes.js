import path from  'path'
import express from 'express'
import clientController from './middleware/clientController'

var app = express()

app.use('/static', express.static(path.join(__dirname, '../public')))
app.get('/', clientController.serveClient);

var clientRoutes = app;
module.exports = clientRoutes;

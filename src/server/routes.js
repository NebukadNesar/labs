import path from  'path'
import express from 'express'
import serverController from "./controllers/serverController"

var app = express()

app.get('/getAllServers', serverController.getAllServers )
app.get('/refresh', serverController.refresh)
app.get('/delete', serverController.delete)
app.get('/getServerInfo/:serverip', serverController.getServerInfo)
app.get('/addBulkServers', serverController.addBulkServers)
app.post('/upload', serverController.upload);

var routes = app;
module.exports = routes;

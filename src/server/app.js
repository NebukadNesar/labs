/**
* @auther:burhanc
* app with expressjs
**/
import express from 'express'
import bodyParser  from 'body-parser'
import routes from './routes'
import clientRoutes  from './clientRoutes'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', routes);
app.use('/client', clientRoutes);

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
})

export default app;

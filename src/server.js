import express, { application, json } from 'express';
import router from './routes/routes'

const app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => res.send('Welcome to API'))

//Middlewares
app.use(json())


//Routes
app.use(router)

export default app;
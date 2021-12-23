import express, { application, json } from 'express';
import routerTweeter from './routes/tweter'
import routerMarketCap from './routes/marketCap'

const app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => res.send('Welcome to API'))

//Middlewares
app.use(json())
const cors=require('cors')
app.use(cors())

//Routes
app.use(routerTweeter)
app.use(routerMarketCap)

export default app;
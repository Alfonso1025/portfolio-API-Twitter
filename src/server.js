import express, { application, json } from 'express';
import routerTweeter from './routes/tweter'
import routerMarketCap from './routes/marketCap'

const app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => res.send('Welcome to API'))

//Middlewares
app.use(json())
const cors=require('cors')

//cors 
const whiteList= ['https://aqueous-bayou-70326.herokuapp.com','http://localhost:3000']
const options={
    origin:(origin, callback)=>{
        if(whiteList.includes(origin)|| !origin){
            callback(null,true)
        }else{
            callback(new Error('not allowed'))
        }
    }
}

app.use(cors(options))
//Routes
app.use(routerTweeter)
app.use(routerMarketCap)

export default app;
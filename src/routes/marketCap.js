import { Router } from "express";
import { getData } from '../controllers/marketCap';


const routerMarketCap= Router()

routerMarketCap.get('/crypto',async(req, res)=>{
    try {
        const response= await getData()
        res.send(response)

        
    } catch (error) {
        console.log(error)
    }
})

export default routerMarketCap;
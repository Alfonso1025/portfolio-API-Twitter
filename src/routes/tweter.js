import { Router } from "express";
import { connect } from '../controllers/tweter';

const routerTweeter = Router();

routerTweeter.get('/tweets/:id', async (req, res) => {
    
    //v2 Twitter
    const tweets = await connect(req.params.id);
    console.log(res)
    res.json(tweets.data.data[0].text);
    console.log(req.params.id)
    
});

routerTweeter.get('/test/:id', (req, res)=>{

    res.send(req.params.id)
}
    );

export default routerTweeter;
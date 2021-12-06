import { Router } from "express";
import { connect } from '../tweter';

const router = Router();

router.get('/tweets/:id', async (req, res) => {
    
    //v2 Twitter
    const tweets = await connect(req.params.id);
    res.json(tweets.data.data[0].text);
    console.log(req.params.id)
    
});

router.get('/test/:id', (req, res)=>{

    res.send(req.params.id)
}
    );

export default router;
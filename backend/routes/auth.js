const express =  require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj = {
        a: 'hello',
        b: 'world'
    }
    res.json(obj)
})

module.exports = router;
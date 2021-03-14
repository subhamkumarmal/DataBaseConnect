const express = require('express');
const app = express();
const router = new express.Router();



require('../conn/connections');
const doc = require('../struct/structure');

// router.get('/',(req,res)=>{
//     res.send('Its get methods');
// });

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/subham',async (req,res)=>{

    try{
        
        const result = new doc(
            {
                Name : req.body.name,
                Sex : req.body.sex,
                Phone : req.body.phone,
                Password : req.body.pass
            }
        )
        
        result.athuentication();

        const saveDoc = await result.save();
        console.log(saveDoc);
        res.end();

    }catch(err){
        console.log(err);
    }
    
    
})

module.exports=router;

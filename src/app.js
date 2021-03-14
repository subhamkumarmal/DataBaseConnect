const express = require('express');
const routers=require('./router/routers');
const app = express();
const port = process.env.PORT || 4004;

const path=require('path');
const publicPath=path.join(__dirname,"../public");
app.use(express.static(publicPath));

app.use(routers);





app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
const http = require('http');
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// evnvioment sathe and cors install
// npm i dotenv cors
server.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
})
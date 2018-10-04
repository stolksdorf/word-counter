const mainRenderer = require('./docs/main/render.js');
const express = require('express');
const server  = express();

server.get('/', (req, res)=>res.send(mainRenderer()));
server.use(express.static(`${__dirname}/docs`));


server.listen(8000, ()=>{
	console.log('_____________________________');
	console.log(`dev server running on port:8000 🚀 `);
});
const express = require('express');
const app = express();
let compteur=0;
console.log("initialise compteur =" + compteur);

app.get('/',  (req, res)=> {
	console.log("augmente compteur  =" + compteur++);
   res.send('<h1>test express</h1>');
})

const server = app.listen(8081,  ()=> {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Le serveur Express écoute http://%s:%s", host, port)
})
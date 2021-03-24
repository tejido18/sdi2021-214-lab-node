//Módulos
let express = require('express');
let app = express();

//variables
app.set('port', 8081);

app.get('/usuarios', function(req, res){
    console.log("depurar aqui");
    res.send('ver usuarios');
});

app.get('/canciones', function(req, res){
    res.send('ver canciones');
});

//Lanzar el servidor
app.listen(app.get('port'), function(){
    console.log('Servidor activo');
});
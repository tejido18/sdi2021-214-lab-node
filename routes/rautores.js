module.exports = function(app, swig) {
    app.get("/autores/agregar", function(req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        respuesta
        res.send(respuesta);
    });

    app.get("/autores", function(req, res) {
        let autores = [ {
            "nombre" : "EL Puma",
            "grupo" : "LosMachos",
            "rol" : "batería"
        }, {
            "nombre" : "Janet",
            "grupo" : "Janet",
            "rol" : "cantante"
        }, {
            "nombre" : "Nova Mejías",
            "grupo" : "P91",
            "rol" : "bajista"
        } ];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Autores',
            autores : autores
        });

        res.send(respuesta);
    });

    app.get("/autores/*", function(req, res){
        res.redirect("/autores");
    })

    app.post("/autor", function(req, res) {
        let nombre = req.body.nombre;
        if(nombre == "undefined")
            nombre = "nombre no enviado en la petición";
        let grupo = req.body.grupo;
        if(grupo == "undefined")
            nombre = "grupo no enviado en la petición";
        let rol = req.body.rol;
        if(rol == "undefined")
            nombre = "rol no enviado en la petición";
        res.send("Autor agregado: " + nombre + "<br>"
            +" grupo: " + grupo + "<br>"
            + " rol: " + rol);
    });
};
module.exports = function(app, swig) {

    app.post("/comentarios/:cancion_id", function(req, res) {
        let criterio = req.body.cancion_id;
        gestorBD.obtenerCcomentarios(criterio, function(cancion_id) {
            if (cancion_id == null) {
                res.send("Error al listar ");
            } else {
                let respuesta = swig.renderFile('views/btienda.html',
                    {
                        canciones : canciones
                    });
                res.send(respuesta);
            }
        });
    });


};
// Iniciar express
const express = require('express');

const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Rutas 

app.get('/hola', (req, res) => {
    console.log("Se envio mensaje");
   // res.send("Hola, primera petición");
   res.json({mensaje: "Hola"});
});

app.get('/otro/adios', (req, res) => {
   // res.send("Hola, primera petición");
   res.json({mensaje: "Nuestra otra ruta"});
});


// Levantar el servidor
app.listen(app.get('port'), (error) => {
    if(error) {
        console.log("Ha ocurrido un error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});


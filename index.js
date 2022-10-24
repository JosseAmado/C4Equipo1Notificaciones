// Librerias
const express = require("express");
const mongoose = require("mongoose");

// Modelos
const User = require("./models/User");

// Otras importaciones
const port = process.env.PORT || 3000;
const router = express.Router();
const app = express();

//Coneccion a DB
mongoose.connect('');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

router.get('/user', (req, res) => {
    User.find(function(err, data){
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });    
});

router.post('/user', (req, res) => {
    const user = new User({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        password: req.body.password
    });

    user.save(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send('Saved successfully ' + user);
        }
    });
});

app.use(router);
app.listen(port,() => {
    console.log('Listening on ' + port);
});
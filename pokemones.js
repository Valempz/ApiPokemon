const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pokemon",{useNewUrlParser:true, useUnifiedTopology:true
})
.then(() => console.log("conexion exitosa de bd"))
.catch(err => console.log("error al conectar bd", err));

const pokemonSchema = new mongoose.Schema(
    {
        nombre: String,
        tipo: String,
        nivel: Number,
    }
);

const pokemon = mongoose.Model("pokemon", pokemonSchema);

const nuevoPokemon = new pokemon({
    nombre: "eevee",
    tipo: "Normal",
    nivel: 32

});

nuevoPokemon.save()
.then(() => console.log("se creo el pokemon"))
.catch(err => console.log("error crear al pokemon", err));

mongoose.disconnect()
const mongoose = require("mongoose");

mongoose.connect("mongodb://Valempz:1234@127.0.0.1:27017/pokemon",{useNewUrlParser:true, useUnifiedTopology:true
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

const pokemon = mongoose.model("pokemones", pokemonSchema);

const nuevoPokemon = new pokemon({
    nombre: "eevee",
    tipo: "Normal",
    nivel: 32,

    nombre: "Charmender",
    tipo: "Fuego",
    nivel: 20


});

nuevoPokemon.save()
.then(() => console.log("se creo el pokemon"))
.catch(err => console.log("error crear al pokemon", err));

const nuevoPokemon2 = new pokemon({
    nombre: "Charmender",
    tipo: "Fuego",
    nivel: 20

});

nuevoPokemon2.save()
.then(() => console.log("se creo el segundo pokemon"))
.catch(err => console.log("error al crear el segundo pokemon", err));

//mongoose.disconnect()
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

const pokemonModel = mongoose.model("pokemones", pokemonSchema);

const nuevoPokemon = new pokemonModel({
    nombre: "Charizard",
    tipo: "Fuego",
    nivel: 25,

});

nuevoPokemon.save()
.then(() => console.log("se creo el pokemon"))
.catch(err => console.log("error crear al pokemon", err));

const nuevoPokemon2 = new pokemonModel({
    nombre: "Charmender",
    tipo: "Fuego",
    nivel: 20

});

nuevoPokemon2.save()
.then(() => console.log("se creo el segundo pokemon"))
.catch(err => console.log("error al crear el segundo pokemon", err));
 
//Leer todo los registros 
pokemonModel.find()
.then(pokemones => console.log("Estos son todos los pokemones: ", pokemones))
.catch(err => console.log("Se produjo un error al leer los pokemones", err));
//mongoose.disconnect()
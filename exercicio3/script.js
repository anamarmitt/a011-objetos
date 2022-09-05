const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

const novoPokemon = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

pokemon1.ataques = [];

pokemon1.ataques.push({
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
});

novoPokemon.ataques = [...pokemon1.ataques];

pokemon1.ataques.push({
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Normal",
  precisao: 100,
});

novoPokemon.ataques.push({
  nome: "Jato de Água",
  dano: 40,
  tipo: "Água",
  precisao: 100,
});

console.log(pokemon1, novoPokemon);

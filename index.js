const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const pizzasConIdDivisible = pizzas.filter(pizza => {
  const resultadoDivision = pizza.id / 2;
  return Number.isInteger(resultadoDivision);
});

const nombresPizzasConIdDivisible = pizzasConIdDivisible.map(pizza => pizza.nombre);

if (nombresPizzasConIdDivisible.length > 0) {
  console.log("Las siguientes pizzas tienen un ID Par:");
  nombresPizzasConIdDivisible.forEach(nombre => {
    console.log(nombre);
  });
} else {
  console.log("Ninguna pizza tiene un ID Par");
}

function hayPizzaMenosDeSeiscientos(pizzas) {
  
  for (let i = 0; i < pizzas.length; i++) {
    
    if (pizzas[i].precio < 600) {
      return console.log("Si Hay una Pizza que vale menos de 600$");
    }
  }
  return false; 
}

const resultado = hayPizzaMenosDeSeiscientos(pizzas);

console.log("Nombre de cada pizza con su precio:");
pizzas.forEach(pizza => console.log(`${pizza.nombre}: $${pizza.precio}`));


console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`Ingredientes de ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
});

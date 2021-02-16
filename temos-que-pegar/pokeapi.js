const printList = (obj) => {
  console.log(obj)
  return {
    id: 25,
    name: "Pikachu",
    type: 'Electric',
    averageWeight: {
        value: 6.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
  }
}


const temosQuePegar = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(obj => printList(obj))
    .catch(error => error)
}

temosQuePegar();
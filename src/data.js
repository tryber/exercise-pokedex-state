const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      type: 'Grass',
      averageWeight: {
          value: "6.9",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/7/76/Spr_5b_001.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)"
    },
    {
        id: 2,
        name: "Ivysaur",
        type: 'Grass',
        averageWeight: {
            value: "13.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/e1/Spr_5b_002.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)"
    },
    {
        id: 3,
        name: "Venusaur",
        type: 'Grass',
        averageWeight: {
            value: "100.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/68/Spr_5b_003_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)"
    },
    {
        id: 4,
        name: "Charmander",
        type: 'Fire',
        averageWeight: {
            value: "8.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
    },
    {
        id: 5,
        name: "Charmeleon",
        type: 'Fire',
        averageWeight: {
            value: "19.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/09/Spr_5b_005.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)"
    },
    {
        id: 6,
        name: "Charizard",
        type: 'Fire',
        averageWeight: {
            value: "90.5 kg",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/e1/Spr_5b_006.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)"
    },
    {
        id: 7,
        name: "Squirtle",
        type: 'Water',
        averageWeight: {
            value: "9.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/59/Spr_5b_007.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
    },
    {
        id: 8,
        name: "Wartortle",
        type: 'Water',
        averageWeight: {
            value: "22.5 kg",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0b/Spr_5b_008.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)"
    },
    {
        id: 9,
        name: "Blastoise",
        type: 'Water',
        averageWeight: {
            value: "85.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/3d/Spr_5b_009.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)"
    },
    {
      id: 10,
      name: "Caterpie",
      type: 'Bug',
      averageWeight: {
          value: "2.9",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
    },
    {
        id: 11,
        name: "Metapod",
        type: 'Bug',
        averageWeight: {
            value: "9.9",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/2b/Spr_5b_011.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)"
    },
    {
        id: 12,
        name: "Butterfree",
        type: 'Bug',
        averageWeight: {
            value: "32.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/7c/Spr_5b_012_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)"
    },
    {
        id: 13,
        name: "Weedle",
        type: 'Bug',
        averageWeight: {
            value: "3.2",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/96/Spr_5b_013.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)"
    },
    {
        id: 14,
        name: "Kakuna",
        type: 'Bug',
        averageWeight: {
            value: "10.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0e/Spr_5b_014.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)"
    },
    {
        id: 15,
        name: "Beedrill",
        type: 'Bug',
        averageWeight: {
            value: "29.5 kg",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/a5/Spr_5b_015.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)"
    },
    {
        id: 16,
        name: "Pidgey",
        type: 'Flying',
        averageWeight: {
            value: "1.8",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/08/Spr_5b_016.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)"
    },
    {
        id: 17,
        name: "Pidgeotto",
        type: 'Flying',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/aa/Spr_5b2_017.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)"
    },
    {
        id: 18,
        name: "Pidgeot",
        type: 'Flying',
        averageWeight: {
            value: "39.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/8a/Spr_5b_018.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)"
    },
    {
        id: 19,
        name: "Rattata",
        type: 'Normal',
        averageWeight: {
            value: "3.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/d5/Spr_5b_019_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)"
    },
    {
        id: 20,
        name: "Raticate",
        type: 'Normal',
        averageWeight: {
            value: "18.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/47/Spr_5b_020_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)"
    },
    {
        id: 21,
        name: "Spearow",
        type: 'Flying',
        averageWeight: {
            value: "2.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/05/Spr_5b_021.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)"
    },
    {
        id: 22,
        name: "Fearow",
        type: 'Flying',
        averageWeight: {
            value: "38.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/29/Spr_5b_022.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)"
    },
    {
      id: 23,
      name: "Ekans",
      type: 'Poison',
      averageWeight: {
          value: "6.9",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
    },
    {
        id: 24,
        name: "Arbok",
        type: 'Poison',
        averageWeight: {
            value: "65.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/00/Spr_5b2_024.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)"
    },
    {
        ids: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: "6.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    },
    {
        id: 26,
        name: "Raichu",
        type: 'Electric',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/98/Spr_5b2_026_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)"
    },
    {
        id: 27,
        name: "Sandshrew",
        type: 'Ground',
        averageWeight: {
            value: "12.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/17/Spr_5b_027.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)"
    },
    {
        id: 28,
        name: "Sandslash",
        type: 'Ground',
        averageWeight: {
            value: "29.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b8/Spr_5b_028.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)"
    },
    {
        id: 29,
        name: "Nidoran",
        type: 'Poison',
        averageWeight: {
            value: "7.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/a2/Spr_5b_029.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidoran_(Pok%C3%A9mon)"
    },
    {
        id: 30,
        name: "Nidorina",
        type: 'Poison',
        averageWeight: {
            value: "20.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/a8/Spr_5b_030.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pok%C3%A9mon)"
    },
    {
        id: 31,
        name: "Nidoqueen",
        type: 'Poison',
        averageWeight: {
            value: "60.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/57/Spr_5b2_031.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pok%C3%A9mon)"
    },
    {
        id: 32,
        name: "Nidoran",
        type: 'Poison',
        averageWeight: {
            value: "9.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/5d/Spr_5b_032.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidoran_(Pok%C3%A9mon)"
    },
    {
        id: 35,
        name: "Nidorino",
        type: 'Poison',
        averageWeight: {
            value: "19.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/16/Spr_5b_033.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pok%C3%A9mon)"
    },
    {
        id: 36,
        name: "Nidoking",
        type: 'Poison',
        averageWeight: {
            value: "62.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/46/Spr_5b_034.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)"
    },
    {
        id: 37,
        name: "Clefairy",
        type: 'Fairy',
        averageWeight: {
            value: "7.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/76/Spr_5b_035.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)"
    },
    {
        id: 38,
        name: "Clefable",
        type: 'Fairy',
        averageWeight: {
            value: "40.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/d4/Spr_5b_036.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pok%C3%A9mon)"
    },
    {
        id: 39,
        name: "Vulpix",
        type: 'Fire',
        averageWeight: {
            value: "9.9",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/ec/Spr_5b_037.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)"
    },
    {
        id: 40,
        name: "Ninetales",
        type: 'Fire',
        averageWeight: {
            value: "19.9",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/6f/Spr_5b_038.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)"
    },
    {
        id: 41,
        name: "Jigglypuff",
        type: 'Normal',
        averageWeight: {
            value: "5.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/bd/Spr_5b_039.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)"
    },
    {
        id: 42,
        name: "Wigglytuff",
        type: 'Normal',
        averageWeight: {
            value: "12.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/9c/Spr_5b_040.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pok%C3%A9mon)"
    },
    {
        id: 43,
        name: "Zubat",
        type: 'Poison',
        averageWeight: {
            value: "7.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/01/Spr_5b_041_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pok%C3%A9mon)"
    },
    {
        id: 44,
        name: "Golbat",
        type: 'Poison',
        averageWeight: {
            value: "55.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/5e/Spr_5b_042_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pok%C3%A9mon)"
    },
    {
        id: 45,
        name: "Oddish",
        type: 'Grass',
        averageWeight: {
            value: "5.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/1a/Spr_5b_043.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)"
    },
    {
        id: 46,
        name: "Gloom",
        type: 'Grass',
        averageWeight: {
            value: "8.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/ea/Spr_5b_044_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pok%C3%A9mon)"
    },
    {
        id: 47,
        name: "Vileplume",
        type: 'Grass',
        averageWeight: {
            value: "18.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/1e/Spr_5b_045_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)"
    },
    {
        id: 48,
        name: "Paras",
        type: 'Bug',
        averageWeight: {
            value: "5.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/c/c6/Spr_5b2_046.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Paras_(Pok%C3%A9mon)"
    },
    {
        id: 49,
        name: "Parasect",
        type: 'Bug',
        averageWeight: {
            value: "29.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/90/Spr_5b_047.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pok%C3%A9mon)"
    },
    {
        id: 50,
        name: "Venonat",
        type: 'Bug',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/39/Spr_5b_048.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Venonat_(Pok%C3%A9mon)"
    },
    {
      id: 65,
      name: "Alakazam",
      type: 'Psychic',
      averageWeight: {
          value: "48.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
    },
    {
      id: 78,
      name: "Rapidash",
      type: 'Fire',
      averageWeight: {
          value: "95.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
    },
    {
        id: 143,
      name: "Snorlax",
      type: 'Normal',
      averageWeight: {
          value: "460.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
    },
    {
      id: 148,
      name: "Dragonair",
      type: 'Dragon',
      averageWeight: {
          value: "16.5",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
     },
    {
        id: 151,
        name: "Mew",
        type: 'Psychic',
        averageWeight: {
            value: "4.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
    },
];

export default pokemons;

// {
//     id: ,
//     name: "",
//     type: '',
//     averageWeight: {
//         value: "",
//         measurementUnit: "kg"
//     },
//     image: "",
//     moreInfo: "https://bulbapedia.bulbagarden.net/wiki/NOME_(Pok%C3%A9mon)"
// },
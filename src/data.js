const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: 'Grass,	Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 0.70,
      unit: "m"
    },
    averageWeight: {
      value: 6.9,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/76/Spr_5b_001.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 2,
    name: "Ivysaur",
    type: 'Grass,	Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 1,
      unit: "m"
    },
    averageWeight: {
      value: 13.0,
      measurementUnit: "kg"
    },
    image: 'https:\/\/cdn.bulbagarden.net/upload/e/e1/Spr_5b_002.png', 
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 3,
    name: "Venusaur",
    type: 'Grass,	Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 2.0,
      unit: "m"
    },
    averageWeight: {
      value: 100,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/68/Spr_5b_003_m.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 4,
    name: "Charmander",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
      value: 8.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 5,
    name: "Charmeleon",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
      value: 19,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/09/Spr_5b_005.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 6,
    name: "Charizard",
    type: 'Fire, Flying',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.7,
      unit: "m"
    },
    averageWeight: {
      value: 90.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/e1/Spr_5b_006.png",
    topImage: 'https:\/\/cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/600px-006Charizard.png',
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 7,
    name: "Squirtle",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
      value: 9,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/59/Spr_5b_007.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 8,
    name: "Wartortle",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1,
      unit: "m"
    },
    averageWeight: {
      value: 22.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/0b/Spr_5b_008.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 9,
    name: "Blastoise",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 85.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/3d/Spr_5b_009.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
    id: 10,
    name: "Caterpie",
    type: 'Bug',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
        value: 2.9,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/83/Spr_5b_010.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 11,
    name: "Metapod",
    type: 'Bug',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 0.7,
      unit: "m"
    },
    averageWeight: {
        value: 9.9,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/2b/Spr_5b_011.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 12,
    name: "Butterfree",
    type: 'Bug, Flying',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
        value: 32.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/7c/Spr_5b_012_m.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 13,
    name: "Weedle",
    type: 'Bug, Poison',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
        value: 3.2,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/96/Spr_5b_013.png",
  },
  {
    id: 14,
    name: "Kakuna",
    type: 'Bug Poison',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
        value: 10,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/0e/Spr_5b_014.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 15,
    name: "Beedrill",
    type: 'Bug, Poison',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 29.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/a5/Spr_5b_015.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 16,
    name: "Pidgey",
    type: 'Normal, Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
        value: 1.8,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/08/Spr_5b_016.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: 'Normal, Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
        value: 30,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/aa/Spr_5b2_017.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 18,
    name: "Pidgeot",
    type: 'Normal, Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
        value: 39.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/8a/Spr_5b_018.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 19,
    name: "Rattata",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
        value: 3.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/d5/Spr_5b_019_m.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 20,
    name: "Raticate",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.7,
      unit: "m"
    },
    averageWeight: {
        value: 18.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/4e/Spr_5b_020_m_s.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 21,
    name: "Spearow",
    type: 'Normal, Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
        value: 2.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/05/Spr_5b_021.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 22,
    name: "Fearow",
    type: 'Normal, Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
        value: 38.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/29/Spr_5b_022.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 23,
    name: "Ekans",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 2.0,
      unit: "m"
    },
    averageWeight: {
        value: 6.9,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/18/Spr_5b_023.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 24,
    name: "Arbok",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 3.5,
      unit: "m"
    },
    averageWeight: {
        value: 65,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/00/Spr_5b_024.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
    id: 25,
    name: "Pikachu",
    type: 'Electric',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
        value: 6.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
    id: 26,
    name: "Raichu",
    type: 'Electric',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
        value: 12,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/f/f9/Spr_5b_026_f_s.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
    id: 27,
    name: "Sandshrew",
    type: 'Ground',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
        value: 30,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/17/Spr_5b_027.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
    id: 28,
    name: "Sandslash",
    type: 'Ground',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 29.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b8/Spr_5b_028.png",
  },
  {
    id: 29,
    name: "Nidoran",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
        value: 7,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/a2/Spr_5b_029.png",
  },
  {
    id: 30,
    name: "Nidorina",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
        value: 20,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/a8/Spr_5b_030.png",
  },
  {
    id: 31,
    name: "Nidoqueen",
    type: 'Poison Ground',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
        value: 60,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/43/Spr_5b_031.png",
  },
  {
    id: 32,
    name: "Nidoran",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
        value: 9,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/5d/Spr_5b_032.png",
  },
  {
    id: 33,
    name: "Nidorino",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.9,
      unit: "m"
    },
    averageWeight: {
        value: 19.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/16/Spr_5b_033.png",
  },
  {
    id: 34,
    name: "Nidoking",
    type: 'Poison Ground',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 1.4,
      unit: "m"
    },
    averageWeight: {
        value: 62.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/46/Spr_5b_034.png",
  },
  {
    id: 35,
    name: "Clefairy",
    type: 'Fairy',
    color: 'rgb(235, 168, 195)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
        value: 62.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/76/Spr_5b_035.png",
  },
  {
    id: 36,
    name: "Clefable",
    type: 'Fairy',
    color: 'rgb(235, 168, 195)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
        value: 40,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/d4/Spr_5b_036.png",
  },
  {
    id: 37,
    name: "Vulpix",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
        value: 9.9,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/ec/Spr_5b_037.png",
  },
  {
    id: 38,
    name: "Ninetales",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
        value: 19.9,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/6f/Spr_5b_038.png",
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: 'Normal Fairy',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
        value: 5.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b1/Spr_5b_039_s.png",
  },
  {
    id: 40,
    name: "Wigglytuff",
    type: 'Normal Fairy',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 12,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/9c/Spr_5b_040.png",
  },
  {
    id: 41,
    name: "Zubat",
    type: 'Poison	Flying',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
        value: 7.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/01/Spr_5b_041_m.png",
  },
  {
    id: 42,
    name: "Golbat",
    type: 'Poison	Flying',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
        value: 55,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/5e/Spr_5b_042_m.png",
  },
  {
    id: 43,
    name: "Oddish",
    type: 'Grass Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
        value: 5.4,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/1a/Spr_5b_043.png",
  },
  {
    id: 44,
    name: "Gloom",
    type: 'Grass Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
        value: 8.6,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/96/Spr_5b_044_f.png",
  },
  {
    id: 45,
    name: "Vileplume",
    type: 'Grass Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
        value: 18.6,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/31/Spr_5b_045_f.png",
  },
  {
    id: 46,
    name: "Paras",
    type: 'Bug Grass',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
        value: 5.4,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/c/c6/Spr_5b2_046.png",
  },
  {
    id: 47,
    name: "Parasect",
    type: 'Bug Grass',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 29.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/90/Spr_5b_047.png",
  },
  {
    id: 48,
    name: "Venonat",
    type: 'Bug Poison',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 30,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/39/Spr_5b_048.png",
  },
  {
    id: 49,
    name: "Venomoth",
    type: 'Bug Poison',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
        value: 12.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/33/Spr_5b_049.png",
  },
  {
    id: 50,
    name: "Diglett",
    type: 'Ground',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 0.2,
      unit: "m"
    },
    averageWeight: {
        value: 0.8,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/7b/Spr_5b_050.png",
  },
  {
    id: 51,
    name: "Dugtrio",
    type: 'Ground',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 0.7,
      unit: "m"
    },
    averageWeight: {
        value: 33.3,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/66/Spr_5b_051.png",
  },
  {
    id: 52,
    name: "Meowth",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
        value: 4.2,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/93/Spr_5b_052.png",
  },
  {
    id: 53,
    name: "Persian",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 32,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/9b/Spr_5b2_053.png",
  },
  {
    id: 54,
    name: "Psyduck",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
        value: 19.6,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/46/Spr_5b2_054.png",
  },
  {
    id: 55,
    name: "Golduck",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.7,
      unit: "m"
    },
    averageWeight: {
        value: 76.6,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/d2/Spr_5b_055_s.png",
  },
  {
    id: 56,
    name: "Mankey",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
        value: 28,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/9f/Spr_5b_056.png",
  },
  {
    id: 57,
    name: "Primeape",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 32,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/07/Spr_5b2_057.png",
  },
  {
    id: 58,
    name: "Growlithe",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 0.7,
      unit: "m"
    },
    averageWeight: {
        value: 155,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/3f/Spr_5b_058.png",
  },
  {
    id: 59,
    name: "Arcanine",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.9,
      unit: "m"
    },
    averageWeight: {
        value: 155,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/c/c5/Spr_5b2_059.png",
  },
  {
    id: 60,
    name: "Poliwag",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
        value: 12.4,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/94/Spr_5b_060.png",
  },
  {
    id: 61,
    name: "Poliwhirl",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
        value: 20,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/62/Spr_5b_061.png",
  },
  {
    id: 62,
    name: "Poliwrath",
    type: 'Water Fithing',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
        value: 54,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/57/Spr_5b_062.png",
  },
  {
    id: 63,
    name: "Abra",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 0.9,
      unit: "m"
    },
    averageWeight: {
        value: 19.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/14/Spr_5b_063.png",
  },
  {
    id: 64,
    name: "Kadabra",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
        value: 56.5,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/54/Spr_5b_064_m.png",
  },
  {
    id: 65,
    name: "Alakazam",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 48.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
  },
  {
    id: 66,
    name: "Machop",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
      value: 19.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/ef/Spr_5b_066.png",
  },
  {
    id: 67,
    name: "Machoke",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 70.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/7f/Spr_5b_067.png",
  },
  {
    id: 68,
    name: "Machamp",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 130,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/4c/Spr_5b_068.png",
  },
  {
    id: 69,
    name: "Bellsprout",
    type: 'Grass Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 0.7,
      unit: "m"
    },
    averageWeight: {
      value: 4,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/03/Spr_5b_069.png",
  },
  {
    id: 70,
    name: "Weepinbell",
    type: 'Grass Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 6.4,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/ed/Spr_5b2_070.png",
  },
  {
    id: 71,
    name: "Victreebel",
    type: 'Grass Poison',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 1.7,
      unit: "m"
    },
    averageWeight: {
      value: 15.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/55/Spr_5b_071.png",
  },
  {
    id: 72,
    name: "Tentacool",
    type: 'Water Poison',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.9,
      unit: "m"
    },
    averageWeight: {
      value: 45.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/0c/Spr_5b_072.png",
  },
  {
    id: 73,
    name: "Tentacruel",
    type: 'Water Poison',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 55,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/98/Spr_5b_073.png",
  },
  {
    id: 74,
    name: "Geodude",
    type: 'Rock Ground',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
      value: 20,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/90/Spr_5b_074.png",
  },
  {
    id: 75,
    name: "Graveler",
    type: 'Rock Ground',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 105,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/3a/Spr_5b_075.png",
  },
  {
    id: 76,
    name: "Golem",
    type: 'Rock Ground',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 1.4,
      unit: "m"
    },
    averageWeight: {
      value: 316,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/31/Spr_5b_076.png",
  },
  {
    id: 77,
    name: "Ponyta",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 30,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/bf/Spr_5b_077.png",
  },
  {
    id: 78,
    name: "Rapidash",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.7,
      unit: "m"
    },
    averageWeight: {
        value: 95.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/58/Spr_5b_078.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  },
  {
    id: 79,
    name: "Slowpoke",
    type: 'Water Psychic',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
      value: 36,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/1f/Spr_5b_079.png",
  },
  {
    id: 80,
    name: "Slowbro",
    type: 'Water Psychic',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 78.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/e1/Spr_5b2_080.png",
  },
  {
    id: 81,
    name: "Magnemite",
    type: 'Electric Steel',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
      value: 6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_081.png",
  },
  {
    id: 82,
    name: "Magneton",
    type: 'Electric Steel',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 60,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/45/Spr_5b_082.png",
  },
  {
    id: 83,
    name: "Farfetch'd",
    type: 'Normal Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
      value: 60,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/aa/Spr_5b_083.png",
  },
  {
    id: 84,
    name: "Doduo",
    type: 'Normal Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.4,
      unit: "m"
    },
    averageWeight: {
      value: 39.2,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/2b/Spr_5b_084_m.png",
  },
  {
    id: 85,
    name: "Dodrio",
    type: 'Normal Flying',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.8,
      unit: "m"
    },
    averageWeight: {
      value: 85.2,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/19/Spr_5b_085_m.png",
  },
  {
    id: 86,
    name: "Seel",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
      value: 90,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/27/Spr_5b_086.png",
  },
  {
    id: 87,
    name: "Dewgong",
    type: 'Water Ice',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.7,
      unit: "m"
    },
    averageWeight: {
      value: 120.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/ad/Spr_5b_087.png",
  },
  {
    id: 88,
    name: "Grimer",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.9,
      unit: "m"
    },
    averageWeight: {
      value: 30.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/6e/Spr_5b_088.png",
  },
  {
    id: 89,
    name: "Muk",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
      value: 30.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/80/Spr_5b_089.png",
  },
  {
    id: 90,
    name: "Shellder",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
      value: 4.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/66/Spr_5b_090.png",
  },
  {
    id: 91,
    name: "Cloyster",
    type: 'Water Ice',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 132.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/f/f1/Spr_5b_091.png",
  },
  {
    id: 92,
    name: "Gastly",
    type: 'Ghost Poison',
    color: 'rgb(112, 88, 152)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
      value: 0.1,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/f/f3/Spr_5b_092.png",
  },
  {
    id: 93,
    name: "Haunter",
    type: 'Ghost Poison',
    color: 'rgb(112, 88, 152)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 0.1,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/12/Spr_5b2_093_s.png",
  },
  {
    id: 94,
    name: "Gengar",
    type: 'Ghost Poison',
    color: 'rgb(112, 88, 152)',
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 0.1,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/21/Spr_5b_094.png",
  },
  {
    id: 95,
    name: "Onix",
    type: 'Rock Ground',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 8.8,
      unit: "m"
    },
    averageWeight: {
      value: 210.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/29/Spr_5b_095.png",
  },
  {
    id: 96,
    name: "Drowzee",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 1,
      unit: "m"
    },
    averageWeight: {
      value: 32.4,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_096.png",
  },
  {
    id: 97,
    name: "Hypno",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 75.6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/c/cb/Spr_5b_097_m.png",
  },
  {
    id: 98,
    name: "Krabby",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
      value: 6.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/69/Spr_5b_098.png",
  },
  {
    id: 99,
    name: "Kingler",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
      value: 60,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/e7/Spr_5b_099.png",
  },
  {
    id: 100,
    name: "Voltorb",
    type: 'Electric',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
      value: 10.4,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/8a/Spr_5b_100.png",
  },
  {
    id: 101,
    name: "Electrode",
    type: 'Electric',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
      value: 66.6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/53/Spr_5b_101.png",
  },
  {
    id: 102,
    name: "Exeggcute",
    type: 'Grass Psychic',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
      value: 2.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/8f/Spr_5b_102.png",
  },
  {
    id: 103,
    name: "Exeggutor",
    type: 'Grass Psychic',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 2.0,
      unit: "m"
    },
    averageWeight: {
      value: 60,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/19/Spr_5b_103.png",
  },
  {
    id: 104,
    name: "Cubone",
    type: 'Ground',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
      value: 6.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/a0/Spr_5b_104.png",
  },
  {
    id: 105,
    name: "Marowak",
    type: 'Ground',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 45.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/f/f4/Spr_5b_105.png",
  },
  {
    id: 106,
    name: "Hitmonlee",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 49.8,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/99/Spr_5b_106.png",
  },
  {
    id: 107,
    name: "Hitmonchan",
    type: 'Fighting',
    color: 'rgb(192, 48, 40)',
    averageHeight: {
      height: 1.4,
      unit: "m"
    },
    averageWeight: {
      value: 50.2,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/45/Spr_5b_107.png",
  },
  {
    id: 108,
    name: "Lickitung",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
      value: 65.6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/22/Spr_5b_108.png",
  },
  {
    id: 109,
    name: "Koffing",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
      value: 1.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/ba/Spr_5b_109.png",
  },
  {
    id: 110,
    name: "Weezing",
    type: 'Poison',
    color: 'rgb(159, 110, 151)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
      value: 9.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/ec/Spr_5b_110.png",
  },
  {
    id: 111,
    name: "Rhyhorn",
    type: 'Ground Rock',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 115.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/61/Spr_5b_111_m.png",
  },
  {
    id: 112,
    name: "Rhydon",
    type: 'Ground Rock',
    color: 'rgb(247, 133, 81)',
    averageHeight: {
      height: 1.9,
      unit: "m"
    },
    averageWeight: {
      value: 120,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/d4/Spr_5b_112_m.png",
  },
  {
    id: 113,
    name: "Chansey",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
      value: 34.6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/de/Spr_5b_113.png",
  },
  {
    id: 114,
    name: "Tangela",
    type: 'Grass',
    color: 'rgb(139, 190, 138)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 35.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/aa/Spr_5b_114.png",
  },
  {
    id: 115,
    name: "Kangaskhan",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 2.2,
      unit: "m"
    },
    averageWeight: {
      value: 80.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/d5/Spr_5b_115.png",
  },
  {
    id: 116,
    name: "Horsea",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
      value: 8.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/2d/Spr_5b_116.png",
  },
  {
    id: 117,
    name: "Seadra",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.2,
      unit: "m"
    },
    averageWeight: {
      value: 25.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/df/Spr_b_5b_117.png",
  },
  {
    id: 118,
    name: "Goldeen",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.6,
      unit: "m"
    },
    averageWeight: {
      value: 15.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/65/Spr_5b2_118_m.png",
  },
  {
    id: 119,
    name: "Seaking",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
      value: 39.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/f/f0/Spr_5b_119_m.png",
  },
  {
    id: 120,
    name: "Staryu",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
      value: 34.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/db/Spr_5b_120.png",
  },
  {
    id: 121,
    name: "Starmie",
    type: 'Water Psychic',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
      value: 80.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/85/Spr_5b_121.png",
  },
  {
    id: 122,
    name: "Mr. Mime",
    type: 'Psychic Fairy',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
      value: 54.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/9c/Spr_5b_122.png",
  },
  {
    id: 123,
    name: "Scyther",
    type: 'Bug Flying',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 56.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/2c/Spr_5b_123_m.png",
  },
  {
    id: 124,
    name: "Jynx",
    type: 'Ice Psychic',
    color: 'rgb(152, 216, 216)',
    averageHeight: {
      height: 1.4,
      unit: "m"
    },
    averageWeight: {
      value: 40.6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/0e/Spr_5b_124.png",
  },
  {
    id: 125,
    name: "Electabuzz",
    type: 'Electric',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 1.1,
      unit: "m"
    },
    averageWeight: {
      value: 30.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/79/Spr_5b_125.png",
  },
  {
    id: 126,
    name: "Magmar",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
      value: 44.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/a/a9/Spr_5b_126.png",
  },
  {
    id: 127,
    name: "Pinsir",
    type: 'Bug',
    color: "rgb(139, 214, 116)",
    averageHeight: {
      height: 1.5,
      unit: "m"
    },
    averageWeight: {
      value: 55.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/b/b1/Spr_5b_127.png",
  },
  {
    id: 128,
    name: "Tauros",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 1.4,
      unit: "m"
    },
    averageWeight: {
      value: 88.4,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/80/Spr_5b_128.png",
  },
  {
    id: 129,
    name: "Magikarp",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 0.9,
      unit: "m"
    },
    averageWeight: {
      value: 10.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/24/Spr_5b_129_m.png",
  },
  {
    id: 130,
    name: "Gyarados",
    type: 'Water Flying',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 6.5,
      unit: "m"
    },
    averageWeight: {
      value: 235.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/e/e3/Spr_5b_130_m.png",
  },
  {
    id: 131,
    name: "Lapras",
    type: 'Water Ice',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 2.5,
      unit: "m"
    },
    averageWeight: {
      value: 220,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/6/62/Spr_5b_131.png",
  },
  {
    id: 132,
    name: "Ditto",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
      value: 4.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/5/5f/Spr_5b_132.png",
  },
  {
    id: 133,
    name: "Eevee",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.3,
      unit: "m"
    },
    averageWeight: {
      value: 6.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/d1/Spr_5b2_133.png",
  },
  {
    id: 134,
    name: "Vaporeon",
    type: 'Water',
    color: 'rgb(88, 171, 246)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 29.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/3b/Spr_5b_134.png",
  },
  {
    id: 135,
    name: "Jolteon",
    type: 'Electric',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
      value: 24.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/c/c1/Spr_5b_135.png",
  },
  {
    id: 136,
    name: "Flareon",
    type: 'Fire',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 0.9,
      unit: "m"
    },
    averageWeight: {
      value: 25,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/3b/Spr_5b_136.png",
  },
  {
    id: 137,
    name: "Porygon",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 0.8,
      unit: "m"
    },
    averageWeight: {
      value: 36.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/07/Spr_5b_137.png",
  },
  {
    id: 138,
    name: "Omanyte",
    type: 'Rock Water',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
      value: 7.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/1/15/Spr_5b_138.png",
  },
  {
    id: 139,
    name: "Omastar",
    type: 'Rock Water',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 1.0,
      unit: "m"
    },
    averageWeight: {
      value: 35.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/f/fc/Spr_5b_139.png",
  },
  {
    id: 140,
    name: "Kabuto",
    type: 'Rock Water',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 0.5,
      unit: "m"
    },
    averageWeight: {
      value: 11.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/d/db/Spr_5b_140.png",
  },
  {
    id: 141,
    name: "Kabutops",
    type: 'Rock Water',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 1.3,
      unit: "m"
    },
    averageWeight: {
      value: 40.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/c/cf/Spr_5b_141.png",
  },
  {
    id: 142,
    name: "Aerodactyl",
    type: 'Rock Flying',
    color: 'rgb(184, 160, 56)',
    averageHeight: {
      height: 1.8,
      unit: "m"
    },
    averageWeight: {
      value: 59.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/0/00/Spr_5b_142.png",
  },
  {
    id: 143,
    name: "Snorlax",
    type: 'Normal',
    color: 'rgb(181, 185, 196)',
    averageHeight: {
      height: 2.1,
      unit: "m"
    },
    averageWeight: {
      value: 460.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/40/Spr_5b_143.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
  },
  {
    id: 144,
    name: "Articuno",
    type: 'Ice Flying',
    color: 'rgb(152, 216, 216)',
    averageHeight: {
      height: 1.7,
      unit: "m"
    },
    averageWeight: {
      value: 55.4,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/7b/Spr_5b_144.png",
  },
  {
    id: 145,
    name: "Zapdos",
    type: 'Electric Flying',
    color: 'rgb(242, 203, 85)',
    averageHeight: {
      height: 1.6,
      unit: "m"
    },
    averageWeight: {
      value: 52.6,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/8/8a/Spr_5b_145.png",
  },
  {
    id: 146,
    name: "Moltres",
    type: 'Fire flying',
    color: 'rgb(255, 167, 86)',
    averageHeight: {
      height: 2.0,
      unit: "m"
    },
    averageWeight: {
      value: 60,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/3f/Spr_4h_146.png",
  },
  {
    id: 147,
    name: "Dratini",
    type: 'Dragon',
    color: 'rgb(112, 56, 248)',
    averageHeight: {
      height: 1.8,
      unit: "m"
    },
    averageWeight: {
      value: 3.3,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/3/36/Spr_5b_147.png",
  },
  {
    id: 148,
    name: "Dragonair",
    type: 'Dragon',
    color: 'rgb(112, 56, 248)',
    averageHeight: {
      height: 4.0,
      unit: "m"
    },
    averageWeight: {
      value: 16.5,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  },
  {
    id: 149,
    name: "Dragonite",
    type: 'Dragon Flying',
    color: 'rgb(112, 56, 248)',
    averageHeight: {
      height: 2.2,
      unit: "m"
    },
    averageWeight: {
      value: 210.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/9/96/Spr_5b_149.png",
  },
  {
    id: 150,
    name: "Mewtwo",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 2.0,
      unit: "m"
    },
    averageWeight: {
      value: 122.0,
      measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/7/73/Spr_5b_150.png",
  },
  {
    id: 151,
    name: "Mew",
    type: 'Psychic',
    color: 'rgb(248, 88, 136)',
    averageHeight: {
      height: 0.4,
      unit: "m"
    },
    averageWeight: {
        value: 4.0,
        measurementUnit: "kg"
    },
    image: "https:\/\/cdn.bulbagarden.net/upload/4/43/Spr_5b_151.png",
    moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
  }
];

export default pokemons;

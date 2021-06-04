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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
        id: 41,
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
        id: 42,
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
        id: 43,
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
        id: 44,
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
        id: 45,
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
        id: 46,
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
        id: 47,
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
        id: 48,
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
        id: 49,
        name: "Venomoth",
        type: 'Bug',
        averageWeight: {
            value: "12.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/33/Spr_5b_049.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)"
    },
    {
        id: 50,
        name: "Diglett",
        type: 'Ground',
        averageWeight: {
            value: "0.8",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/7b/Spr_5b_050.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)"
    },
    {
        id: 51,
        name: "Dugtrio",
        type: 'Ground',
        averageWeight: {
            value: "33.3",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/66/Spr_5b_051.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)"
    },
    {
        id: 52,
        name: "Meowth",
        type: 'Normal',
        averageWeight: {
            value: "4.2",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/93/Spr_5b_052.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)"
    },
    {
        id: 53,
        name: "Persian",
        type: 'Normal',
        averageWeight: {
            value: "32.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/9b/Spr_5b2_053.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)"
    },
    {
        id: 54,
        name: "Psyduck",
        type: 'Water',
        averageWeight: {
            value: "19.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/46/Spr_5b2_054.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)"
    },
    {
        id: 55,
        name: "Golduck",
        type: 'Water',
        averageWeight: {
            value: "76.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/97/Spr_5b_055.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pok%C3%A9mon)"
    },
    {
        id: 56,
        name: "Mankey",
        type: 'Fighting',
        averageWeight: {
            value: "28.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/9f/Spr_5b_056.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)"
    },
    {
        id: 57,
        name: "Primeape",
        type: 'Fighting',
        averageWeight: {
            value: "32.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/07/Spr_5b2_057.png",
        moreInfo: `https://bulbapedia.bulbagarden.net/wiki/$Primeape_(Pok%C3%A9mon)`
    },
    {
        id: 58,
        name: "Growlithe",
        type: 'Fire',
        averageWeight: {
            value: "19.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/3f/Spr_5b_058.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)"
    },
    {
        id: 59,
        name: "Arcanine",
        type: 'Fire',
        averageWeight: {
            value: "155.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/c/c5/Spr_5b2_059.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)"
    },
    {
        id: 60,
        name: "Poliwag",
        type: 'Water',
        averageWeight: {
            value: "12.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/94/Spr_5b_060.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)"
    },
    {
        id: 61,
        name: "Poliwhirl",
        type: 'Water',
        averageWeight: {
            value: "20.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/62/Spr_5b_061.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pok%C3%A9mon)"
    },
    {
        id: 62,
        name: "Poliwrath",
        type: 'Water',
        averageWeight: {
            value: "54.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/57/Spr_5b_062.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pok%C3%A9mon)"
    },
    {
        id: 63,
        name: "Abra",
        type: 'Psychic',
        averageWeight: {
            value: "19.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/14/Spr_5b_063.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Abra_(Pok%C3%A9mon)"
    },
    {
        id: 64,
        name: "Kadabra",
        type: 'Psychic',
        averageWeight: {
            value: "56.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/54/Spr_5b_064_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pok%C3%A9mon)"
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
        id: 66,
        name: "Machop",
        type: 'Fighting',
        averageWeight: {
            value: "19.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/ef/Spr_5b_066.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Machop_(Pok%C3%A9mon)"
    },
    {
        id: 67,
        name: "Machoke",
        type: 'Fighting',
        averageWeight: {
            value: "70.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/7f/Spr_5b_067.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pok%C3%A9mon)"
    },
    {
        id: 68,
        name: "Machamp",
        type: 'Fighting',
        averageWeight: {
            value: "130.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/4c/Spr_5b_068.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pok%C3%A9mon)"
    },
    {
        id: 69,
        name: "Bellsprout",
        type: 'Grass',
        averageWeight: {
            value: "4.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/03/Spr_5b_069.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pok%C3%A9mon)"
    },
    {
        id: 70,
        name: "Weepinbell",
        type: 'Grass',
        averageWeight: {
            value: "6.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/ed/Spr_5b2_070.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pok%C3%A9mon)"
    },
    {
        id: 71,
        name: "Victreebel",
        type: 'Grass',
        averageWeight: {
            value: "15.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/55/Spr_5b_071.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pok%C3%A9mon)"
    },
    {
        id: 72,
        name: "Tentacool",
        type: 'Water',
        averageWeight: {
            value: "45.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0c/Spr_5b_072.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pok%C3%A9mon)"
    },
    {
        id: 73,
        name: "Tentacruel",
        type: 'Water',
        averageWeight: {
            value: "55.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/98/Spr_5b_073.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pok%C3%A9mon)"
    },
    {
        id: 74,
        name: "Geodude",
        type: 'Rock',
        averageWeight: {
            value: "20.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/90/Spr_5b_074.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)"
    },
    {
        id: 75,
        name: "Graveler",
        type: 'Rock',
        averageWeight: {
            value: "105.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/3a/Spr_5b_075.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)"
    },
    {
        id: 76,
        name: "Golem",
        type: 'Rock',
        averageWeight: {
            value: "300.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/31/Spr_5b_076.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)"
    },
    {
        id: 77,
        name: "Ponyta",
        type: 'Fire',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/bf/Spr_5b_077.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)"
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
        id: 79,
        name: "Slowpoke",
        type: 'Water',
        averageWeight: {
            value: "36.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/1f/Spr_5b_079.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)"
    },
    {
        id: 80,
        name: "Slowbro",
        type: 'Water',
        averageWeight: {
            value: "78.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/e1/Spr_5b2_080.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)"
    },
    {
        id: 81,
        name: "Magnemite",
        type: 'Electric',
        averageWeight: {
            value: "6.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_081.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)"
    },
    {
        id: 82,
        name: "Magneton",
        type: 'Electric',
        averageWeight: {
            value: "60.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/45/Spr_5b_082.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pok%C3%A9mon)"
    },
    {
        id: 83,
        name: "Farfetch'd",
        type: 'Normal',
        averageWeight: {
            value: "15.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/aa/Spr_5b_083.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Farfetch'd_(Pok%C3%A9mon)"
    },
    {
        id: 84,
        name: "Doduo",
        type: 'Normal',
        averageWeight: {
            value: "39.2",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/2b/Spr_5b_084_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pok%C3%A9mon)"
    },
    {
        id: 85,
        name: "Dodrio",
        type: 'Normal',
        averageWeight: {
            value: "85.2",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/19/Spr_5b_085_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)"
    },
    {
        id: 86,
        name: "Seel",
        type: 'Water',
        averageWeight: {
            value: "90.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/27/Spr_5b_086.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Seel_(Pok%C3%A9mon)"
    },
    {
        id: 87,
        name: "Dewgong",
        type: 'Water',
        averageWeight: {
            value: "120.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/ad/Spr_5b_087.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)"
    },
    {
        id: 88,
        name: "Grimer",
        type: 'Poison',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/6e/Spr_5b_088.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)"
    },
    {
        id: 89,
        name: "Muk",
        type: 'Poison',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/80/Spr_5b_089.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)"
    },
    {
        id: 90,
        name: "Shellder",
        type: 'Water',
        averageWeight: {
            value: "4.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/66/Spr_5b_090.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pok%C3%A9mon)"
    },
    {
        id: 91,
        name: "Cloyster",
        type: 'Water',
        averageWeight: {
            value: "132.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/f/f1/Spr_5b_091.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pok%C3%A9mon)"
    },
    {
        id: 92,
        name: "Gastly",
        type: 'Ghost',
        averageWeight: {
            value: "0.1",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/f/f3/Spr_5b_092.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gastlyr_(Pok%C3%A9mon)"
    },
    {
        id: 93,
        name: "Haunter",
        type: 'Ghost',
        averageWeight: {
            value: "0.1",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/6d/Spr_5b_093.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)"
    },
    {
        id: 94,
        name: "Gengar",
        type: 'Ghost',
        averageWeight: {
            value: "40.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/21/Spr_5b_094.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)"
    },
    {
        id: 95,
        name: "Onix",
        type: 'Rock',
        averageWeight: {
            value: "210.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/29/Spr_5b_095.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Onix_(Pok%C3%A9mon)"
    },
    {
        id: 96,
        name: "Drowzee",
        type: 'Psychic',
        averageWeight: {
            value: "32.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_096.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)"
    },
    {
        id: 97,
        name: "Hypno",
        type: 'Psychic',
        averageWeight: {
            value: "75.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/c/cb/Spr_5b_097_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pok%C3%A9mon)"
    },
    {
        id: 98,
        name: "Krabby",
        type: 'Water',
        averageWeight: {
            value: "6.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/69/Spr_5b_098.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pok%C3%A9mon)"
    },
    {
        id: 99,
        name: "Kingler",
        type: 'Water',
        averageWeight: {
            value: "60.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/e7/Spr_5b_099.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pok%C3%A9mon)"
    },
    {
        id: 100,
        name: "Voltorb",
        type: 'Electric',
        averageWeight: {
            value: "10.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/8a/Spr_5b_100.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)"
    },
    {
        id: 101,
        name: "Electrode",
        type: 'Electric',
        averageWeight: {
            value: "66.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/53/Spr_5b_101.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)"
    },
    {
        id: 102,
        name: "Exeggcute",
        type: 'Grass',
        averageWeight: {
            value: "2.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/8f/Spr_5b_102.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pok%C3%A9mon)"
    },
    {
        id: 103,
        name: "Exeggutor",
        type: 'Grass',
        averageWeight: {
            value: "120.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/19/Spr_5b_103.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)"
    },
    {
        id: 104,
        name: "Cubone",
        type: 'Ground',
        averageWeight: {
            value: "6.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/a0/Spr_5b_104.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)"
    },
    {
        id: 105,
        name: "Marowak",
        type: 'Ground',
        averageWeight: {
            value: "45.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/f/f4/Spr_5b_105.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)"
    },
    {
        id: 106,
        name: "Hitmonlee",
        type: 'Fighting',
        averageWeight: {
            value: "49.8",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/99/Spr_5b_106.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)"
    },
    {
        id: 107,
        name: "Hitmonchan",
        type: 'Fighting',
        averageWeight: {
            value: "50.2",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/45/Spr_5b_107.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pok%C3%A9mon)"
    },
    {
        id: 108,
        name: "Lickitung",
        type: 'Normal',
        averageWeight: {
            value: "65.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/22/Spr_5b2_108.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pok%C3%A9mon)"
    },
    {
        id: 109,
        name: "Koffing",
        type: 'Poison',
        averageWeight: {
            value: "1.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/ba/Spr_5b_109.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)"
    },
    {
        id: 110,
        name: "Weezing",
        type: 'Poison',
        averageWeight: {
            value: "9.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/ec/Spr_5b_110.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Weezing_(Pok%C3%A9mon)"
    },
    {
        id: 111,
        name: "Rhyhorn",
        type: 'Ground',
        averageWeight: {
            value: "115.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/61/Spr_5b_111_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pok%C3%A9mon)"
    },
    {
        id: 112,
        name: "Rhydon",
        type: 'Ground',
        averageWeight: {
            value: "",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/d4/Spr_5b_112_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)"
    },
    {
        id: 113,
        name: "Chansey",
        type: 'Normal',
        averageWeight: {
            value: "34.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/de/Spr_5b_113.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)"
    },
    {
        id: 114,
        name: "Tangela",
        type: 'Grass',
        averageWeight: {
            value: "35.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/aa/Spr_5b_114.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pok%C3%A9mon)"
    },
    {
        id: 115,
        name: "Kangaskhan",
        type: 'Normal',
        averageWeight: {
            value: "80.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/d5/Spr_5b_115.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)"
    },
    {
        id: 116,
        name: "Horsea",
        type: 'Water',
        averageWeight: {
            value: "8.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/2d/Spr_5b_116.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pok%C3%A9mon)"
    },
    {
        id: 117,
        name: "Seadra",
        type: 'Water',
        averageWeight: {
            value: "25.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/ac/Spr_5b_117.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pok%C3%A9mon)"
    },
    {
        id: 118,
        name: "Goldeen",
        type: 'Water',
        averageWeight: {
            value: "15.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/65/Spr_5b2_118_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pok%C3%A9mon)"
    },
    {
        id: 119,
        name: "Seaking",
        type: 'Water',
        averageWeight: {
            value: "39.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/f/f0/Spr_5b_119_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Seaking_(Pok%C3%A9mon)"
    },
    {
        id: 120,
        name: "Staryu",
        type: 'Water',
        averageWeight: {
            value: "34.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/db/Spr_5b_120.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pok%C3%A9mon)"
    },
    {
        id: 121,
        name: "Starmie",
        type: 'Water',
        averageWeight: {
            value: "80.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/85/Spr_5b_121.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pok%C3%A9mon)"
    },
    {
        id: 122,
        name: "Mr. Mime",
        type: 'Psychic',
        averageWeight: {
            value: "54.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/9c/Spr_5b_122.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mr. Mime_(Pok%C3%A9mon)"
    },
    {
        id: 123,
        name: "Scyther",
        type: 'Bug',
        averageWeight: {
            value: "56.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_123_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)"
    },
    {
        id: 124,
        name: "Jynx",
        type: 'Ice',
        averageWeight: {
            value: "40.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0e/Spr_5b_124.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pok%C3%A9mon)"
    },
    {
        id: 125,
        name: "Electabuzz",
        type: 'Electric',
        averageWeight: {
            value: "30.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/79/Spr_5b_125.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pok%C3%A9mon)"
    },
    {
        id: 126,
        name: "Magmar",
        type: 'Fire',
        averageWeight: {
            value: "44.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/a/a9/Spr_5b_126.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pok%C3%A9mon)"
    },
    {
        id: 127,
        name: "Pinsir",
        type: 'Bug',
        averageWeight: {
            value: "55.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b1/Spr_5b_127.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pok%C3%A9mon)"
    },
    {
        id: 128,
        name: "Tauros",
        type: 'Normal',
        averageWeight: {
            value: "88.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/80/Spr_5b_128.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)"
    },
    {
        id: 129,
        name: "Magikarp",
        type: 'Water',
        averageWeight: {
            value: "10.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/24/Spr_5b_129_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pok%C3%A9mon)"
    },
    {
        id: 130,
        name: "Gyarados",
        type: 'Water',
        averageWeight: {
            value: "235.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/e/e3/Spr_5b_130_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)"
    },
    {
        id: 131,
        name: "Lapras",
        type: 'Water',
        averageWeight: {
            value: "220.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/6/62/Spr_5b_131.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)"
    },
    {
        id: 132,
        name: "Ditto",
        type: 'Normal',
        averageWeight: {
            value: "4.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/5f/Spr_5b_132.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)"
    },
    {
        id: 133,
        name: "Eevee",
        type: 'Normal',
        averageWeight: {
            value: "6.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/d1/Spr_5b2_133.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)"
    },
    {
        id: 134,
        name: "Vaporeon",
        type: 'Water',
        averageWeight: {
            value: "29.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/3b/Spr_5b_134.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)"
    },
    {
        id: 135,
        name: "Jolteon",
        type: 'Electric',
        averageWeight: {
            value: "24.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/c/c1/Spr_5b_135.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)"
    },
    {
        id: 136,
        name: "Flareon",
        type: 'Fire',
        averageWeight: {
            value: "25.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/3b/Spr_5b_136.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)"
    },
    {
        id: 137,
        name: "Porygon",
        type: 'Normal',
        averageWeight: {
            value: "36.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/07/Spr_5b_137.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pok%C3%A9mon)"
    },
    {
        id: 138,
        name: "Omanyte",
        type: 'Rock',
        averageWeight: {
            value: "7.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/15/Spr_5b_138.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pok%C3%A9mon)"
    },
    {
        id: 139,
        name: "Omastar",
        type: 'Rock',
        averageWeight: {
            value: "35.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/f/fc/Spr_5b_139.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pok%C3%A9mon)"
    },
    {
        id: 140,
        name: "Kabuto",
        type: 'Rock',
        averageWeight: {
            value: "11.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/db/Spr_5b_140.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)"
    },
    {
        id: 141,
        name: "Kabutops",
        type: 'Rock',
        averageWeight: {
            value: "40.5",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/c/cf/Spr_5b_141.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pok%C3%A9mon)"
    },
    {
        id: 142,
        name: "Aerodactyl",
        type: 'Rock',
        averageWeight: {
            value: "59.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/00/Spr_5b_142.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)"
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
        id: 144,
        name: "Articuno",
        type: 'Ice',
        averageWeight: {
            value: "55.4",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/7b/Spr_5b_144.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)"
    },
    {
        id: 145,
        name: "Zapdos",
        type: 'Electric',
        averageWeight: {
            value: "52.6",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/8a/Spr_5b_145.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)"
    },
    {
        id: 146,
        name: "Moltres",
        type: 'Fire',
        averageWeight: {
            value: "60.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/d/d3/Spr_5b_146.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)"
    },
    {
        id: 147,
        name: "Dratini",
        type: 'Dragon',
        averageWeight: {
            value: "3.3",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/3/36/Spr_5b_147.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pok%C3%A9mon)"
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
        id: 149,
        name: "Dragonite",
        type: 'Dragon',
        averageWeight: {
            value: "210.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/9/96/Spr_5b_149.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)"
    },
    {
        id: 150,
        name: "Mewtwo",
        type: 'Psychic',
        averageWeight: {
            value: "122.0",
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/7/73/Spr_5b_150.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)"
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
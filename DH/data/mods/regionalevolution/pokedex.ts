export const BattlePokedex: {[k: string]: ModdedSpeciesData} = {
	// Kanto:
	barboach: {
		inherit: true,
		otherFormes: ["Barboach-Kanto"]
	},
	barboachkanto: {
		num: 339,
		name: "Barboach-Kanto",
		baseSpecies: "Barboach",
		forme: "Kanto",
		types: ["Water", "Ghost"],
		baseStats: {hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60},
		abilities: {0: "Floor Cleaner", H: "Water Veil"},
		heightm: 0.4,
		weightkg: 1.9,
		color: "Gray",
		evos: ["Whisfloor"],
		eggGroups: ["Water 2"],
	},
	whisfloor: {
		num: -8001,
		name: "Whisfloor",
		types: ["Water", "Ghost"],
		baseStats: {hp: 64, atk: 81, def: 86, spa: 50, spd: 86, spe: 112},
		abilities: {0: "Floor Cleaner", H: "Water Veil"},
		heightm: 0.9,
		weightkg: 23.6,
		color: "Blue",
		prevo: "Barboach-Kanto",
		evoLevel: 30,
		eggGroups: ["Water 2"],
	},
	sunflora: {
		inherit: true,
		otherFormes: ["Sunflora-Kanto"]
	},
	sunflorakanto: {
		num: 192,
		name: "Sunflora-Kanto",
		baseSpecies: "Sunflora",
		forme: "Kanto",
		types: ["Grass", "Fire"],
		baseStats: {hp: 75, atk: 105, def: 55, spa: 75, spd: 85, spe: 30},
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Water Absorb"},
		heightm: 0.8,
		weightkg: 8.5,
		color: "Yellow",
		prevo: "Sunkern",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	floraflare: {
		num: -8002,
		name: "Floraflare",
		types: ["Grass", "Fire"],
		baseStats: {hp: 85, atk: 135, def: 75, spa: 90, spd: 90, spe: 60},
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Water Absorb"},
		heightm: 1.8,
		weightkg: 90.9,
		color: "Yellow",
		prevo: "Sunflora-Kanto",
		evoMove: "Fire Spin",
		eggGroups: ["Grass"],
	},
	applin: {
		inherit: true,
		otherFormes: ["Applin-Kanto"],
	},
	applinkanto: {
		num: 840,
		name: "Applin-Kanto",
		baseSpecies: "Applin",
		forme: "Kanto",
		types: ["Grass", "Dark"],
		baseStats: {hp: 40, atk: 40, def: 60, spa: 40, spd: 40, spe: 40},
		abilities: {0: "Battle Armor", 1: "Gluttony", H: "Bulletproof"},
		heightm: 0.2,
		weightkg: 0.5,
		color: "Green",
		evos: ["Badpple", "Fujisei"],
		eggGroups: ["Grass", "Dragon"],
	},
	badpple: {
		num: -8003,
		name: "Badpple",
		types: ["Grass", "Dark"],
		baseStats: {hp: 70, atk: 110, def: 65, spa: 60, spd: 65, spe: 115},
		abilities: {0: "Strong Jaws", 1: "Gluttony", H: "Hustle"},
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		prevo: "Applin-Kanto",
		evoType: "useItem",
		evoItem: "Tart Apple",
		eggGroups: ["Grass", "Dragon"],
	},
	fujisei: {
		num: -8004,
		name: "Fujisei",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 70, atk: 105, def: 40, spa: 105, spd: 40, spe: 125},
		abilities: {0: "Malevolence", 1: "Ripen", H: "Skill Link"},
		heightm: 0.4,
		weightkg: 13,
		color: "Green",
		prevo: "Applin-Kanto",
		evoType: "useItem",
		evoItem: "Sweet Apple",
		eggGroups: ["Grass", "Dragon"],
	},
	snom: {
		inherit: true,
		otherFormes: ["Snom-Kanto"]
	},
	snomkanto: {
		num: 872,
		name: "Snom-Kanto",
		baseSpecies: "Snom",
		forme: "Kanto",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 30, atk: 45, def: 35, spa: 25, spd: 30, spe: 20},
		abilities: {0: "Shield Dust", H: "Dragon Scales"},
		heightm: 0.3,
		weightkg: 3.8,
		color: "White",
		evos: ["Frosmoth-Kanto"],
		eggGroups: ["Bug"],
	},
	frosmoth: {
		inherit: true,
		otherFormes: ["Frosmoth-Kanto"]
	},
	frosmothkanto: {
		num: 873,
		name: "Frosmoth-Kanto",
		baseSpecies: "Frosmoth",
		forme: "Kanto",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 70, atk: 125, def: 60, spa: 65, spd: 90, spe: 65},
		abilities: {0: "Shield Dust", H: "Dragon Scales"},
		heightm: 1.3,
		weightkg: 42,
		color: "White",
		prevo: "Snom-Kanto",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	behemoth: {
		num: -8005,
		name: "Behemoth",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 90, atk: 135, def: 70, spa: 100, spd: 90, spe: 85},
		abilities: {0: "Tinted Lens", H: "Compound Eyes"},
		heightm: 15.3,
		weightkg: 940,
		color: "White",
		prevo: "Frosmoth-Kanto",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Bug"],
	},
	dreepy: {
		inherit: true,
		otherFormes: ["Dreepy-Kanto"]
	},
	dreepykanto: {
		num: 885,
		name: "Dreepy-Kanto",
		baseSpecies: "Dreepy",
		forme: "Kanto",
		types: ["Poison", "Ghost"],
		baseStats: {hp: 28, atk: 60, def: 30, spa: 30, spd: 30, spe: 92},
		abilities: {0: "Poison Point", 1: "Infiltrator", H: "Merciless"},
		heightm: 0.5,
		weightkg: 2,
		color: "Green",
		evos: ["Drakloak-Kanto"],
		eggGroups: ["Amorphous", "Dragon"],
	},
	drakloak: {
		inherit: true,
		otherFormes: ["Drakloak-Kanto"]
	},
	drakloakkanto: {
		num: 886,
		name: "Drakloak-Kanto",
		baseSpecies: "Drakloak",
		forme: "Kanto",
		types: ["Poison", "Ghost"],
		baseStats: {hp: 68, atk: 80, def: 50, spa: 50, spd: 50, spe: 112},
		abilities: {0: "Poison Point", 1: "Infiltrator", H: "Merciless"},
		heightm: 1.4,
		weightkg: 11,
		color: "Green",
		prevo: "Dreepy-Kanto",
		evoLevel: 50,
		evos: ["Drakdart"],
		eggGroups: ["Amorphous", "Dragon"],
	},
	drakdart: {
		num: -8006,
		name: "Drakdart",
		types: ["Poison", "Ghost"],
		baseStats: {hp: 80, atk: 125, def: 85, spa: 80, spd: 80, spe: 150},
		abilities: {0: "Poison Point", 1: "Infiltrator", H: "Merciless"},
		heightm: 3,
		weightkg: 50,
		color: "Green",
		prevo: "Drakloak-Kanto",
		evoLevel: 60,
		eggGroups: ["Amorphous", "Dragon"],
	},
	qwilfish: {
		inherit: true,
		otherFormes: ["Qwilfish-Kanto"]
	},
	qwilfishkanto: {
		num: 211,
		name: "Qwilfish-Kanto",
		baseSpecies: "Qwilfish",
		forme: "Kanto",
		types: ["Fire"],
		baseStats: {hp: 95, atk: 85, def: 85, spa: 55, spd: 55, spe: 65},
		abilities: {0: "Flame Body", 1: "Aftermath", H: "Rough Skin"},
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		evos: ["Bakufugu"],
		eggGroups: ["Water 2"],
	},
	bakufugu: {
		num: -8007,
		name: "Bakufugu",
		types: ["Fire", "Steel"],
		baseStats: {hp: 145, atk: 110, def: 90, spa: 60, spd: 65, spe: 75},
		abilities: {0: "Flame Body", 1: "Aftermath", H: "Iron Barbs"},
		heightm: 2.8,
		weightkg: 3.9,
		color: "Gray",
		prevo: "Qwilfish-Kanto",
		evoMove: "Explosion",
		eggGroups: ["Water 2"],
	},
	// Johto
	impidimp: {
		inherit: true,
		otherFormes: ["Impidimp-Johto"]
	},
	impidimpjohto: {
		num: 859,
		name: "Impidimp-Johto",
		baseSpecies: "Impidimp",
		forme: "Johto",
		types: ["Dark", "Ice"],
		gender: "M",
		baseStats: {hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50},
		abilities: {0: "Prankster", 1: "Frisk", H: "Pickpocket"},
		heightm: 0.4,
		weightkg: 5.5,
		color: "Pink",
		evos: ["Morgrem-Johto"],
		eggGroups: ["Fairy", "Human-Like"],
	},
	morgrem: {
		inherit: true,
		otherFormes: ["Morgrem-Johto"]
	},
	morgremjohto: {
		num: 860,
		name: "Morgrem-Johto",
		baseSpecies: "Morgrem",
		forme: "Johto",
		types: ["Dark", "Ice"],
		gender: "M",
		baseStats: {hp: 65, atk: 60, def: 45, spa: 75, spd: 55, spe: 70},
		abilities: {0: "Prankster", 1: "Long Reach", H: "Pickpocket"},
		heightm: 0.8,
		weightkg: 12.5,
		color: "Pink",
		prevo: "Impidimp-Johto",
		evoLevel: 32,
		evos: ["Grimmdigo"],
		eggGroups: ["Fairy", "Human-Like"],
	},
	grimmdigo: {
		num: -8008,
		name: "Grimmdigo",
		types: ["Dark", "Ice"],
		gender: "M",
		baseStats: {hp: 70, atk: 110, def: 65, spa: 100, spd: 65, spe: 95},
		abilities: {0: "Prankster", 1: "Long Reach", H: "Pickpocket"},
		heightm: 1.5,
		weightkg: 61,
		color: "Purple",
		prevo: "Morgrem-Johto",
		evoLevel: 42,
		eggGroups: ["Fairy", "Human-Like"],
	},
	trapinch: {
		inherit: true,
		otherFormes: ["Trapinch-Johto"]
	},
	trapinchjohto: {
		num: 328,
		name: "Trapinch-Johto",
		baseSpecies: "Trapinch",
		forme: "Johto",
		types: ["Bug"],
		baseStats: {hp: 45, atk: 45, def: 45, spa: 100, spd: 45, spe: 10},
		abilities: {0: "Compound Eyes", 1: "Arena Trap", H: "Sheer Force"},
		heightm: 0.7,
		weightkg: 15,
		color: "Brown",
		evos: ["Vibrava-Johto"],
		eggGroups: ["Bug", "Dragon"],
	},
	vibrava: {
		inherit: true,
		otherFormes: ["Vibrava-Johto"]
	},
	vibravajohto: {
		num: 329,
		name: "Vibrava-Johto",
		baseSpecies: "Vibrava",
		forme: "Johto",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 50, atk: 50, def: 50, spa: 70, spd: 50, spe: 70},
		abilities: {0: "Tinted Lens"},
		heightm: 1.1,
		weightkg: 15.3,
		color: "Green",
		prevo: "Trapinch-Johto",
		evoLevel: 35,
		evos: ["Flaygon"],
		eggGroups: ["Bug", "Dragon"],
	},
	flaygon: {
		num: -8009,
		name: "Flaygon",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 80, atk: 80, def: 80, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Tinted Lens"},
		heightm: 2,
		weightkg: 82,
		color: "Green",
		prevo: "Vibrava-Johto",
		evoLevel: 45,
		eggGroups: ["Bug", "Dragon"],
	},
	bagon: {
		inherit: true,
		otherFormes: ["Bagon-Johto"]
	},
	bagonjohto: {
		num: 371,
		name: "Bagon-Johto",
		baseSpecies: "Bagon",
		forme: "Johto",
		types: ["Dragon", "Rock"],
		baseStats: {hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50},
		abilities: {0: "Rock Head", H: "Sheer Force"},
		heightm: 0.6,
		weightkg: 42.1,
		color: "Blue",
		evos: ["Shelgon-Johto"],
		eggGroups: ["Dragon"],
	},
	shelgon: {
		inherit: true,
		otherFormes: ["Shelgon-Johto"]
	},
	shelgonjohto: {
		num: 372,
		name: "Shelgon-Johto",
		baseSpecies: "Shelgon",
		forme: "Johto",
		types: ["Dragon", "Rock"],
		baseStats: {hp: 65, atk: 100, def: 105, spa: 50, spd: 55, spe: 45},
		abilities: {0: "Rock Head", H: "Overcoat"},
		heightm: 1.1,
		weightkg: 110.5,
		color: "White",
		prevo: "Bagon-Johto",
		evoLevel: 30,
		evos: ["Shelldra"],
		eggGroups: ["Dragon"],
	},
	shelldra: {
		num: -8010,
		name: "Shelldra",
		types: ["Dragon", "Rock"],
		baseStats: {hp: 100, atk: 120, def: 135, spa: 65, spd: 120, spe: 60},
		abilities: {0: "Rock Head", H: "Solid Rock"},
		heightm: 1.5,
		weightkg: 192.6,
		color: "Blue",
		prevo: "Shelgon-Johto",
		evoLevel: 50,
		eggGroups: ["Dragon"],
	},
	combee: {
		inherit: true,
		otherFormes: ["Combee-Johto"]
	},
	combeejohto: {
		num: 415,
		name: "Combee-Johto",
		baseSpecies: "Combee",
		forme: "Johto",
		types: ["Steel", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 30, atk: 20, def: 62, spa: 20, spd: 62, spe: 50},
		abilities: {0: "Pickup", H: "Run Away"},
		heightm: 0.3,
		weightkg: 5.5,
		color: "Yellow",
		evos: ["Dronarch", "Dronarch-F"],
		eggGroups: ["Bug"],
	},
	dronarch: {
		num: -8011,
		name: "Dronarch",
		types: ["Steel", "Flying"],
		gender: "M",
		baseStats: {hp: 40, atk: 102, def: 70, spa: 102, spd: 70, spe: 90},
		abilities: {0: "Telepathy", H: "Defiant"},
		heightm: 1.2,
		weightkg: 38.5,
		color: "Yellow",
		prevo: "Combee-Johto",
		evoLevel: 21,
		eggGroups: ["Bug"],
		otherFormes: ["Dronarch-F"]
	},
	dronarchf: {
		num: -8011,
		name: "Dronarch-F",
		baseSpecies: "Dronarch",
		forme: "F",
		types: ["Steel", "Flying"],
		gender: "F",
		baseStats: {hp: 100, atk: 70, def: 107, spa: 70, spd: 107, spe: 20},
		abilities: {0: "Telepathy", H: "Parental Bond"},
		heightm: 1.2,
		weightkg: 38.5,
		color: "Yellow",
		prevo: "Combee-Johto",
		evoLevel: 21,
		eggGroups: ["Bug"],
	},
	makuhita: {
		inherit: true,
		otherFormes: ["Makuhita-Johto"]
	},
	makuhitajohto: {
		num: 296,
		name: "Makuhita-Johto",
		baseSpecies: "Makuhita",
		forme: "Johto",
		types: ["Steel"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 52, atk: 60, def: 45, spa: 20, spd: 40, spe: 20},
		abilities: {0: "Steelworker", H: "Heavy Metal"},
		heightm: 1,
		weightkg: 86.4,
		color: "Yellow",
		evos: ["Fojiyama"],
		eggGroups: ["Human-Like"],
	},
	fojiyama: {
		num: -8012,
		name: "Fojiyama",
		types: ["Steel", "Fire"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 74, atk: 125, def: 100, spa: 45, spd: 100, spe: 30},
		abilities: {0: "Flame Body", H: "Heavy Metal"},
		heightm: 2.1,
		weightkg: 499.5,
		color: "Brown",
		prevo: "Makuhita-Johto",
		evoLevel: 24,
		eggGroups: ["Human-Like"],
	},
	seviper: {
		inherit: true,
		otherFormes: ["Seviper-Johto"]
	},
	seviperjohto: {
		num: 336,
		name: "Seviper-Johto",
		baseSpecies: "Seviper",
		forme: "Johto",
		types: ["Dark", "Poison"],
		baseStats: {hp: 73, atk: 100, def: 60, spa: 70, spd: 60, spe: 95},
		abilities: {0: "Infiltrator", H: "Merciless"},
		heightm: 2.7,
		weightkg: 52.5,
		color: "Black",
		evos: ["Shinobite"],
		eggGroups: ["Field", "Dragon"],
	},
	shinobite: {
		num: -8013,
		name: "Shinobite",
		types: ["Dark", "Poison"],
		baseStats: {hp: 83, atk: 114, def: 80, spa: 80, spd: 60, spe: 120},
		abilities: {0: "Infiltrator", H: "Corrosion"},
		heightm: 3.3,
		weightkg: 64.9,
		color: "Black",
		prevo: "Seviper-Johto",
		evoItem: "Dusk Stone",
		eggGroups: ["Field", "Dragon"],
	},
	zangoose: {
		inherit: true,
		otherFormes: ["Zangoose-Johto"]
	},
	zangoosejohto: {
		num: 335,
		name: "Zangoose-Johto",
		baseSpecies: "Zangoose",
		forme: "Johto",
		types: ["Steel", "Normal"],
		baseStats: {hp: 73, atk: 115, def: 70, spa: 60, spd: 70, spe: 70},
		abilities: {0: "Justified", H: "Tough Claws"},
		heightm: 1.3,
		weightkg: 40.3,
		color: "White",
		evos: ["Shogoose"],
		eggGroups: ["Field"],
	},
	shogoose: {
		num: -8014,
		name: "Shogoose",
		types: ["Steel", "Ground"],
		baseStats: {hp: 93, atk: 130, def: 104, spa: 60, spd: 90, spe: 60},
		abilities: {0: "Justified", H: "Tough Claws"},
		heightm: 1.8,
		weightkg: 88.2,
		color: "White",
		prevo: "Zangoose-Johto",
		evoItem: "Dawn Stone",
		eggGroups: ["Field"],
	},
	sinistea: {
		inherit: true,
		otherFormes: ["Sinistea-Johto"]
	},
	sinisteajohto: {
		num: 854,
		name: "Sinistea-Johto",
		baseSpecies: "Sinistea",
		forme: "Johto",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 50, atk: 45, def: 65, spa: 44, spd: 74, spe: 30},
		abilities: {0: "Marvel Scale", H: "Heatproof"},
		heightm: 0.1,
		weightkg: 0.2,
		color: "Purple",
		evos: ["Longcha"],
		eggGroups: ["Mineral", "Amorphous"],
	},
	longcha: {
		num: -8015,
		name: "Longcha",
		types: ["Dragon", "Steel"],
		gender: "N",
		baseStats: {hp: 70, atk: 85, def: 85, spa: 84, spd: 134, spe: 50},
		abilities: {0: "Intimidate", H: "Heatproof"},
		heightm: 0.1,
		weightkg: 0.2,
		color: "Purple",
		prevo: "Sinistea-Johto",
		evoType: "useItem",
		evoItem: "Cracked Pot",
		eggGroups: ["Mineral", "Amorphous"],
	},

	// Hoenn
	cleffa: {
		inherit: true,
		otherFormes: ["Cleffa-Hoenn"]
	},
	cleffahoenn: {
		num: 173,
		name: "Cleffa-Hoenn",
		baseSpecies: "Cleffa",
		forme: "Hoenn",
		types: ["Fairy", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 50, atk: 45, def: 55, spa: 25, spd: 28, spe: 15},
		abilities: {0: "Cursed Body", 1: "Magic Guard", H: "Friend Guard"},
		heightm: 0.3,
		weightkg: 3,
		color: "Pink",
		evos: ["Clefairy-Hoenn"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	clefairy: {
		inherit: true,
		otherFormes: ["Clefairy-Hoenn"]
	},
	clefairyhoenn: {
		num: 35,
		name: "Clefairy",
		types: ["Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 70, atk: 60, def: 65, spa: 45, spd: 48, spe: 35},
		abilities: {0: "Cursed Body", 1: "Magic Guard", H: "Friend Guard"},
		heightm: 0.6,
		weightkg: 7.5,
		color: "Pink",
		prevo: "Cleffa-Hoenn",
		evoType: "levelFriendship",
		evos: ["Clefatal"],
		eggGroups: ["Fairy"],
	},
	clefatal: {
		num: -8016,
		name: "Clefatal",
		types: ["Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 95, atk: 95, def: 90, spa: 60, spd: 73, spe: 70},
		abilities: {0: "Cursed Body", 1: "Magic Guard", H: "Prankster"},
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		prevo: "Clefairy-Hoenn",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"]
	},
	murkrow: {
		inherit: true,
		otherFormes: ["Murkrow-Hoenn"]
	},
	murkrowhoenn: {
		num: 198,
		name: "Murkrow-Hoenn",
		baseSpecies: "Murkrow",
		forme: "Hoenn",
		types: ["Fire", "Ice"],
		baseStats: {hp: 60, atk: 65, def: 42, spa: 105, spd: 42, spe: 91},
		abilities: {0: "Levitate", 1: "Magician", H: "Prankster"},
		heightm: 0.5,
		weightkg: 2.1,
		color: "Black",
		evos: ["Crowceror"],
		eggGroups: ["Flying"],
	},
	crowceror: {
		num: -8017,
		name: "Crowceror",
		types: ["Fire", "Ice"],
		baseStats: {hp: 70, atk: 75, def: 57, spa: 130, spd: 57, spe: 116},
		abilities: {0: "Cursed Body", 1: "Electrician", H: "Prankster"},
		heightm: 0.9,
		weightkg: 27.3,
		color: "Black",
		prevo: "Murkrow-Hoenn",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Flying"],
	},
	sandygast: {
		inherit: true,
		otherFormes: ["Sandygast-Hoenn"]
	},
	sandygasthoenn: {
		num: 769,
		name: "Sandygast-Hoenn",
		baseSpecies: "Sandygast",
		forme: "Hoenn",
		types: ["Normal", "Ground"],
		baseStats: {hp: 55, atk: 55, def: 45, spa: 75, spd: 80, spe: 15},
		abilities: {0: "Junk Armor", H: "Sand Veil"},
		heightm: 0.5,
		weightkg: 70,
		color: "Brown",
		evos: ["Palossand"],
		eggGroups: ["Amorphous"],
	},
	palojjunk: {
		num: -8018,
		name: "Palojjunk",
		types: ["Normal", "Ground"],
		baseStats: {hp: 85, atk: 75, def: 75, spa: 100, spd: 110, spe: 35},
		abilities: {0: "Junk Armor", H: "Sand Veil"},
		heightm: 1.3,
		weightkg: 250,
		color: "Brown",
		prevo: "Sandygast-Hoenn",
		evoLevel: 42,
		eggGroups: ["Amorphous"],
	},
	solosis: {
		inherit: true,
		otherFormes: ["Solosis-Hoenn"]
	},
	solosishoenn: {
		num: 577,
		name: "Solosis-Hoenn",
		baseSpecies: "Solosis",
		forme: "Hoenn",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 45, atk: 105, def: 50, spa: 30, spd: 40, spe: 20},
		abilities: {0: "Overcoat", 1: "Guts", H: "Regenerator"},
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		evos: ["Duosion-Hoenn"],
		eggGroups: ["Amorphous"],
	},
	duosion: {
		inherit: true,
		otherFormes: ["Duosion-Hoenn"]
	},
	duosionhoenn: {
		num: 578,
		name: "Duosion",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 65, atk: 125, def: 60, spa: 40, spd: 50, spe: 30},
		abilities: {0: "Overcoat", 1: "Guts", H: "Regenerator"},
		heightm: 0.6,
		weightkg: 8,
		color: "Green",
		prevo: "Solosis-Hoenn",
		evoLevel: 32,
		evos: ["Quadroplex"],
		eggGroups: ["Amorphous"],
	},
	quadroplex: {
		num: -8019,
		name: "Quadroplex",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 110, atk: 125, def: 85, spa: 65, spd: 75, spe: 30},
		abilities: {0: "Overcoat", 1: "Awakened Power", H: "Regenerator"},
		heightm: 1,
		weightkg: 20.1,
		color: "Green",
		prevo: "Duosion",
		evoLevel: 41,
		eggGroups: ["Amorphous"],
	},
	ducklett: {
		inherit: true,
		otherFormes: ["Ducklett-Hoenn"]
	},
	duckletthoenn: {
		num: 580,
		name: "Ducklett-Hoenn",
		baseSpecies: "Ducklett",
		forme: "Hoenn",
		types: ["Fairy", "Flying"],
		baseStats: {hp: 62, atk: 44, def: 50, spa: 44, spd: 50, spe: 55},
		abilities: {0: "Natural Cure", 1: "Big Pecks", H: "Cute Charm"},
		heightm: 0.5,
		weightkg: 5.5,
		color: "Blue",
		evos: ["Swanna-Hoenn"],
		eggGroups: ["Water 1", "Flying"]
	},
	swanna: {
		inherit: true,
		otherFormes: ["Swanna-Hoenn"]
	},
	swannahoenn: {
		num: 581,
		name: "Swanna-Hoenn",
		baseSpecies: "Swanna",
		forme: "Hoenn",
		types: ["Fairy", "Flying"],
		baseStats: {hp: 95, atk: 67, def: 73, spa: 77, spd: 83, spe: 78},
		abilities: {0: "Natural Cure", 1: "Big Pecks", H: "Cute Charm"},
		heightm: 1.3,
		weightkg: 24.2,
		color: "White",
		prevo: "Ducklett-Hoenn",
		evoLevel: 35,
		eggGroups: ["Water 1", "Flying"],
	},
	flambiguos: {
		num: -8020,
		name: "Flambiguos",
		baseForme: "Standard",
		types: ["Fairy", "Fire"],
		baseStats: {hp: 95, atk: 70, def: 75, spa: 80, spd: 100, spe: 115},
		abilities: {0: "Natural Cure", 1: "Big Pecks", H: "Zen Mode"},
		heightm: 1.6,
		weightkg: 67.8,
		color: "White",
		prevo: "Swanna-Hoenn",
		evoLevel: 55,
		eggGroups: ["Water 1", "Flying"],
		otherFormes: ["Flambiguous-Zen"]
	},
	flambiguoszen: {
		num: -8020,
		name: "Flambiguos-Zen",
		baseSpecies: "Flambiguos",
		forme: "Zen",
		types: ["Fairy", "Water"],
		baseStats: {hp: 95, atk: 70, def: 105, spa: 120, spd: 125, spe: 80},
		abilities: {0: "Zen Mode"},
		heightm: 1.6,
		weightkg: 67.8,
		color: "White",
		evoLevel: 55,
		eggGroups: ["Water 1", "Flying"],
		requiredAbility: "Zen-Mode",
		battleOnly: "Flambiguos"
	},
	mrmime: {
		inherit: true,
		otherFormes: ["Mr. Mime-Galar", "Mr. Mime-Hoenn", "Mr. Mime-Kalos"]
	},
	mrmimehoenn: {
		num: 122,
		name: "Mr. Mime-Hoenn",
		baseSpecies: "Mr. Mime",
		forme: "Hoenn",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 40, atk: 100, def: 120, spa: 45, spd: 65, spe: 90},
		abilities: {0: "Rock Head", 1: "High Ground", H: "Technician"},
		heightm: 1.4,
		weightkg: 56.8,
		color: "White",
		prevo: "Mime Jr.",
		evoType: "levelMove",
		evoMove: "Mimic",
		evos: ["Mr. Climb"],
		eggGroups: ["Human-Like"],
		canHatch: true,
	},
	mrclimb: {
		num: 866,
		name: "Mr. Climb",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 80, atk: 110, def: 125, spa: 60, spd: 75, spe: 70},
		abilities: {0: "Rock Head", 1: "High Ground", H: "Technician"},
		heightm: 1.5,
		weightkg: 58.2,
		color: "Purple",
		prevo: "Mr. Mime-Hoenn",
		evoLevel: 42,
		eggGroups: ["Human-Like"],
	}
}
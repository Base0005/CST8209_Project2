// GetElementById Section
const SiteTitle = document.getElementById("SiteTitle");
const PokemonSection = document.getElementById("PokemonSection");
const PokemonCounter = document.getElementById("PokemonCounter");
const loader = document.getElementById("loader");

// Button Id
const BugBtn = document.getElementById("BugBtn");
const DarkBtn = document.getElementById("DarkBtn");
const DragonBtn = document.getElementById("DragonBtn");
const ElectricBtn = document.getElementById("ElectricBtn");
const FairyBtn = document.getElementById("FairyBtn");
const FightingBtn = document.getElementById("FightingBtn");
const FireBtn = document.getElementById("FireBtn");
const FlyingBtn = document.getElementById("FlyingBtn");
const GhostBtn = document.getElementById("GhostBtn");
const GrassBtn = document.getElementById("GrassBtn");
const GroundBtn = document.getElementById("GroundBtn");
const IceBtn = document.getElementById("IceBtn");
const NormalBtn = document.getElementById("NormalBtn");
const PoisonBtn = document.getElementById("PoisonBtn");
const PsychicBtn = document.getElementById("PsychicBtn");
const RockBtn = document.getElementById("RockBtn");
const SteelBtn = document.getElementById("SteelBtn");
const WaterBtn = document.getElementById("WaterBtn");

// Create a new container for PokemonCount outside the event listener
let PokemonCountContainer = document.createElement("div");
PokemonCountContainer.className = "PokemonCountContainer";

//Clear Page Using Site Title
SiteTitle.addEventListener("click", function () {
	//Clear Pokemon Section
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
});

// Button Event Section
//Bug Button Event
BugBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent = "Amount Of Bug Type Pokemons:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Bug")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent = "Amount Of Bug Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Dark Button Event
DarkBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Dark Type Pokemons:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Dark")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Dark Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Dragon Button Event
DragonBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Dragon Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Dragon")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Dragon Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Electric Button Event
ElectricBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Electric Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Electric")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Electric Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Fairy Button Event
FairyBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Fairy Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Fairy")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Fairy Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Fighting Button Event
FightingBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Fighting Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Fighting")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Fighting Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Fire Button Event
FireBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent = "Amount Of Fire Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Fire")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Fire Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Flying Button Event
FlyingBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Flying Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Flying")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Flying Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Ghost Button Event
GhostBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Ghost Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Ghost")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Ghost Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Grass Button Event
GrassBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Grass Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Grass")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Grass Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Ground Button Event
GroundBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Ground Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Ground")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Ground Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Ice Button Event
IceBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent = "Amount Of Ice Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Ice")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent = "Amount Of Ice Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Normal Button Event
NormalBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Normal Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Normal")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Normal Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Poison Button Event
PoisonBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Poison Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Poison")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Poison Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Psychic Button Event
PsychicBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Psychic Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Psychic")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Psychic Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Rock Button Event
RockBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent = "Amount Of Rock Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Rock")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Rock Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Steel Button Event
SteelBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Steel Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Steel")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Steel Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

//Water Button Event
WaterBtn.addEventListener("click", function () {
	// Show loading spinner
	loader.style.display = "block";
	// Clear Page
	PokemonSection.innerHTML = "";
	// Clear Pokemon Counter
	PokemonCountContainer.innerHTML = "";
	// Load Pokemon Data From Pokedex.js
	setTimeout(function () {
		// Create The Amount Of Pokemon
		let AmountOfPokemon = 0;
		let PokemonCount = document.createElement("h2");
		PokemonCount.textContent =
			"Amount Of Water Type Pokemon:" + AmountOfPokemon;
		// Create a new container for PokemonCount
		PokemonCountContainer.appendChild(PokemonCount);
		// Add Pokemon Of Specific Type
		for (let i = 0; i < pokedex.length; i++) {
			const typesArray = Array.isArray(pokedex[i].type)
				? pokedex[i].type
				: [pokedex[i].type];
			if (typesArray.includes("Water")) {
				// Create Pokemon Card
				const PokemonCard = document.createElement("div");
				PokemonCard.className = "PokemonCard";
				// Create + Add Pokemon Background Image
				PokemonBgImg = document.createElement("img");
				PokemonBgImg.className = "PokemonBgImg";
				PokemonBgImg.src = "./Image/Pokeball.png";
				PokemonCard.appendChild(PokemonBgImg);
				// Create + Add Pokemon Image
				const PokemonAnchor = document.createElement("a");
				PokemonAnchor.target = "_blank";
				PokemonAnchor.href = pokedex[i].url;
				const PokemonImg = document.createElement("img");
				PokemonImg.className = "PokemonImg";
				PokemonImg.src = pokedex[i].sprite;
				// Create + Add Pokemon Name
				const PokemonName = document.createElement("h2");
				PokemonName.className = "PokemonName";
				PokemonName.textContent = "Name: " + pokedex[i].name;
				// Create + Add Pokemon Type
				const PokemonType = document.createElement("h2");
				PokemonType.className = "PokemonType";
				PokemonType.textContent = "Types: " + typesArray.join(", ");
				// Create + Add Pokemon Stats
				const PokemonStats = document.createElement("h2");
				PokemonStats.className = "PokemonStats";
				const PokemonHP = document.createElement("div");
				PokemonHP.textContent = "HP: " + pokedex[i].base.HP;
				const PokemonATK = document.createElement("div");
				PokemonATK.textContent = " Attack: " + pokedex[i].base.Attack;
				const PokemonDEF = document.createElement("div");
				PokemonDEF.textContent = " Defense: " + pokedex[i].base.Defense;
				const PokemonSpATK = document.createElement("div");
				PokemonSpATK.textContent =
					" Sp. Attack: " + pokedex[i].base["Sp. Attack"];
				const PokemonSpDEF = document.createElement("div");
				PokemonSpDEF.textContent =
					" Sp. Defense: " + pokedex[i].base["Sp. Defense"];
				const PokemonSPD = document.createElement("div");
				PokemonSPD.innerHTML = " <b>Speed:</b> " + pokedex[i].base.Speed;
				PokemonStats.appendChild(PokemonHP);
				PokemonStats.appendChild(PokemonATK);
				PokemonStats.appendChild(PokemonDEF);
				PokemonStats.appendChild(PokemonSpATK);
				PokemonStats.appendChild(PokemonSpDEF);
				PokemonStats.appendChild(PokemonSPD);
				PokemonAnchor.appendChild(PokemonImg);
				PokemonCard.appendChild(PokemonAnchor);
				PokemonCard.appendChild(PokemonName);
				PokemonCard.appendChild(PokemonType);
				PokemonCard.appendChild(PokemonStats);
				PokemonSection.appendChild(PokemonCard);
				AmountOfPokemon++;
			}
		}
		// Update the Pokemon Count
		PokemonCount.textContent =
			"Amount Of Water Type Pokemon: " + AmountOfPokemon;
		// Append PokemonCountContainer and PokemonSection to a common parent
		let mainContainer = document.createElement("div");
		mainContainer.appendChild(PokemonCountContainer);
		mainContainer.appendChild(PokemonSection);
		// Append mainContainer to the body or your desired location
		document.body.appendChild(mainContainer);
		// Hide loading spinner after data is loaded
		loader.style.display = "none";
	}, 1000);
});

// Write your JS here


let hero = {
	name: "",
	heroic: true,
	inventory: [],
	health: 10,
	weapon: {
		type: "",
		damage: 2
	}
}

// Reset health to 10
function rest (obj) {
	if (obj.health===10) {	alert("Your health is 10!!")	}	
	else { 	obj.health = 10 }

	return obj
}

// Add new weapon
function pickUpItem (obj, neweapon) {
	obj.inventory.push(neweapon)	
	//console.log(obj.inventory)
}
 
// Equip weapon and damage
function equipWeapon (bagit) {
	
	if (!bagit.inventory) { 
		//	bagit.inventory.unshift(bagit.weapon.type,bagit.weapon.damage)
		bagit.inventory[0][0]=bagit.weapon.type
		bagit.inventory[0][1]=bagit.weapon.damage
	}
	
}


 function displayStatus(herostatus) {
	 console.log("Hero  : ", herostatus.name)
	 console.log("Health: ", herostatus.health)
	 console.log("Weapon type: ", herostatus.type)
	 console.log("Weapon damage: ", herostatus.damage)	
 }

rest (hero)

//displayStatus(hero)
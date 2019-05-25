///////////////////GLOBALS\\\\\\\\\\\\\\\\\\\ 
let month;
let money;
let health; 
let morale;

// DOMS
// Stages DOM
const birthStage = document.querySelector('#birthDIV');
const statsStage = document.querySelector('#statsDIV');
const gameStage = document.querySelector('#gameDIV');
const deathStage = document.querySelector('#deathDIV');
// Stages Buttons DOM
const birthButton = document.querySelector('#birthBTN');
const statsButton = document.querySelector('#statsBTN');
const gameButton = document.querySelector('#gameBTN');
const restartButton = document.querySelector('#restartBTN');
// Stat DOM
const moneyStatDisplay = document.querySelector('#statMoney');
const healthStatDisplay = document.querySelector('#statHealth');
const moraleStatDisplay = document.querySelector('#statMorale');
// Main Game DOM Variable
const monthDisplay = document.querySelector('#months');
const yearsDisplay = document.querySelector('#years');
const moneyDisplay = document.querySelector('#money');
const healthDisplay = document.querySelector('#health');
const moraleDisplay = document.querySelector('#morale');
// Death DOM Variable
const monthDeathDisplay = document.querySelector('#deathMonths');

//ROUTINE
// Routine Function
function Routine(nameR, typeR, DOMR, moneyR, healthR, moraleR, disabledOptionR) {
  this.nameR = nameR;
  this.typeR = typeR;
  this.DOMR = DOMR;
  this.moneyR = moneyR;
  this.healthR = healthR;
  this.moraleR = moraleR;
  this.disabledOptionR = disabledOptionR;
};
// Routine Variables
let unemployed = new Routine('Unemployed', 'job', document.querySelector("#unemployedJob"), 0, -3, -5, false);
let cashier = new Routine('Cashier', 'job', document.querySelector("#cheapJob"), 500, 0, -2, false);
let webDeveloper = new Routine('Web-Dev', 'job', document.querySelector("#midJob"), 2000, 0, 0, false);
let businessman = new Routine('Businessman', 'job', document.querySelector("#luxJob"), 5000, -1, -2, true);
let starveFood = new Routine('Starve', 'diet', document.querySelector("#starveFood"), 0, -20, -20, false);
let cheapFood = new Routine('Cheap Food', 'diet', document.querySelector("#cheapFood"), -100, -1, -1, false);
let mediumFood = new Routine('Medium Food', 'diet', document.querySelector("#midFood"), -500, 0, 0, false);
let expensiveFood = new Routine('Expensive Food', 'diet', document.querySelector("#luxFood"), -1000, 1, 2, false);
// Routine Array
routineArray = [unemployed, cashier, webDeveloper, businessman, starveFood, cheapFood, mediumFood, expensiveFood];

// EVENTS
// Routine Function
function Event(nameE, typeE, DOME, moneyE, healthE, moraleE, isHappeningE, probabilityE, healthCoeffE, moraleCoeffE, durationE, maxDurationE) {
  this.nameE = nameE;
  this.typeE = typeE;
  this.DOME= DOME;
  this.moneyE = moneyE;
  this.healthE = healthE;
  this.moraleE = moraleE;
  this.isHappeningE = isHappeningE;
  this.probabilityE = probabilityE;
  this.healthCoeffE = healthCoeffE; 
  this.moraleCoeffE = moraleCoeffE; //Health+Morale Coeff Should not be more than 1
  this.durationE = durationE;
  this.maxDurationE = maxDurationE;
};
// Routine Variables
let cold = new Event('cold', 'illness', document.querySelector("#eventCold"), 0, -1, -1, false, 0.1, 0.5, 0.5, 0, 1);
let diarrhea = new Event('diarrhea', 'illness', document.querySelector("#eventDiarrhea"), 0, 0, -2, false, 0.05, 1, 0, 0, 3);
let cancer = new Event('cancer', 'illness', document.querySelector("#eventCancer"), 0, -5, -5, false, 0.01, 0.5, 0.5, 0, 9999);
// Routine Array
eventsArray = [diarrhea, cold, cancer];

// ITEMS FROM SHOP
// Shop Item Function
function ShopItem(nameI, typeI, buyI, sellI, healthI, moraleI, usageCountI, boughtI, shopDivI, shopBtnI, inventoryDivI, inventoryBtnI, DOMpriceBuyI, DOMpriceSellI) {
  this.nameI = nameI;
  this.typeI = typeI;
  this.buyI = buyI;
  this.sellI = sellI;
  this.healthI = healthI;
  this.moraleI = moraleI;
  this.usageCountI = usageCountI;
  this.boughtI = boughtI;
  this.shopDivI = shopDivI;
  this.shopBtnI = shopBtnI;
  this.inventoryDivI = inventoryDivI;
  this.inventoryBtnI = inventoryBtnI;
  this.DOMpriceBuyI = DOMpriceBuyI;
  this.DOMpriceSellI = DOMpriceSellI;
};
// Shop Items Variables - permanent items
let phone = new ShopItem('phone', 'permanent', 200, 100, 0, 1, 0, false, document.querySelector('#shopPhone'), document.querySelector('#buyPhone'), document.querySelector('#ownedPhone'), document.querySelector('#sellPhone'), document.querySelector('#phoneDOMprice'), document.querySelector('#phoneDOMpriceSell'));
let car = new ShopItem('car', 'permanent', 5000, 3000, -1, 2, 0, false, document.querySelector('#shopCar'), document.querySelector('#buyCar'), document.querySelector('#ownedCar'), document.querySelector('#sellCar'), document.querySelector('#carDOMprice'), document.querySelector('#carDOMpriceSell'));
let plane = new ShopItem('plane','permanent', 100000, 50000, 1, 5, 0, false, document.querySelector('#shopPlane'), document.querySelector('#buyPlane'), document.querySelector('#ownedPlane'), document.querySelector('#sellPlane'), document.querySelector('#planeDOMprice'), document.querySelector('#planeDOMpriceSell'));
// Shop Items Variables - instant
let alcohol = new ShopItem('alcohol', 'instant', 100, undefined, -1, 1, 0, false, document.querySelector('#shopAlcohol'), document.querySelector('#buyAlcohol'), undefined, undefined, document.querySelector('#alcoholDOMprice'), undefined);
// Shop Items Variables - medicine
let treatmentCold = new ShopItem('cold treatment', 'medicine', 50, undefined, 0, -1, 0, false, document.querySelector('#shopTreatmentCold'), document.querySelector('#buyTreatmentCold'), undefined, undefined, document.querySelector('#tColdDOMprice'), undefined);
let treatmentDiarrhea = new ShopItem('diarrhea treatment', 'medicine', 10, undefined, 0, -1, 0, false, document.querySelector('#shopTreatmentDiarrhea'), document.querySelector('#buyTreatmentDiarrhea'), undefined, undefined, document.querySelector('#tDiarrheaDOMprice'), undefined);
let treatmentCancer = new ShopItem('cancer treatment', 'medicine', 10000, undefined, 0, -3, 0, false, document.querySelector('#shopTreatmentCancer'), document.querySelector('#buyTreatmentCancer'), undefined, undefined, document.querySelector('#tCancerDOMprice'), undefined);
// Shop Items Array (permanent & instant)
let itemsArray = [phone, car, plane, alcohol, treatmentDiarrhea, treatmentCold, treatmentCancer];

// META MESSAGES
let msgBuy = 'Congratulations with new purchase! You bought ';
let msgSell = 'Items are good, but money is better. You sold ';
let msgIllnessStart = 'Unfortunately, now you got some problem with health. You got ill with ';
let msgHeal = 'Medicine worked perfectly and you are no longer suffer from ';
let msgEnd = 'You have suffered enough. Time healed you from ';
let msgNotIll = 'It\'s great that you took medicine, but you weren\'t even suffering form ';



////////////////////// GAME \\\\\\\\\\\\\\\\\\\\\\\\\
// GAME STAGE 0 (WELCOME SCREEN)
window.addEventListener('load', birth);
function birth() {
  birthStage.style.display = 'block';
  statsStage.style.display = 'none';
  gameStage.style.display = 'none';
  deathStage.style.display = 'none';
  month = 216;
  money = 0;
  health = 0;
  morale = 0;
};


//// GAME STAGE 1 (Click button - get stats) \\\\
birthButton.addEventListener('click', startNewLife);
function startNewLife() {
  birthStage.style.display = 'none';
  statsStage.style.display = 'block';
  gameStage.style.display = 'none';
  deathStage.style.display = 'none';

  // Function to get random money
  function getRandomMoney(){
    var num = Math.random();
    if (num < 0.6) {
      money = 10000;
    } else if (num < 0.9) {
      money = 100000
    } else if (num < 0.99) {
      money = 1000000;
    } else {
      money = 10000000;
    };
  };

  // Function to get random health
  function getRandomHealth(){
    var num = Math.random();
    if (num < 0.4) {
      health = 50;
    } else if (num < 0.6) {
      health = 70;
    } else if (num < 0.8) {
      health = 80;
    } else {
      health = 90;
    };
  };

  // Init functions to get stats for new game
  getRandomMoney();
  getRandomHealth();
  morale = 50;

  // Show results in the stat stage
  moneyStatDisplay.innerHTML = money.toLocaleString('en');
  healthStatDisplay.innerHTML = health;
  moraleStatDisplay.innerHTML = morale;
};


//// GAME STAGE 2 (Click button - start new game) \\\\
statsButton.addEventListener('click', newGame);
function newGame () {
  statsStage.style.display = 'none';
  birthStage.style.display = 'none';
  gameStage.style.display = 'block';
  deathStage.style.display = 'none';
  // Show stats 
  monthDisplay.innerHTML = month;
  yearsDisplay.innerHTML = Math.floor(month/12);
  updateStats();
  // Reset everything
  resetShop();
  resetMessages();
  resetEvents();
  resetUsageCount();
  showPrices();
};


//// GAME STAGE 3 (GAME) \\\\
gameButton.addEventListener('click', liveOneMonth);
function liveOneMonth() {
  month++;
  monthDisplay.innerHTML = month;
  yearsDisplay.innerHTML = Math.floor(month/12);

  // Routine Influence
  routineArray.forEach(function(someRoutine) {
    if (someRoutine.DOMR.selected === true) {
      money = money + someRoutine.moneyR;
      health = health + someRoutine.healthR;
      morale = morale + someRoutine.moraleR;
    };
  });

  // Events Influence
  eventsArray.forEach(function(someEvent) {
    if (someEvent.isHappeningE === true) {
      money = money + someEvent.moneyE;
      health = health + someEvent.healthE;
      morale = morale + someEvent.moraleE;
      someEvent.durationE++;
      if (someEvent.durationE >= someEvent.maxDurationE) {
        someEvent.isHappeningE = false;
        someEvent.durationE = 0;
        someEvent.DOME.style.display = 'none'; 
        message(msgEnd + someEvent.nameE);
      };
    };
  });
  // Check is event happening
  eventsArray.forEach(function(someEvent) {
    if (someEvent.isHappeningE === false) {
      var badLuck = Math.random();
      // Counts coeffMulitiplier based on someEvents coeffs and present stats
      var coeffMultiplier = 2 - (((health * someEvent.healthCoeffE) + (morale * someEvent.moraleCoeffE)) / 100);
      // Multiplies coeff with someEvents probability
      var eventProbability = someEvent.probabilityE * coeffMultiplier;
      // Counts risk
      var risk = eventProbability + badLuck;
      // If risk is more than 1, then event happens and show in UI
      if (risk >= 1) {
        someEvent.isHappeningE = true;
        someEvent.DOME.style.display = 'block';
        message(msgIllnessStart + ' ' + someEvent.nameE);
      };
    };
  });

  // Items Influence
  itemsArray.forEach(function(someItem) {
    if (someItem.boughtI === true) {
      health = health + someItem.healthI;
      morale = morale + someItem.moraleI;
      someItem.usageCountI ++;
    };
  });

  // Stats influencing stats
  // Broke decrease morale
  if (money <= 0) {
    morale = morale - 3;
    health = health - 1;
  };
  // Morale decrease health 
  if (morale <= 0) {
    health = health - 5;
  }; 
  
  // Show Updated Correct Stats (can't be negative)
  updateStats();

  // End game if health ended
  if (health <= 0 ) {
    youDead();
  };
};


//// GAME STAGE 3.1 (SHOP) \\\\
// Select item array to initiate function to buy or seell if someItem is clicked
itemsArray.forEach(function(someItem) {
  clickToBuy(someItem);
  clickToSell(someItem);
});

// BUY
// Function listens to click on one of those items and initiates function to buy someItemFromShop
function clickToBuy(someItemFromShop) {
  someItemFromShop.shopBtnI.addEventListener('click', functionToBuy);
  // Functions starts another function to buy specific item
  function functionToBuy() {
    buySpecificItem(someItemFromShop);
  };
};

// certainItem is bought - divs manipulated, all stats changed 
function buySpecificItem(certaintItem) {
  if (certaintItem.typeI === 'permanent') {
    certaintItem.shopDivI.style.display = 'none';
    certaintItem.inventoryDivI.style.display = 'block';
    certaintItem.boughtI = true;
    message(msgBuy + certaintItem.nameI + ' for ' + certaintItem.buyI + '$');
  };
  if (certaintItem.typeI === 'instant') {
    morale = morale + certaintItem.moraleI;
    health = health + certaintItem.healthI;
    certaintItem.usageCountI ++;
    message(msgBuy + certaintItem.nameI + ' for ' + certaintItem.buyI + '$');
  };
  if (certaintItem.typeI === 'medicine') {
    morale = morale + certaintItem.moraleI;
    health = health + certaintItem.healthI;
    certaintItem.usageCountI ++;
    certaintItem.boughtI = true; //Make true so certaintItem can heal
    // Special healing for different diseases
    if (certaintItem.nameI === 'cold treatment') { coldHeal(); };
    if (certaintItem.nameI === 'diarrhea treatment') { diarrheaHeal(); };
    if (certaintItem.nameI === 'cancer treatment') { cancerHeal(); };
    certaintItem.boughtI = false; //Make false so certaintItem is no longer bought
    updateEvents();
  };
  money = money - certaintItem.buyI;
  updateStats();
};

// Healing diseases
function coldHeal() { isHealing(cold, treatmentCold); };
function diarrheaHeal() { isHealing(diarrhea, treatmentDiarrhea); };
function cancerHeal() { isHealing(cancer, treatmentCancer); };

//Commom Healing Function 
function isHealing(someEvent, someItem) {
  // If player isn't ill - show that medicine wasn't necessary 
  if (someEvent.isHappeningE === false) {
    message(msgNotIll + someEvent.nameE);
  } else if (someEvent.isHappeningE === true) {
    if (someItem.boughtI === true) {
      someEvent.isHappeningE = false;
    };
    message(msgHeal + someEvent.nameE);
  };
};

// SELL (same structure, difference - to check if item is permanent, because instant got btn undefined)
function clickToSell(someItemFromInventory) {
  if (someItemFromInventory.typeI === 'permanent') {
    someItemFromInventory.inventoryBtnI.addEventListener('click', functionToSell);
  };
  // Functions starts another function to sell specific item
  function functionToSell() {
    sellSpecificItem(someItemFromInventory);
  };
};

// certainItem is sold - divs manipulated, money comes back 
function sellSpecificItem(someItem) {
  someItem.shopDivI.style.display = 'block';
  someItem.inventoryDivI.style.display = 'none';
  money = money + someItem.sellI;
  someItem.boughtI = false;
  updateStats();
  message(msgSell + someItem.nameI + ' for ' + someItem.sellI + '$');
  someItem.usageCountI = 0;
};


//// GAME STAGE 4 (DEATH) \\\\\
function youDead () {
  statsStage.style.display = 'none';
  birthStage.style.display = 'none';
  gameStage.style.display = 'none';
  deathStage.style.display = 'block';
  deathMonths.innerHTML = month;
  deathYears.innerHTML = Math.floor(month/12);
};

restartButton.addEventListener('click', birth);



/////////////////////// UTILITY FUNCTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\
// Function To Update Stats in UI and forbid going negative
function updateStats () {
  // Morale Limit to 0
  if (morale < 0) {
    morale = 0;
  };
  // Morale Limit to 100
  if (morale > 100) {
    morale = 100;
  }
  // Health Limit to 100
  if (health > 100) {
    health = 100;
  }
  // Show Stats In UI
  moneyDisplay.innerHTML = money.toLocaleString('en');
  healthDisplay.innerHTML = health;
  moraleDisplay.innerHTML = morale;
};

// Send Message to player
function message(theme) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`- ${theme}`));
  messages.insertBefore(li, messages.firstChild);
};

// Reset Shop
function resetShop() {
  itemsArray.forEach(function(someItem) {
    if (someItem.typeI === 'permanent') {
      someItem.boughtI = false;
      someItem.inventoryDivI.style.display = 'none';
      someItem.shopDivI.style.display = 'block';
    };
  });
};

// Reset Messages
function resetMessages() {
  const messages = document.querySelector('#messages');
  messages.innerHTML = '';
};

// Reset Events
function resetEvents() {
  eventsArray.forEach(function(someEvent) {
    someEvent.DOME.style.display = 'none';
    someEvent.isHappeningE = false;
  });
};

// Rest Usage Count
function resetUsageCount() {
  itemsArray.forEach(function(someItem) {
    someItem.usageCountI = 0;
  });
};

// Update Events
function updateEvents() {
  eventsArray.forEach(function(someEvent) {
    if (someEvent.isHappeningE === true) {
      someEvent.DOME.style.display = 'block';
    } else if (someEvent.isHappeningE === false) {
      someEvent.DOME.style.display = 'none';
    };
  });
};

// Show prices
function showPrices() {
  itemsArray.forEach(function(someItem) {
    someItem.DOMpriceBuyI.innerHTML = someItem.buyI.toLocaleString('en');
    if (someItem.typeI === 'permanent') {
      someItem.DOMpriceSellI.innerHTML = someItem.sellI.toLocaleString('en');
    };
  });
};
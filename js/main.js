///////////////////GLOBALS\\\\\\\\\\\\\\\\\\\ 
let month;
let money;
let health; 
let morale;
let intelligence;
let prestige;

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
const intelligenceStatDisplay = document.querySelector('#statIntelligence');
const prestigeStatDisplay = document.querySelector('#statPrestige');
// Main Game DOM Variable
const monthDisplay = document.querySelector('#months');
const yearsDisplay = document.querySelector('#years');
const moneyDisplay = document.querySelector('#money');
const healthDisplay = document.querySelector('#health');
const moraleDisplay = document.querySelector('#morale');
const intelligenceDisplay = document.querySelector('#intelligence');
const prestigeDisplay = document.querySelector('#prestige');
// Death DOM Variable
const monthDeathDisplay = document.querySelector('#deathMonths');

//ROUTINE
// Routine Function
function Routine(nameR, typeR, moneyR, healthR, moraleR, intelligenceR, prestigeR, availableR, durationR, DOMR, parentDOMR, indicatorDOMR, lvl2R, money2R, lvl3R, money3R, lvl4R, money4R, lvl5R, money5R) {
  this.nameR = nameR;
  this.typeR = typeR;
  this.moneyR = moneyR;
  this.healthR = healthR;
  this.moraleR = moraleR;
  this.intelligenceR = intelligenceR;
  this.prestigeR = prestigeR;
  this.availableR = availableR;
  this.durationR = durationR;
  this.DOMR = DOMR;
  this.parentDOMR = parentDOMR;
  this.indicatorDOMR = indicatorDOMR;
  // Lvls
  this.money1R = this.moneyR; //Save initial money stat for reset
  this.lvl2R = lvl2R;
  this.money2R = money2R;
  this.lvl3R = lvl3R;
  this.money3R = money3R;
  this.lvl4R = lvl4R;
  this.money4R = money4R;
  this.lvl5R = lvl5R;
  this.money5R = money5R;
};
// Routine Variables
let unemployed = new Routine('Unemployed', 'job', 0, -1, -3, -1, -5, true, 0, document.querySelector("#unemployedJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 0, 0, 0, 0, 0, 0, 0, 0);
let cashier = new Routine('Cashier', 'job', 500, 0, -2, -1, -2,  true, 0, document.querySelector("#cheapJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 600, 12, 700, 24, 900, 60, 1500);
let webDeveloper = new Routine('Web-Dev', 'job', 2000, 0, 0, 2, 1, false, 0, document.querySelector("#midJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 2500, 24, 3000, 36, 5000, 60, 8000);
let businessman = new Routine('Businessman', 'job', 0, -1, -2, 1, 2, true, 0, document.querySelector("#luxJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 1000, 24, 1000, 36, 1000, 48, 1000, 60, 1000);
let starveFood = new Routine('Starve', 'diet', 0, -20, -20, 0, -3, true, 0, document.querySelector("#starveFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let cheapFood = new Routine('Cheap Food', 'diet', -100, -1, -1, 0, -1, true, 0, document.querySelector("#cheapFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let mediumFood = new Routine('Medium Food', 'diet', -500, 0, 0, 0, 0, true, 0, document.querySelector("#midFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let expensiveFood = new Routine('Expensive Food', 'diet', -1000, 1, 2, 0, 2, true, 0, document.querySelector("#luxFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
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
let cold = new Event('cold', 'illness', document.querySelector("#eventCold"), 0, -1, -1, false, 0.0001, 0.5, 0.5, 0, 1);
let diarrhea = new Event('diarrhea', 'illness', document.querySelector("#eventDiarrhea"), 0, 0, -2, false, 0.0001, 1, 0, 0, 3);
let cancer = new Event('cancer', 'illness', document.querySelector("#eventCancer"), 0, -5, -5, false, 0.0001, 0.5, 0.5, 0, 9999);
let lostWallet = new Event ('lost your wallet', 'accident', document.querySelector("#eventLostWallet"), -100, 0, -1,	false, 0.0001, 0, 1, 0, 0)
// Routine Array
eventsArray = [diarrhea, cold, cancer, lostWallet];

// ITEMS FROM SHOP
// Shop Item Function
function ShopItem(nameI, typeI, buyI, maintenanceI, healthI, moraleI, usageCountI, lifeTimeI, effectivenessI, boughtI, shopDivI, shopBtnI, inventoryDivI, inventoryBtnI, DOMpriceBuyI, DOMpriceSellI, DOMmonthlyCostI) {
  this.nameI = nameI;
  this.typeI = typeI;
  this.buyI = buyI;
  this.sellI = function() { return Math.round(this.buyI - ((this.buyI / this.lifeTimeI) * this.usageCountI)); };
  this.maintenanceI = maintenanceI;
  this.healthI = healthI;
  this.moraleI = moraleI;
  this.usageCountI = usageCountI;
  this.lifeTimeI = lifeTimeI;
  this.effectivenessI = effectivenessI;
  this.boughtI = boughtI;
  // DOMS
  this.shopDivI = shopDivI;
  this.shopBtnI = shopBtnI;
  this.inventoryDivI = inventoryDivI;
  this.inventoryBtnI = inventoryBtnI;
  this.DOMpriceBuyI = DOMpriceBuyI;
  this.DOMpriceSellI = DOMpriceSellI;
  this.DOMmonthlyCostI = DOMmonthlyCostI;
};
// Shop Items Variables - permanent items
let phone = new ShopItem('phone', 'permanent', 200, -10, 0, 1, 0, 24, undefined, false, document.querySelector('#shopPhone'), document.querySelector('#buyPhone'), document.querySelector('#ownedPhone'), document.querySelector('#sellPhone'), document.querySelector('#phoneDOMprice'), document.querySelector('#phoneDOMpriceSell'), document.querySelector('#phoneDOMmonthlyCost'));
let car = new ShopItem('car', 'permanent', 5000, -100, -1, 2, 0, 120, undefined, false, document.querySelector('#shopCar'), document.querySelector('#buyCar'), document.querySelector('#ownedCar'), document.querySelector('#sellCar'), document.querySelector('#carDOMprice'), document.querySelector('#carDOMpriceSell'), document.querySelector('#carDOMmonthlyCost'));
let plane = new ShopItem('plane','permanent', 100000, -10000, 1, 5, 0, 240, undefined, false, document.querySelector('#shopPlane'), document.querySelector('#buyPlane'), document.querySelector('#ownedPlane'), document.querySelector('#sellPlane'), document.querySelector('#planeDOMprice'), document.querySelector('#planeDOMpriceSell'), document.querySelector('#planeDOMmonthlyCost'));
// Shop Items Variables - instant
let alcohol = new ShopItem('alcohol', 'instant', 100, undefined, -1, 1, 0, undefined, undefined, false, document.querySelector('#shopAlcohol'), document.querySelector('#buyAlcohol'), undefined, undefined, document.querySelector('#alcoholDOMprice'), undefined);
// Shop Items Variables - medicine
let treatmentCold = new ShopItem('cold treatment', 'medicine', 50, undefined, 0, -1, 0, undefined, 0.5, false, document.querySelector('#shopTreatmentCold'), document.querySelector('#buyTreatmentCold'), undefined, undefined, document.querySelector('#tColdDOMprice'), undefined);
let treatmentDiarrhea = new ShopItem('diarrhea treatment', 'medicine', 10, undefined, 0, -1, 0, undefined, 0.4, false, document.querySelector('#shopTreatmentDiarrhea'), document.querySelector('#buyTreatmentDiarrhea'), undefined, undefined, document.querySelector('#tDiarrheaDOMprice'), undefined);
let treatmentCancer = new ShopItem('cancer treatment', 'medicine', 10000, undefined, 0, -3, 0, undefined, 0.1, false, document.querySelector('#shopTreatmentCancer'), document.querySelector('#buyTreatmentCancer'), undefined, undefined, document.querySelector('#tCancerDOMprice'), undefined);
// Shop Items Array (permanent & instant)
let itemsArray = [phone, car, plane, alcohol, treatmentDiarrhea, treatmentCold, treatmentCancer];



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
  intelligence = 0;
  prestige = 0;
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
      prestige = 10;
    } else if (num < 0.9) {
      money = 100000;
      prestige = 30;
    } else if (num < 0.99) {
      money = 1000000;
      prestige = 50;
    } else {
      money = 10000000;
      prestige = 70;
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
  
  // Function to get random intelligence
  function getRandomIntelligence(){
    var num = Math.random();
    intelligence = Math.round(num * 100);
  };
  
  // Init functions to get stats for new game
  getRandomMoney();
  getRandomHealth();
  morale = 50;
  getRandomIntelligence();

  // Show results in the stat stage
  moneyStatDisplay.innerHTML = money.toLocaleString('en');
  healthStatDisplay.innerHTML = health;
  moraleStatDisplay.innerHTML = morale;
  intelligenceStatDisplay.innerHTML = intelligence;
  prestigeStatDisplay.innerHTML = prestige;
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
  checkForDisabled();
  resetSelected();
  resetRoutine();
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
      // Change income from job depending on experience
      if (someRoutine.typeR === 'job') {
        if (someRoutine.nameR === 'Businessman') {
          businessManSalary();
        } else if (someRoutine.durationR === someRoutine.lvl2R) {
          someRoutine.moneyR = someRoutine.money2R;
        } else if (someRoutine.durationR === someRoutine.lvl3R) {
          someRoutine.moneyR = someRoutine.money3R;
        } else if (someRoutine.durationR === someRoutine.lvl4R) {
          someRoutine.moneyR = someRoutine.money4R;
        } else if (someRoutine.durationR === someRoutine.lvl5R) {
          someRoutine.moneyR = someRoutine.money5R;
        };
      };
      someRoutine.indicatorDOMR.innerHTML = someRoutine.moneyR;
      money = money + someRoutine.moneyR;
      health = health + someRoutine.healthR;
      morale = morale + someRoutine.moraleR;
      intelligence = intelligence + someRoutine.intelligenceR;
      prestige = prestige + someRoutine.prestigeR;
      someRoutine.durationR++;
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
        if (someEvent.typeE === 'illness') {
          someEvent.isHappeningE = true;
          someEvent.DOME.style.display = 'block';
          message(msgIllnessStart + ' ' + someEvent.nameE);
        } else if (someEvent.typeE === 'accident') {
          money = money + someEvent.moneyE;
          health = health + someEvent.healthE;
          morale = morale + someEvent.moraleE;
          message(msgAccident + someEvent.nameE);
        };
      };
    };
  });

  // Items Influence
  itemsArray.forEach(function(someItem) {
    if (someItem.boughtI === true) {
      //Check if item is broken
      if (someItem.sellI() <= 0) {
        someItem.boughtI = false;
        someItem.usageCountI = 0;
        someItem.shopDivI.style.display = 'block';
        someItem.inventoryDivI.style.display = 'none';
        message(someItem.nameI + msgItemBroke);
        showPrices();
      } else {
        money = money + someItem.maintenanceI;
        health = health + someItem.healthI;
        morale = morale + someItem.moraleI;
        someItem.usageCountI ++;
        showPrices();
      };
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
  
  // Check for disabled options
  checkForDisabled();

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
    showPrices();
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
      var goodLuck = Math.random();
      if (goodLuck < someItem.effectivenessI) {
        someEvent.isHappeningE = false;
        message(msgHeal + someEvent.nameE);
      } else if (goodLuck > someItem.effectivenessI) {
        message(msgMedicineNotWorked + someEvent.nameE);
      };
    };
    
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
  money = money + someItem.sellI();
  someItem.boughtI = false;
  updateStats();
  message(msgSell + someItem.nameI + ' for ' + someItem.sellI() + '$');
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
////Functions called at certain moments of the app\\\\

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
  // Intelligence Limit to 0
  if (intelligence < 0) {
    intelligence = 0;
  };
  // Intelligence Limit to 100
  if (intelligence > 100) {
    intelligence = 100;
  }
  // Prestige Limit to 0
  if (prestige < 0) {
    prestige = 0;
  };
  // Pretige Limit to 100
  if (prestige > 100) {
    prestige = 100;
  }
  // Show Stats In UI
  moneyDisplay.innerHTML = money.toLocaleString('en');
  healthDisplay.innerHTML = health;
  moraleDisplay.innerHTML = morale;
  intelligenceDisplay.innerHTML = intelligence;
  prestigeDisplay.innerHTML = prestige;
};

// Send Message to player
function message(theme) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`Month ${month}: ${theme}`));
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

// Reset Events
function resetEvents() {
  eventsArray.forEach(function(someEvent) {
    someEvent.DOME.style.display = 'none';
    someEvent.isHappeningE = false;
  });
};

// Reset Routine
function resetRoutine() {
  routineArray.forEach(function(someRoutine) {
    someRoutine.durationR = 0;
    someRoutine.moneyR = someRoutine.money1R;
    someRoutine.indicatorDOMR.innerHTML = 0;
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
      someItem.DOMpriceSellI.innerHTML = someItem.sellI().toLocaleString('en');
      someItem.DOMmonthlyCostI.innerHTML = someItem.maintenanceI.toLocaleString('en');
    };
  });
};

// Check for disabled options
function checkForDisabled() {
  routineArray.forEach(function(someRoutine) {
    if (someRoutine.availableR === false) {
      someRoutine.DOMR.disabled = true; 
      if (someRoutine.DOMR.selected) {
        someRoutine.parentDOMR.value = 0;
        message(msgFired + someRoutine.nameR);
      };
    } else if (someRoutine.availableR === true) {
      someRoutine.DOMR.disabled = false; 
    };
  });
};

// Businessman salary function
function businessManSalary (){
  var luck = Math.round(Math.random());
  if (morale <= 10) {
    businessman.moneyR = 100 + (luck * businessman.durationR);
  } else if (morale <= 50) {
    businessman.moneyR = 500 + (luck * businessman.durationR);
  } else if (morale <= 100) {
    businessman.moneyR = 1000 + (luck * businessman.durationR);
  };
};

// Reset Selected
function resetSelected() {
  document.querySelector("#job").value = 0;
  document.querySelector("#food").value = 0;
};

// Reset Messages
function resetMessages() {
  const messages = document.querySelector('#messages');
  messages.innerHTML = '';
};
// Messages
let msgBuy = 'Congratulations with new purchase! You bought ';
let msgSell = 'Items are good, but money is better. You sold ';
let msgIllnessStart = 'Unfortunately, now you got some problem with health. You got ill with ';
let msgHeal = 'Medicine worked perfectly and you are no longer suffering from ';
let msgEnd = 'You have suffered enough. Time healed you from ';
let msgMedicineNotWorked = 'Treatment that you took wasn\'t effective. You still ill with ';
let msgNotIll = 'It\'s great that you took medicine, but you weren\'t even suffering form ';
let msgAccident = 'Damn! Bad luck! You ';
let msgFired = 'Your company decided that you are no longer fit for the job and fired you. You no longer work as ';
let msgItemBroke = ' worked you well for quite a time. Unfortunately, it broke.';



/////////////////////// BACKGROUND FUNCTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\
////Functions catching events to execute action\\\\

// ROUTINE COSTS AND SALARY SHOWING IN UI
// Apply function to all items in routine array
routineArray.forEach(function(someRoutine) {
  changeNumbers(someRoutine);
});

// Function listens to change in any routine DOM to execute function to show new numbers
function changeNumbers(anotherRoutine2) {
  anotherRoutine2.parentDOMR.addEventListener('change', functionToChange);
  function functionToChange() {
    showNewNumbers(anotherRoutine2);
  };
};

// Function showing new numbers in DOM
function showNewNumbers(certainRoutine) {
  if (certainRoutine.DOMR.selected) {
    certainRoutine.indicatorDOMR.innerHTML = certainRoutine.moneyR;
  };
};



////////////////////////////////////////// Ideas for features

// // Disable option in certain cases
// if (morale === 100) {
//   webDeveloper.availableR = true;
// };

// if (health < 30) {
//   cashier.availableR = false;
// };

// if (cancer.isHappeningE === true) {
//   cheapFood.availableR = false;
// };
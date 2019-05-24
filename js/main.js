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
function Routine(name, type, DOM, money, health, morale, disabledOption) {
  this.name = name;
  this.type = type;
  this.DOM = DOM;
  this.money = money;
  this.health = health;
  this.morale = morale;
  this.disabledOption = disabledOption;
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
function Event(name, type, DOM, money, health, morale, isHappening, probability, healthCoeff, moraleCoeff, duration, maxDuration, messageBegin, messageEnd) {
  this.name = name;
  this.type = type;
  this.DOM = DOM;
  this.money = money;
  this.health = health;
  this.morale = morale;
  this.isHappening = isHappening;
  this.probability = probability;
  this.healthCoeff = healthCoeff; 
  this.moraleCoeff = moraleCoeff; //Health+Morale Coeff Should not be more than 1
  this.duration = duration;
  this.maxDuration = maxDuration;
  this.messageBegin = messageBegin;
  this.messageEnd = messageEnd;
};
// Routine Variables
let cold = new Event('Cold', 'illness', document.querySelector("#eventCold"), 0, -1, -1, false, 0.1, 0.5, 0.5, 0, 1, 'Youve just got ill with cold', 'You are suffered enough. Cold is over');
let diarrhea = new Event('Diarrhea', 'illness', document.querySelector("#eventDiarrhea"), 0, 0, -2, false, 0.05, 1, 0, 0, 3, 'Youve just got ill with diarhhea', 'You are suffered enough. Diarrhea is over');
let cancer = new Event('Cancer', 'illness', document.querySelector("#eventCancer"), 0, -5, -5, false, 0.01, 0.5, 0.5, 0, 9999,'Youve just got ill with cancer', 'You are suffered enough. Cancer is over');
// Routine Array
eventsArray = [diarrhea, cold, cancer];

// SHOP
// Shop Item Function
function ShopItem(name, type, buy, sell, health, morale, bought, shopDiv, shopBtn, inventoryDiv, inventoryBtn, messageBought, messageSold, usageCount) {
  this.name = name;
  this.type = type;
  this.buy = buy;
  this.sell = sell;
  this.health = health;
  this.morale = morale;
  this.bought = bought;
  this.shopDiv = shopDiv;
  this.shopBtn = shopBtn;
  this.inventoryDiv = inventoryDiv;
  this.inventoryBtn = inventoryBtn;
  this.messageBought = messageBought;
  this.messageSold = messageSold;
  this.usageCount = usageCount;
};
// Shop Items Variables - permanent items
let phone = new ShopItem('Phone', 'permanent', 200, 100, 0, 1, false, document.querySelector('#shopPhone'), document.querySelector('#buyPhone'), document.querySelector('#ownedPhone'), document.querySelector('#sellPhone'), 'Congratulations, you bought phone!', 'Congratulations, you sold your phone!', 0, undefined);
let car = new ShopItem('Car', 'permanent', 5000, 3000, -1, 2, false, document.querySelector('#shopCar'), document.querySelector('#buyCar'), document.querySelector('#ownedCar'), document.querySelector('#sellCar'), 'Congratulations, you bought car!', 'Congratulations, you sold your car!', 0, undefined);
let plane = new ShopItem('Plane','permanent', 100000, 50000, 1, 5, false, document.querySelector('#shopPlane'), document.querySelector('#buyPlane'), document.querySelector('#ownedPlane'), document.querySelector('#sellPlane'), 'Congratulations, you bought plane!', 'Congratulations, you sold your plane!', 0);
// Shop Items Variables - instant
let alcohol = new ShopItem('Alcohol', 'instant', 100, undefined, -1, 1, false, document.querySelector('#shopAlcohol'), document.querySelector('#buyAlcohol'), undefined, undefined, 'Congratulations, you bought alcohol!', undefined, 0, undefined);
let treatmentCold = new ShopItem('Cold Treatment', 'instant', 50, undefined, 0, -1, false, document.querySelector('#shopTreatmentCold'), document.querySelector('#buyTreatmentCold'), undefined, undefined, 'Congratulations, you took medicine and no longer suffer from cold', undefined, 0);
let treatmentDiarrhea = new ShopItem('Diarrhea Treatment', 'instant', 10, undefined, 0, -1, false, document.querySelector('#shopTreatmentDiarrhea'), document.querySelector('#buyTreatmentDiarrhea'), undefined, undefined, 'Congratulations, you took medicine and no longer suffer from diarrhea', undefined, 0);
let treatmentCancer = new ShopItem('Cancer Treatment', 'instant', 10000, undefined, 0, -3, false, document.querySelector('#shopTreatmentCancer'), document.querySelector('#buyTreatmentCancer'), undefined, undefined, 'Congratulations, you took medicine and no longer suffer from cancer', undefined, 0);
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
};


//// GAME STAGE 3 (GAME) \\\\
gameButton.addEventListener('click', liveOneMonth);
function liveOneMonth() {
  month++;
  monthDisplay.innerHTML = month;
  yearsDisplay.innerHTML = Math.floor(month/12);

  // Routine Influence
  routineArray.forEach(function(item) {
    if (item.DOM.selected === true) {
      money = money + item.money;
      health = health + item.health;
      morale = morale + item.morale;
    };
  });

  // Events Influence
  eventsArray.forEach(function(item) {
    if (item.isHappening === true) {
      money = money + item.money;
      health = health + item.health;
      morale = morale + item.morale;
      item.duration++;
      if (item.duration >= item.maxDuration) {
        item.isHappening = false;
        item.duration = 0;
        item.DOM.style.display = 'none'; 
        message(item.messageEnd); 
      };
    };
  });
  // Check is event happening
  eventsArray.forEach(function(item) {
    if (item.isHappening === false) {
      var badLuck = Math.random();
      // Counts coeffMulitiplier based on items coeffs and present stats
      var coeffMultiplier = 2 - (((health * item.healthCoeff) + (morale * item.moraleCoeff)) / 100);
      // Multiplies coeff with items probability
      var eventProbability = item.probability * coeffMultiplier;
      // Counts risk
      var risk = eventProbability + badLuck;
      // If risk is more than 1, then event happens and show in UI
      if (risk >= 1) {
        item.isHappening = true;
        item.DOM.style.display = 'block';
        message(item.messageBegin);
      };
    };
  });

  // Items Influence
  itemsArray.forEach(function(item) {
    if (item.bought === true) {
      health = health + item.health;
      morale = morale + item.morale;
      item.usageCount ++;
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
  someItemFromShop.shopBtn.addEventListener('click', functionToBuy);
  // Functions starts another function to buy specific item
  function functionToBuy() {
    buySpecificItem(someItemFromShop);
  };
};

// certainItem is bought - divs manipulated, all stats changed 
function buySpecificItem(item) {
  if (item.type === 'permanent') {
    item.shopDiv.style.display = 'none';
    item.inventoryDiv.style.display = 'block';
    item.bought = true;
  };
  if (item.type === 'instant') {
    morale = morale + item.morale;
    health = health + item.health;
    item.usageCount ++;
    item.bought = true; //Make true so item can heal
    // Special healing for different diseases
    if (item.name === 'Cold Treatment') { coldHeal(); };
    if (item.name === 'Diarrhea Treatment') { diarrheaHeal(); };
    if (item.name === 'Cancer Treatment') { cancerHeal(); };
    item.bought = false; //Make false so item is no longer bought
    updateEvents();
  };
  money = money - item.buy;
  updateStats();
  message(item.messageBought);
};

// Healing diseases
function coldHeal() { isHealing(cold, treatmentCold); };
function diarrheaHeal() { isHealing(diarrhea, treatmentDiarrhea); };
function cancerHeal() { isHealing(cancer, treatmentCancer); };

//Commom Healing Function 
function isHealing(item1, item2) {
  if (item2.bought === true) {
    item1.isHappening = false;
  };
};

// SELL (same structure, difference - to check if item is permanent, because instant got btn undefined)
function clickToSell(someItemFromInventory) {
  if (someItemFromInventory.type === 'permanent') {
    someItemFromInventory.inventoryBtn.addEventListener('click', functionToSell);
  };
  // Functions starts another function to sell specific item
  function functionToSell() {
    sellSpecificItem(someItemFromInventory);
  };
};

// certainItem is sold - divs manipulated, money comes back 
function sellSpecificItem(item) {
  item.shopDiv.style.display = 'block';
  item.inventoryDiv.style.display = 'none';
  money = money + item.sell;
  item.bought = false;
  updateStats();
  message(item.messageSold);
  // sendMessage(item);
  item.usageCount = 0;
  console.log(item.usageCount);
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
  itemsArray.forEach(function(item) {
    if (item.type === 'permanent') {
      item.bought = false;
      item.inventoryDiv.style.display = 'none';
      item.shopDiv.style.display = 'block';
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
  eventsArray.forEach(function(item) {
    item.DOM.style.display = 'none';
    item.isHappening = false;
  });
};

// Rest Usage Count
function resetUsageCount() {
  itemsArray.forEach(function(item) {
    item.usageCount = 0;
  });
};

// Update Events
function updateEvents() {
  eventsArray.forEach(function(item) {
    if (item.isHappening === true) {
      item.DOM.style.display = 'block';
    } else if (item.isHappening === false) {
      item.DOM.style.display = 'none';
    };
  });
};
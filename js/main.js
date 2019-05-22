//GLOBALS 
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
function Routine(name, type, DOM, money, health, morale, disabledOption) {
  this.name = name;
  this.type = type;
  this.DOM = DOM;
  this.money = money;
  this.health = health;
  this.morale = morale;
  this.disabledOption = disabledOption;
};

let unemployed = new Routine('Unemployed', 'job', document.querySelector("#unemployedJob"), 0, -3, -5, false);
let cashier = new Routine('Cashier', 'job', document.querySelector("#cheapJob"), 500, 0, -2, false);
let webDeveloper = new Routine('Web-Dev', 'job', document.querySelector("#midJob"), 2000, 0, 0, false);
let businessman = new Routine('Businessman', 'job', document.querySelector("#luxJob"), 5000, -1, -2, true);
let starveFood = new Routine('Starve', 'diet', document.querySelector("#starveFood"), 0, -20, -20, false);
let cheapFood = new Routine('Cheap Food', 'diet', document.querySelector("#cheapFood"), -100, -1, -1, false);
let mediumFood = new Routine('Medium Food', 'diet', document.querySelector("#midFood"), -500, 0, 0, false);
let expensiveFood = new Routine('Expensive Food', 'diet', document.querySelector("#luxFood"), -1000, 1, 2, false);

routineArray = [unemployed, cashier, webDeveloper, businessman, starveFood, cheapFood, mediumFood, expensiveFood];

// EVENTS
function Event(name, type, DOM, money, health, morale, isHappening, probability) {
  this.name = name;
  this.type = type;
  this.DOM = DOM;
  this.money = money;
  this.health = health;
  this.morale = morale;
  this.isHappening = isHappening;
  this.probability = probability;
};

let cold = new Event('Cold', 'illness', document.querySelector("#eventCold"), 0, -1, -2, false, 0.7);
let depression = new Event('Depression', 'illness', document.querySelector("#eventDepression"), 0, -2, -1, false, 0.7);

eventsArray = [cold, depression];


// SHOP DOM
// Shop Items Class
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
  this.sellingPrice = function() {return this.name + " " + this.usageCount};
};

// Permanent Items List
let phone = new ShopItem('Phone', 'permanent', 200, 100, 0, 1, false, document.querySelector('#shopPhone'), document.querySelector('#buyPhone'), document.querySelector('#ownedPhone'), document.querySelector('#sellPhone'), 'Congratulations, you bought phone!', 'Congratulations, you sold your phone!', 0);
let car = new ShopItem('Car', 'permanent', 5000, 3000, -1, 2, false, document.querySelector('#shopCar'), document.querySelector('#buyCar'), document.querySelector('#ownedCar'), document.querySelector('#sellCar'), 'Congratulations, you bought car!', 'Congratulations, you sold your car!', 0);
let plane = new ShopItem('Plane','permanent', 100000, 50000, 1, 5, false, document.querySelector('#shopPlane'), document.querySelector('#buyPlane'), document.querySelector('#ownedPlane'), document.querySelector('#sellPlane'), 'Congratulations, you bought plane!', 'Congratulations, you sold your plane!', 0);

// Instant Items List
let alcohol = new ShopItem('Alcohol', 'instant', 100, undefined, -1, 1, undefined, document.querySelector('#shopAlcohol'), document.querySelector('#buyAlcohol'), undefined, undefined, 'Congratulations, you bought alcohol!', undefined, 0);
let treatment = new ShopItem('Treatment', 'instant', 100, undefined, 1, -1, undefined, document.querySelector('#shopTreatment'), document.querySelector('#buyTreatment'), undefined, undefined, 'Congratulations, you went through medical treatment!', undefined, 0);

// All Items Array
let itemsArray = [phone, car, plane, alcohol, treatment];

// STAGE 0 (WELCOME SCREEN)
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
  itemsArray.forEach(function(item) {
    item.usageCount = 0;
  });
};

// STAGE 1 (Click button - get stats)
birthButton.addEventListener('click', startNewLife);
function startNewLife() {
  birthStage.style.display = 'none';
  statsStage.style.display = 'block';
  gameStage.style.display = 'none';
  deathStage.style.display = 'none';
  
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

  getRandomMoney();
  getRandomHealth();
  morale = 50;

  // Show results in the stat stage
  moneyStatDisplay.innerHTML = money.toLocaleString('en');
  healthStatDisplay.innerHTML = health;
  moraleStatDisplay.innerHTML = morale;
};

// STAGE 2 (Click button - start new game)
statsButton.addEventListener('click', newGame);
function newGame () {
  statsStage.style.display = 'none';
  birthStage.style.display = 'none';
  gameStage.style.display = 'block';
  deathStage.style.display = 'none';

  monthDisplay.innerHTML = month;
  yearsDisplay.innerHTML = Math.floor(month/12);
  updateStats();

  resetShop();
  resetMessages();
  resetEvents();
};

// STAGE 3 (GAME)
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

  // Event Influence
  eventsArray.forEach(function(item) {
    if (item.isHappening === true) {
      money = money + item.money;
      health = health + item.health;
      morale = morale + item.morale;
    };
  });

  // Items Influence
  itemsArray.forEach(function(item) {
    if (item.bought === true) {
      health = health + item.health;
      morale = morale + item.morale;
      item.usageCount ++;
      console.log(item.usageCount);
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


  // Experimental events influence
  // eventsArray.forEach(function(item) {
  //   item.probability = item.probability + (health/100); 
  //   console.log(item.probability);
  //   if (item.probability >= 1) {
  //     item.isHappening = true;
  //     if (item.isHappening === true) {
  //       item.DOM.style.display = 'block';
  //       money = money + item.money;
  //       health = health + item.health;
  //       morale = morale + item.morale;
  //     };
  //   };
  // });

  // Low Health starts Cold
  if (health < 30) {
    cold.isHappening = true;
    cold.DOM.style.display = 'block';
  } else if (health >= 30) {
    cold.isHappening = false;
    cold.DOM.style.display = 'none';
  };
  
  // Low Morale starts Depression
  if (morale < 30) {
    depression.isHappening = true;
    depression.DOM.style.display = 'block';
  } else if (morale >= 30) {
    depression.isHappening = false;
    depression.DOM.style.display = 'none';
  };
  
  // Show Updated Correct Stats (can't be negative)
  updateStats();

  // End game if health ended
  if (health <= 0 ) {
    youDead();
  };
};

// STAGE 3.1 (SHOP)
// Select item array to initiate function to buy or seell if someItem is clicked
itemsArray.forEach(function(someItem) {
  clickToBuy(someItem);
  clickToSell(someItem);
});

// Buy
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
  };
  money = money - item.buy;
  updateStats();
  sendMessage(item);
};

// Sell - same structure, difference - to check if item is permanent, because instant got btn undefined
function clickToSell(someItemFromInventory) {
  if (someItemFromInventory.type === 'permanent') {
    someItemFromInventory.inventoryBtn.addEventListener('click', functionToSell);
  };

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
  sendMessage(item);
  item.usageCount = 0;
  console.log(item.usageCount);
};

// STAGE 4 (DEATH)
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

// Send Messages
function sendMessage(sender) {
  const li = document.createElement('li');
  if (sender.type === 'instant') {
    li.appendChild(document.createTextNode(`- ${sender.messageBought}`));
  } else if (sender.bought === true) {
    li.appendChild(document.createTextNode(`- ${sender.messageBought}`));
  } else {
    li.appendChild(document.createTextNode(`- ${sender.messageSold}`));
  };
  
  messages.insertBefore(li, messages.firstChild);
};

// Reset Shop
function resetShop() {
  itemsArray.forEach(function(item) {
    if (item.type === 'permanent') {
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
    item.isHappening = 'false';
  });
};
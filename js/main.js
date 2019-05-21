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

// SHOP DOM
// Shop Items Class
function ShopItem(name, type, buy, sell, health, morale, bought, shopDiv, shopBtn, inventoryDiv, inventoryBtn, messageBought, messageSold) {
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
};

// Permanent Items List
let phone = new ShopItem('Phone', 'permanent', 200, 100, 0, 1, false, document.querySelector('#shopPhone'), document.querySelector('#buyPhone'), document.querySelector('#ownedPhone'), document.querySelector('#sellPhone'), 'Congratulations, you bought phone!', 'Congratulations, you sold your phone!');
let car = new ShopItem('Car', 'permanent', 5000, 3000, -1, 2, false, document.querySelector('#shopCar'), document.querySelector('#buyCar'), document.querySelector('#ownedCar'), document.querySelector('#sellCar'), 'Congratulations, you bought car!', 'Congratulations, you sold your car!');
let plane = new ShopItem('Plane','permanent', 199, 100, 20, 20, false, document.querySelector('#shopPlane'), document.querySelector('#buyPlane'), document.querySelector('#ownedPlane'), document.querySelector('#sellPlane'), 'Congratulations, you bought plane!', 'Congratulations, you sold your plane!');

// Instant Items List
let alcohol = new ShopItem('Alcohol', 'instant', 100, undefined, -1, 1, undefined, document.querySelector('#shopAlcohol'), document.querySelector('#buyAlcohol'), undefined, undefined, 'Congratulations, you bought alcohol!', undefined);
let treatment = new ShopItem('Treatment', 'instant', 100, undefined, 1, -1, undefined, document.querySelector('#shopTreatment'), document.querySelector('#buyTreatment'), undefined, undefined, 'Congratulations, you went through medical treatment!', undefined);

// All Items Array
let allItems = [phone, car, plane, alcohol, treatment];

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
};

// STAGE 3 (GAME)
gameButton.addEventListener('click', liveOneMonth);
function liveOneMonth() {
  // UTILITY VARIABLES
  // Work
  let workMoney = 0;
  let workHealth = 0;
  let workMorale = 0;
  // Food
  let foodMoney = 0;
  let foodHealth = 0;
  let foodMorale = 0;
  // Home
  let homeMoney = 0;
  let homeHealth = 0;
  let homeMorale = 0;
  // Items
  let itemsMoney = 0;
  let itemsHealth = 0;
  let itemsMorale = 0;
  
  month++;
  monthDisplay.innerHTML = month;
  yearsDisplay.innerHTML = Math.floor(month/12);

  // Job Stat Influence
  if (lawyerCheck.checked) {
    workMoney = workMoney + 2000;
  } else if (webdevCheck.checked) {
    workMoney = workMoney + 4000;
  } else if (businessmanCheck.checked) {
    workMoney = workMoney + 5000;
    workMorale = workMorale - 1;
  };
  
  // Food Stat Influence
  if (cheapFood.checked) {
    foodMoney = foodMoney - 100;
    foodHealth = foodHealth - 2;
    foodMorale = foodMorale - 1;
  } else if (mediumFood.checked) {
    foodMoney = foodMoney - 500;
  } else if (expensiveFood.checked) {
    foodMoney = foodMoney - 1000;
    foodHealth = foodHealth + 1;
    foodMorale = foodMorale + 2;
  } else {
    foodHealth = foodHealth - 20;
    foodMorale = foodMorale - 10;
  };
  
  // Home Stat Influence
  if (cheapHome.checked) {
    homeMoney = homeMoney - 1000;
    homeHealth = homeHealth - 1;
    homeMorale = homeMorale - 2;
  } else if (mediumHome.checked) {
    homeMoney = homeMoney - 2000;
  } else if (expensiveHome.checked) {
    homeMoney = homeMoney - 10000;
    homeMorale = homeMorale + 3;
  } else {
    homeHealth = homeHealth - 10;
    homeMorale = homeMorale - 20;
  };

  // Items influence
  // Phone
  if (phone.bought === true) {
    itemsHealth = itemsHealth + phone.health;
    itemsMorale = itemsMorale + phone.morale;
  };
  // Car
  if (car.bought === true) {
    itemsHealth = itemsHealth + car.health;
    itemsMorale = itemsMorale + car.morale;
  };
  // Plane
  if (plane.bought === true) {
    itemsHealth = itemsHealth + plane.health;
    itemsMorale = itemsMorale + plane.morale;
  };


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

  // Getting Final Results
  money = money + (workMoney + foodMoney + homeMoney + itemsMoney);
  health = health + (workHealth + foodHealth + homeHealth + itemsHealth);
  morale = morale + (workMorale + foodMorale + homeMorale + itemsMorale);
  
  // Show Updated Correct Stats (can't be negative)
  updateStats();

  // End game if health ended
  if (health <= 0 ) {
    youDead();
  };
};

// STAGE 3.1 (SHOP AND MESSAGES)

// Reset Shop
function resetShop() {
  phone.inventoryDiv.style.display = 'none';
  phone.shopDiv.style.display = 'block';
  car.inventoryDiv.style.display = 'none';
  car.shopDiv.style.display = 'block';
  plane.inventoryDiv.style.display = 'none';
  plane.shopDiv.style.display = 'block';
};

// Reset Messages
function resetMessages () {
  const messages = document.querySelector('#messages');
  messages.innerHTML = '';
};

// PERMANENT ITEMS
// Phone
phone.shopBtn.addEventListener('click', phoneFunction);
function phoneFunction() { 
  buyPermanentItem(phone); 
};
// Car
car.shopBtn.addEventListener('click', carFunction);
function carFunction() { 
  buyPermanentItem(car); 
};
// Plane
plane.shopBtn.addEventListener('click', planeFunction);
function planeFunction() { 
  buyPermanentItem(plane); 
};

// Permanent Items Function
function buyPermanentItem(buyingPermanentItem) {
  buyingPermanentItem.shopDiv.style.display = 'none';
  buyingPermanentItem.inventoryDiv.style.display = 'block';
  money = money - buyingPermanentItem.buy;
  buyingPermanentItem.bought = true;
  updateStats();
  sendMessage(buyingPermanentItem);
};

// INSTANT ITEMS
// Alcohol
alcohol.shopBtn.addEventListener('click', alcoholFunction);
function alcoholFunction() { 
  buyInstantItem(alcohol); 
};

// Treatment
treatment.shopBtn.addEventListener('click', treatmentFunction);
function treatmentFunction() { 
  buyInstantItem(treatment); 
};

// Instant Items Function
function buyInstantItem(buyingInstantItem) {
  money = money - buyingInstantItem.buy;
  morale = morale + buyingInstantItem.morale;
  health = health + buyingInstantItem.health;
  updateStats();
  sendMessage(buyingInstantItem);
}

// Selling Item
// Phone
function clickButton (item) {
  item.BuyingBtn.addEventListener('click', item.BuyingFunction);
}

phone.inventoryBtn.addEventListener('click', phoneSellFunction);
function phoneSellFunction() { 
  sellItem(phone); 
};

// Car
car.inventoryBtn.addEventListener('click', carSellFunction);
function carSellFunction() { 
  sellItem(car); 
};

// Plane
plane.inventoryBtn.addEventListener('click', planeSellFunction);
function planeSellFunction() { 
  sellItem(plane); 
};

// Selling Function
function sellItem(sellingItem) {
  sellingItem.shopDiv.style.display = 'block';
  sellingItem.inventoryDiv.style.display = 'none';
  money = money + sellingItem.sell;
  sellingItem.bought = false;
  updateStats();
  sendMessage(sellingItem);
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


/////////////////////// UTILITY FUNCTIONS
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
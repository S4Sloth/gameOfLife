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
// 1. Permanent Items
// 1.1. Divs
// 1.1.1. Items in shop
const shopItemPhone = document.querySelector('#shopPhone');
const shopItemCar = document.querySelector('#shopCar');
const shopItemPlane = document.querySelector('#shopPlane');
// 1.1.2 Items owned
const myPropertyPhone = document.querySelector('#ownedPhone');
const myPropertyCar = document.querySelector('#ownedCar');
const myPropertyPlane = document.querySelector('#ownedPlane');
// 1.2. Buttons to...
// 1.2.1. ...buy items
const buyButtonPhone = document.querySelector('#buyPhone');
const buyButtonCar = document.querySelector('#buyCar');
const buyButtonPlane = document.querySelector('#buyPlane');
// 1.2.1. ...sell Items
const sellButtonPhone = document.querySelector('#sellPhone');
const sellButtonCar = document.querySelector('#sellCar');
const sellButtonPlane = document.querySelector('#sellPlane');

// 2. Instant items
// 2.1. Divs
const shopItemAlcohol = document.querySelector('#shopAlcohol');
const shopItemTreatment = document.querySelector('#shopTreatment');
// 2.2. Buttons
const buyButtonAlcohol = document.querySelector('#buyAlcohol');
const buyButtonTreatment = document.querySelector('#buyTreatment');

// Shop Items - permanent
function PermanentItem(namePI, type, buyPI, sellPI, healthPI, moralePI, boughtPI, shopDivPI, shopBtnPI, inventoryDivPI, inventoryBtnPI, messageBought, messageSold) {
  this.namePI = namePI;
  this.type = type;
  this.buyPI = buyPI;
  this.sellPI = sellPI;
  this.healthPI = healthPI;
  this.moralePI = moralePI;
  this.boughtPI = boughtPI;
  this.shopDivPI = shopDivPI;
  this.shopBtnPI = shopBtnPI;
  this.inventoryDivPI = inventoryDivPI;
  this.inventoryBtnPI = inventoryBtnPI;
  this.messageBought = messageBought;
  this.messageSold = messageSold;
};

// Permanent Items List
let phone = new PermanentItem('Phone', 'permanent', 200, 100, 0, 1, false, shopItemPhone, buyButtonPhone, myPropertyPhone, sellButtonPhone, 'Congratulations, you bought phone!', 'Congratulations, you sold your phone!');
let car = new PermanentItem('Plane', 'permanent', 5000, 3000, -1, 2, false, shopItemCar, buyButtonCar, myPropertyCar, sellButtonCar, 'Congratulations, you bought car!', 'Congratulations, you sold your car!');
let plane = new PermanentItem('Plane','permanent', 199, 100, 20, 20, false, shopItemPlane, buyButtonPlane, myPropertyPlane, sellButtonPlane, 'Congratulations, you bought plane!', 'Congratulations, you sold your plane!');
let test = new PermanentItem('Plane','permanent', 199, 100, 20, 20, false, shopItemPlane, buyButtonPlane, myPropertyPlane, sellButtonPlane, 'Congratulations, you bought plane!');


console.log(test.messageSold);


// Shop Items - instant
function InstantItem(nameII, type, buyII, healthII, moraleII, shopDivII, shopBtnII, messageBought) {
  this.nameII = nameII;
  this.type = type;
  this.buyII = buyII;
  this.healthII = healthII;
  this.moraleII = moraleII;
  this.shopDivII = shopDivII;
  this.shopBtnII = shopBtnII;
  this.messageBought = messageBought;
};

let alcohol = new InstantItem('Alcohol', 'instant', 100, -1, 1, shopItemAlcohol, buyButtonAlcohol, 'Congratulations, you bought alcohol!');
let treatment = new InstantItem('Treatment', 'instant', 100, 1, -1, shopItemTreatment, buyButtonTreatment, 'Congratulations, you went through medical treatment!');

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
  if (phone.boughtPI === true) {
    itemsHealth = itemsHealth + phone.healthPI;
    itemsMorale = itemsMorale + phone.moralePI;
  };
  // Car
  if (car.boughtPI === true) {
    itemsHealth = itemsHealth + car.healthPI;
    itemsMorale = itemsMorale + car.moralePI;
  };
  // Plane
  if (plane.boughtPI === true) {
    itemsHealth = itemsHealth + plane.healthPI;
    itemsMorale = itemsMorale + plane.moralePI;
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
  phone.inventoryDivPI.style.display = 'none';
  phone.shopDivPI.style.display = 'block';
  car.inventoryDivPI.style.display = 'none';
  car.shopDivPI.style.display = 'block';
  plane.inventoryDivPI.style.display = 'none';
  plane.shopDivPI.style.display = 'block';
};

// Reset Messages
function resetMessages () {
  const messages = document.querySelector('#messages');
  messages.innerHTML = '';
};

// PERMANENT ITEMS
// Phone
phone.shopBtnPI.addEventListener('click', phoneFunction);
function phoneFunction() { 
  buyPermanentItem(phone); 
};
// Car
car.shopBtnPI.addEventListener('click', carFunction);
function carFunction() { 
  buyPermanentItem(car); 
};
// Plane
plane.shopBtnPI.addEventListener('click', planeFunction);
function planeFunction() { 
  buyPermanentItem(plane); 
};

// Permanent Items Function
function buyPermanentItem(buyingPermanentItem) {
  buyingPermanentItem.shopDivPI.style.display = 'none';
  buyingPermanentItem.inventoryDivPI.style.display = 'block';
  money = money - buyingPermanentItem.buyPI;
  buyingPermanentItem.boughtPI = true;
  updateStats();
  sendMessage(buyingPermanentItem);
};

// INSTANT ITEMS
// Treatment
treatment.shopBtnII.addEventListener('click', treatmentFunction);
function treatmentFunction() { 
  buyInstantItem(treatment); 
};
// Alcohol
alcohol.shopBtnII.addEventListener('click', alcoholFunction);
function alcoholFunction() { 
  buyInstantItem(alcohol); 
};
// Instant Items Function
function buyInstantItem(buyingInstantItem) {
  money = money - buyingInstantItem.buyII;
  morale = morale + buyingInstantItem.moraleII;
  health = health + buyingInstantItem.healthII;
  updateStats();
  sendMessage(buyingInstantItem);
}

// Selling Item
// Phone
function clickButton (item) {
  item.BuyingBtn.addEventListener('click', item.BuyingFunction);
}

phone.inventoryBtnPI.addEventListener('click', phoneSellFunction);
function phoneSellFunction() { 
  sellItem(phone); 
};

// Car
car.inventoryBtnPI.addEventListener('click', carSellFunction);
function carSellFunction() { 
  sellItem(car); 
};

// Plane
plane.inventoryBtnPI.addEventListener('click', planeSellFunction);
function planeSellFunction() { 
  sellItem(plane); 
};

// Selling Function
function sellItem(sellingItem) {
  sellingItem.shopDivPI.style.display = 'block';
  sellingItem.inventoryDivPI.style.display = 'none';
  money = money + sellingItem.sellPI;
  sellingItem.boughtPI = false;
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
  } else if (sender.boughtPI === true) {
    li.appendChild(document.createTextNode(`- ${sender.messageBought}`));
  } else {
    li.appendChild(document.createTextNode(`- ${sender.messageSold}`));
  };
  
  messages.insertBefore(li, messages.firstChild);
};
///////////////////GLOBALS\\\\\\\\\\\\\\\\\\\ 
let month;
let money;
let health; 
let morale;
let intelligence;
let prestige;
let energy;

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
const energyStatDisplay = document.querySelector('#statEnergy');
// Main Game DOM Variable
const monthDisplay = document.querySelector('#months');
const yearsDisplay = document.querySelector('#years');
const moneyDisplay = document.querySelector('#money');
const healthDisplay = document.querySelector('#health');
const moraleDisplay = document.querySelector('#morale');
const intelligenceDisplay = document.querySelector('#intelligence');
const prestigeDisplay = document.querySelector('#prestige');
const energyDisplay = document.querySelector('#energy');
// Death DOM Variable
const monthDeathDisplay = document.querySelector('#deathMonths');

//ROUTINE
// Routine Function
function Routine(nameR, typeR, moneyR, healthR, moraleR, intelligenceR, prestigeR, availableR, durationR, DOMR, parentDOMR, indicatorDOMR, lvl2R, money2R, lvl3R, money3R, lvl4R, money4R, lvl5R, money5R, healthReqR, moraleReqR, intelReqR, prestigeReqR) {
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
  // Req
  this.healthReqR = healthReqR;
  this.moraleReqR = moraleReqR;
  this.intelReqR = intelReqR;
  this.prestigeReqR = prestigeReqR;
};
// Routine Variables
// Job
let unemployed = new Routine('Unemployed', 'job', 0, -5, -5, 0, -5, true, 0, document.querySelector("#unemployedJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
let courier = new Routine('Courier', 'job', 500, -3, -3, 0, -2, true, 0, document.querySelector("#courierJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 600, 12, 800, 24, 900, 36, 1200, 0, 0, 0, 0)
let retailWorker = new Routine('Retail worker', 'job', 600, -4, -3, 0, -2, true, 0, document.querySelector("#retailJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 800, 12, 1000, 24, 1200, 48, 2000, 0, 0, 0, 0);
let waiter = new Routine('Waiter', 'job', 800, -3, -4, 0, -2, true, 0, document.querySelector("#waiterJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 1000, 12, 1200, 24, 1400, 36, 1800, 0, 0, 0, 0);
let constructionWorker = new Routine('Construction worker', 'job', 800, -4, -3, 0, -1, false, 0, document.querySelector("#constructionWorkerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 1000, 24, 2000, 60, 4000, 120, 5000, 30, 0, 0, 0);
let hrManager = new Routine('HR manager', 'job', 1000, -3, -3, 0, -1, false, 0, document.querySelector("#hrManagerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 1200, 24, 1600, 48, 2000, 60, 2500, 0, 30, 0, 0);
let manager = new Routine('Manager', 'job', 1000, -3, -3, 0, -1, false, 0, document.querySelector("#managerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 1400, 24, 1800, 48, 2200, 72, 3500, 0, 0, 30, 0);
let hairStylist = new Routine('Hair stylist', 'job', 900, -3, -3, 0, -1, false, 0, document.querySelector("#hairStylistJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 1000, 18, 1400, 36, 2000, 60, 2800, 0, 0, 0, 30);
let fitnessCoach = new Routine('Fitness Coach', 'job', 600, -3, -3, 0, 0, false, 0, document.querySelector("#fitnessCoachJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 800, 12, 1200, 36, 2000, 60, 3500, 50, 0, 0, 0);
let salesman = new Routine('Salesman', 'job', 1000, -3, -3, 0, 0, false, 0, document.querySelector("#salesmanJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 1300,	24,	1800,	48,	2500,	84,	4500,	0, 50, 0, 0);
let journalist = new Routine('Jouranlist', 'job', 1200, -3, -4,	0,	0, false,	0, document.querySelector("#journalistJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12,	1500,	24,	2000,	48,	2500,	72,	3300,	0, 0, 50,	0);
let model	= new Routine('Model', 'job', 500, -3, -3, 0, 0, false, 0, document.querySelector("#modelJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 6, 800, 12, 1200, 36, 2000, 60, 3000, 0, 0,	0, 50);
let engineer = new Routine('Engineer', 'job', 2000, -3, -3, 1, 1, false, 0, document.querySelector("#engineerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 24, 3000, 48, 4000, 96, 7000, 120,	13000, 0, 0, 80, 0);
let lawyer = new Routine('Lawyer', 'job', 1500, -3, -2, 0, 1, false, 0, document.querySelector("#lawyerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 24, 2500, 48, 3500, 96, 5500, 120, 10000, 0, 0, 60, 60);
let teacher = new Routine('Teacher', 'job', 1000, -2, -2, 1, 1, false, 0, document.querySelector("#teacherJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 1500, 24, 2000, 48, 2500, 72, 3300, 0, 40, 60, 0);
let marketingManager = new Routine('Marketing Manager', 'job', 1500, -3, -4, 0, 1, false, 0, document.querySelector("#marketingManagerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 2000, 24, 3500, 36, 5500, 72, 10000, 0, 0, 0, 0);
let doctor = new Routine('Doctor','job', 1200, -3, -3, 1, 2, false, 0, document.querySelector("#doctorJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 24, 2000, 48, 3500, 96, 10000, 240, 20000, 0, 50, 80, 0);
let composer = new Routine('Composer', 'job', 3000, -3, -3, 1, 2, false, 0, document.querySelector("#composerJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 60, 5000, 120, 8000, 240, 20000, 360, 40000, 0, 70, 70, 70);
let professor = new Routine('Professor', 'job', 1600, -3, -2, 1, 2, false, 0, document.querySelector("#professorJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 24, 2000, 60, 3000, 120, 4000, 240, 7000, 0, 50, 70, 70);
let scientist = new Routine('Scientist','job', 2000, -3, -1, 2, 2, false, 0, document.querySelector("#scientistJob"), document.querySelector("#job"), document.querySelector("#jobMonthly"), 12, 3000, 60, 3500, 120, 4500, 360, 8000, 0, 0, 90, 0);
// Rent
let noRent = new Routine('Homeless', 'rent', 0, -1, -5, 0, -5, true, 0, document.querySelector("#noRent"), document.querySelector("#rent"), document.querySelector("#rentMonthly"));
let roomRent = new Routine('Rent a room', 'rent', -200, 1, 1, 0, -1, true, 0, document.querySelector("#roomRent"), document.querySelector("#rent"), document.querySelector("#rentMonthly"));
let flatRent = new Routine('Rent apartment', 'rent', -800, 1, 2, 0, 0, true, 0, document.querySelector("#flatRent"), document.querySelector("#rent"), document.querySelector("#rentMonthly"));
let houseRent = new Routine('Rent house', 'rent', -1500, 1, 3, 0, 1, true, 0, document.querySelector("#houseRent"), document.querySelector("#rent"), document.querySelector("#rentMonthly"));
// Diet
let starveFood = new Routine('Starve', 'diet', 0, -20, -20, 0, -3, true, 0, document.querySelector("#starveFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let junkFood = new Routine('Junk Food', 'diet', -100, -1, 0, 0, 0, true, 0, document.querySelector("#junkFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let cheapFood = new Routine('Cheap Food', 'diet', -300, 1, 1, 0, 0, true, 0, document.querySelector("#cheapFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let balancedFood = new Routine('Balanced Diet', 'diet', -500, 2, 2, 0, 0, true, 0, document.querySelector("#balancedFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
let delicFood = new Routine('Delicacies', 'diet', -1000, 2, 3, 0, 2, true, 0, document.querySelector("#delicFood"), document.querySelector("#food"), document.querySelector("#foodMonthly"));
// Hobby
let noHobby = new Routine('No Hobby', 'hobby', 0, 0, 0, 0, 0, true, 0, document.querySelector("#noHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let hiking = new Routine('Hiking', 'hobby', -100, 1, 0, 0, 0, true, 0, document.querySelector("#hikingHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let sports = new Routine('Sports', 'hobby', -200, 2, 0, 0, 0, true, 0, document.querySelector("#sportsHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let sing = new Routine('Singing', 'hobby', 0, 0, 1, 0, 0, true, 0, document.querySelector("#singHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let paint = new Routine('Painting', 'hobby', -100, 0, 2, 0, 0, true, 0, document.querySelector("#paintHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let write = new Routine('Writing', 'hobby', 0, 0, 0, 1, 0, true, 0, document.querySelector("#writeHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let learn = new Routine('Learning courses', 'hobby', -600, 0, 0, 2, 0, true, 0, document.querySelector("#learningHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let shopping = new Routine('Shopping', 'hobby', -1000, 0, 0, 0, 1, true, 0, document.querySelector("#shopHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let jewellery = new Routine('Jewelry collecting', 'hobby', -5000, 0, 0, 0, 2, true, 0, document.querySelector("#jewelHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let dance = new Routine('Dancing', 'hobby', -200, 1, 1, 0, 0, true, 0, document.querySelector("#danceHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let read = new Routine('Reading', 'hobby', -100, 0, 1, 1, 0, true, 0, document.querySelector("#readHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let conferences = new Routine('Visiting conferences', 'hobby', -1000, 0, 0, 1, 1, true, 0, document.querySelector("#conferencesHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let travel = new Routine('Travelling', 'hobby', -2000, 0, 2, 0, 1, true, 0, document.querySelector("#travellingHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let yacht = new Routine('Yachting', 'hobby', -10000, 1, 0, 0, 2, true, 0, document.querySelector("#yachtingHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let partying = new Routine('Partying', 'hobby', -800, -1, 0, -1, 3, true, 0, document.querySelector("#partyingHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
let extremeSports = new Routine('Extreme Sports', 'hobby', -500, -1, 3, 0, 0, true, 0, document.querySelector("#extremeSportsHobby"), document.querySelector("#hobby"), document.querySelector("#hobbyMonthly"));
// Routine Array
routineArray = [unemployed, courier, retailWorker, waiter, constructionWorker, hrManager, manager, hairStylist, fitnessCoach, salesman, journalist, model, engineer, lawyer, teacher, marketingManager, doctor, composer, professor, scientist, noRent, roomRent, flatRent, houseRent, starveFood, junkFood, cheapFood, balancedFood, delicFood, noHobby, hiking, sports, sing, paint, write, learn, shopping, jewellery, dance, read, conferences, travel, yacht, partying, extremeSports];

// EVENTS
// Routine Function
function Event(nameE, typeE, moneyE, healthE, moraleE, intelligenceE, prestigeE, isHappeningE, probabilityE, durationE, maxDurationE, DOME, healthCoeffE, moraleCoeffE, intelligenceCoeffE, prestigeCoeffE) {
  this.nameE = nameE;
  this.typeE = typeE;
  this.moneyE = moneyE;
  this.healthE = healthE;
  this.moraleE = moraleE;
  this.intelligenceE = intelligenceE;
  this.prestigeE = prestigeE;
  this.isHappeningE = isHappeningE;
  this.probabilityE = probabilityE;
  this.durationE = durationE;
  this.maxDurationE = maxDurationE;
  this.DOME= DOME;
  this.healthCoeffE = healthCoeffE; 
  this.moraleCoeffE = moraleCoeffE; 
  this.intelligenceCoeffE = intelligenceCoeffE;
  this.prestigeCoeffE = prestigeCoeffE; //Health+Morale+Intelligence+Prestige Coeffs Should not be more than 1
};
// Routine Variables
let migraine = new Event('migraine', 'illness', 0, 0, -1, 0, 0, false, 0.085, 0, 1, document.querySelector("#eventMigraine"), 1, 0, 0, 0);
let cold = new Event('cold',' illness', 0, -1, -1, 0, 0, false, 0.086, 0, 1, document.querySelector("#eventCold"), 0.5, 0.5, 0, 0);
let diarrhea = new Event('diarrhea', 'illness', 0, 0, -2, 0, 0, false, 0.086, 0, 3, document.querySelector("#eventDiarrhea"), 1, 0, 0, 0);
let cancer = new Event('cancer', 'illness', 0, -5, -5, 0, 0, false, 0.0001, 0, 9999, document.querySelector("#eventCancer"), 1, 0, 0, 0);
let depression = new Event('depression', 'illness', 0, 0, -3, 0, 0, false, 0.004, 0, 9999, document.querySelector("#eventDepression"), 0.3, 0.3, 0.4, 0);
let lostWallet = new Event('lost your wallet', 'accident', -100, 0, -1, 0, 0, false, 0.0001, 0, 0, document.querySelector("#eventLostWallet"), 0, 0.3, 0.7, 0);
let theft = new Event('theft', 'accident', -1000, 0, -2, 0, 0, false, 0.0013, 0, 0, document.querySelector("#eventTheft"), 0, 0, 0, 1);
let robery = new Event('robery', 'accident', -10000, 0, -5, 0, 0, false, 0.0007, 0, 0, document.querySelector("#eventRobery"), 0, 0, 0, 1);
let scam = new Event('scam', 'accident', -5000, 0, 0, 0, 0, false, 0.0002, 0, 0, document.querySelector("#eventScam"), 0, 0, 1, 0);
let extortion = new Event('extortion', 'accident', -100000, 0, 0, 0, 0, false, 0.00001, 0, 0, document.querySelector("#eventExtortion"), 0, 0, 0, 1);
let blackmail = new Event('blackmail', 'accident', -20000, 0, 0, 0, 0, false, 0.00002, 0, 0, document.querySelector("#eventBlackmail"), 0, 0, 0, 1);
let fire = new Event('fire', 'accident', -10000, 0, -5, 0, 0, false, 0.0008, 0, 0, document.querySelector("#eventFire"), 0, 0, 1, 0);
let brokeArm = new Event('broke arm', 'accident', 0, -2, -2, 0, 0, false, 0.01, 0, 0, document.querySelector("#eventBrokeArm"), 0.7, 0, 0.3, 0);
let brokeLeg = new Event('broke leg', 'accident', 0, -3, -2, 0, 0, false, 0.005, 0, 0, document.querySelector("#eventBrokeLeg"), 0.7, 0, 0.3, 0);
let brokeBack = new Event('broke back', 'accident', 0, -10, -5, 0, 0, false, 0.0025, 0, 0, document.querySelector("#eventBrokeBack"), 0.8, 0, 0.2, 0);
let brokeNeck	= new Event('broke neck', 'accident', 0, -20, -10, 0, 0, false, 0.001, 0, 0, document.querySelector("#eventBrokeNeck"), 0.9, 0, 0.1, 0);
// Routine Array
eventsArray = [migraine, cold, diarrhea, cancer, depression, lostWallet, theft, robery, scam, extortion, blackmail, fire, brokeArm, brokeLeg, brokeBack, brokeNeck];

// ITEMS FROM SHOP
// Shop Item Function
function ShopItem(nameI, typeI, buyI, healthI, moraleI, intelligenceI, prestigeI, energyI, usageCountI, boughtI, maintenanceI, lifeTimeI, effectivenessI, owningI, shopDivI, shopBtnI, inventoryDivI, inventoryBtnI, DOMpriceBuyI, DOMpriceSellI, DOMmonthlyCostI) {
  this.nameI = nameI;
  this.typeI = typeI;
  this.buyI = buyI;
  this.sellI = function() { return Math.round(this.buyI - ((this.buyI / this.lifeTimeI) * this.usageCountI)); };
  this.healthI = healthI;
  this.moraleI = moraleI;
  this.intelligenceI = intelligenceI;
  this.prestigeI = prestigeI;
  this.energyI = energyI;
  this.usageCountI = usageCountI;
  this.boughtI = boughtI;
  this.maintenanceI = maintenanceI;
  this.lifeTimeI = lifeTimeI;
  this.effectivenessI = effectivenessI;
  this.owningI = owningI;
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
let cheapPhone = new ShopItem('heap phone', 'permanent', 100, 0, 1, 0, -1, 0, 0, false, -10, 24, undefined, 0, document.querySelector('#shopCheapPhone'), document.querySelector('#buyCheapPhone'), document.querySelector('#ownedCheapPhone'), document.querySelector('#sellCheapPhone'), document.querySelector('#cheapPhoneDOMprice'), document.querySelector('#cheapPhoneDOMpriceSell'), document.querySelector('#cheapPhoneDOMmonthlyCost'));
let phone = new ShopItem('phone', 'permanent', 200, 0, 1, 0, 0, 0, 0, false, -10, 36, undefined, 0, document.querySelector('#shopPhone'), document.querySelector('#buyPhone'), document.querySelector('#ownedPhone'), document.querySelector('#sellPhone'), document.querySelector('#phoneDOMprice'), document.querySelector('#phoneDOMpriceSell'), document.querySelector('#phoneDOMmonthlyCost'));
let luxPhone = new ShopItem('latest phone', 'permanent', 1000, 0, 1, 0, 1, 0, 0, false, -10, 12, undefined, 1, document.querySelector('#shopLuxPhone'), document.querySelector('#buyLuxPhone'), document.querySelector('#ownedLuxPhone'), document.querySelector('#sellLuxPhone'), document.querySelector('#luxPhoneDOMprice'), document.querySelector('#luxPhoneDOMpriceSell'), document.querySelector('#luxPhoneDOMmonthlyCost'));
let rustyCar = new ShopItem('rusty car', 'permanent', 2000, -1, 1, 0, -1, 0, 0, false, -300, 12, undefined, -1, document.querySelector('#shopRustyCar'), document.querySelector('#buyRustyCar'), document.querySelector('#ownedRustyCar'), document.querySelector('#sellRustyCar'), document.querySelector('#rustyCarDOMprice'), document.querySelector('#rustyCarDOMpriceSell'), document.querySelector('#rustyCarDOMmonthlyCost'));
let ownedCar = new ShopItem('owned car', 'permanent', 5000, -1, 1, 0, 0, 0, 0, false, -250, 60, undefined, 0, document.querySelector('#shopOwnedCar'), document.querySelector('#buyOwnedCar'), document.querySelector('#ownedOwnedCar'), document.querySelector('#sellOwnedCar'), document.querySelector('#ownedCarDOMprice'), document.querySelector('#ownedCarDOMpriceSell'), document.querySelector('#ownedCarDOMmonthlyCost'));
let newCar = new ShopItem('new car', 'permanent', 15000, -1, 1, 0, 1, 0, 0, false, -200, 120, undefined, 0, document.querySelector('#shopNewCar'), document.querySelector('#buyNewCar'), document.querySelector('#ownedNewCar'), document.querySelector('#sellNewCar'), document.querySelector('#newCarDOMprice'), document.querySelector('#newCarDOMpriceSell'), document.querySelector('#newCarDOMmonthlyCost'));
let luxCar = new ShopItem('luxury car', 'permanent', 50000, -1, 1, 0, 2, 0, 0, false, -1000, 120, undefined, 1, document.querySelector('#shopLuxCar'), document.querySelector('#buyLuxCar'), document.querySelector('#ownedLuxCar'), document.querySelector('#sellLuxCar'), document.querySelector('#luxCarDOMprice'), document.querySelector('#luxCarDOMpriceSell'), document.querySelector('#luxCarDOMmonthlyCost'));
let sportsCar = new ShopItem('sports car', 'permanent', 100000, -1, 1, 0, 3, 0, 0, false, -3000, 240, undefined, 3, document.querySelector('#shopSportsCar'), document.querySelector('#buySportsCar'), document.querySelector('#ownedSportsCar'), document.querySelector('#sellSportsCar'), document.querySelector('#sportsCarDOMprice'), document.querySelector('#sportsCarDOMpriceSell'), document.querySelector('#sportsCarDOMmonthlyCost'));
let plane = new ShopItem('plane', 'permanent', 1000000, 1, 2, 0, 5, 0, 0, false, -20000, 240, undefined, 20, document.querySelector('#shopPlane'), document.querySelector('#buyPlane'), document.querySelector('#ownedPlane'), document.querySelector('#sellPlane'), document.querySelector('#planeDOMprice'), document.querySelector('#planeDOMpriceSell'), document.querySelector('#planeDOMmonthlyCost'));
let luxWatch = new ShopItem('luxury watch', 'permanent', 10000, 0, 0, 0, 1, 0, 0, false, 0, 600, undefined, 1, document.querySelector('#shopLuxWatch'), document.querySelector('#buyLuxWatch'), document.querySelector('#ownedLuxWatch'), document.querySelector('#sellLuxWatch'), document.querySelector('#luxWatchDOMprice'), document.querySelector('#luxWatchDOMpriceSell'), document.querySelector('#luxWatchDOMmonthlyCost'));
// Shop Items Variables - instant
let alcohol = new ShopItem('alcohol', 'instant', 100, -1, 1, 0, 0, 0, 0, false, undefined, undefined, 1, undefined, document.querySelector('#shopAlcohol'), document.querySelector('#buyAlcohol'), undefined, undefined, document.querySelector('#alcoholDOMprice'), undefined, undefined);
let drugs = new ShopItem('drugs', 'instant', 200, -3, 5, 0, 0, 0, 0, false, undefined, undefined, 1, undefined, document.querySelector('#shopDrugs'), document.querySelector('#buyDrugs'), undefined, undefined, document.querySelector('#drugsDOMprice'), undefined, undefined);
let trendyClothes = new ShopItem('some trendy clothes', 'instant', 500, 0, 1, 0, 1, -2, 0, false, undefined, undefined, 1, undefined, document.querySelector('#shopTrendyClothes'), document.querySelector('#buyTrendyClothes'), undefined, undefined, document.querySelector('#trendyClothesDOMprice'), undefined, undefined);
let onlineCourse = new ShopItem('online course', 'instant', 50, 0, 0, 1, 0, -5, 0, false, undefined, undefined, 0.5, undefined, document.querySelector('#shopOnlineCourse'), document.querySelector('#buyOnlineCourse'), undefined, undefined, document.querySelector('#onlineCourseDOMprice'), undefined, undefined);
let offlineCourse = new ShopItem('offline course', 'instant', 200, 0, 0, 1, 0, -8, 0, false, undefined, undefined, 0.8, undefined, document.querySelector('#shopOfflineCourse'), document.querySelector('#buyOfflineCourse'), undefined, undefined, document.querySelector('#offlineCourseDOMprice'), undefined, undefined);
let training = new ShopItem('personal development training', 'instant', 200, 0, 1, 0, 0, -5, 0, false, undefined, undefined, 0.1, undefined, document.querySelector('#shopTraining'), document.querySelector('#buyTraining'), undefined, undefined, document.querySelector('#trainingDOMprice'), undefined, undefined);
let selfHelpBook = new ShopItem('self-help book', 'instant', 20, 0, 1, 0, 0, -3, 0, false, undefined, undefined, 0.1, undefined, document.querySelector('#shopSelfHelpBook'), document.querySelector('#buySelfHelpBook'), undefined, undefined, document.querySelector('#selfHelpBookDOMprice'), undefined, undefined);
let fictionBook = new ShopItem('fiction book', 'instant', 10, 0, 0, 1, 0, -2, 0, false, undefined, undefined, 0.7, undefined, document.querySelector('#shopFictionBook'), document.querySelector('#buyFictionBook'), undefined, undefined, document.querySelector('#fictionBookDOMprice'), undefined, undefined);
let profLiterature = new ShopItem('professional literature', 'instant', 100, 0, -1, 2, 0, -5, 0, false, undefined, undefined, 0.9, undefined, document.querySelector('#shopProfLiterature'), document.querySelector('#buyProfLiterature'), undefined, undefined, document.querySelector('#profLiteratureDOMprice'), undefined, undefined);
let medicalTest = new ShopItem('medical check-up', 'instant', 500, 2, -2, 0, 0, -6, 0, false, undefined, undefined, 1, undefined, document.querySelector('#shopMedicalTest'), document.querySelector('#buyMedicalTest'), undefined, undefined, document.querySelector('#medicalTestDOMprice'), undefined, undefined);
let shortVacation = new ShopItem('short vacation', 'instant', 800, 1, 1, 0, 0, -10, 0, false, undefined, undefined, 1, undefined, document.querySelector('#shopShortVacation'), document.querySelector('#buyShortVacation'), undefined, undefined, document.querySelector('#shortVacationDOMprice'), undefined, undefined);
// Shop Items Variables - medicine
let treatmentCold = new ShopItem('cold treatment', 'medicine', 50, 0, -1, 0, 0, 0, 0, false, undefined, undefined, 0.5, undefined, document.querySelector('#shopTreatmentCold'), document.querySelector('#buyTreatmentCold'), undefined, undefined, document.querySelector('#tColdDOMprice'), undefined, undefined);
let treatmentDiarrhea = new ShopItem('diarrhea treatment', 'medicine', 10, 0, -1, 0, 0, 0, 0, false, undefined, undefined, 0.9, undefined, document.querySelector('#shopTreatmentDiarrhea'), document.querySelector('#buyTreatmentDiarrhea'), undefined, undefined, document.querySelector('#tDiarrheaDOMprice'), undefined, undefined);
let treatmentCancer = new ShopItem('cancer treatment', 'medicine', 10000, 0, -3, 0, 0, 0, 0, false, undefined, undefined, 0.1, undefined, document.querySelector('#shopTreatmentCancer'), document.querySelector('#buyTreatmentCancer'), undefined, undefined, document.querySelector('#tCancerDOMprice'), undefined, undefined);
// Shop Items Array (permanent & instant)
let itemsArray = [cheapPhone, phone, luxPhone, rustyCar, ownedCar, newCar, luxCar, sportsCar, plane, luxWatch, alcohol, treatmentDiarrhea, treatmentCold, treatmentCancer, drugs, trendyClothes, onlineCourse, offlineCourse, training, selfHelpBook, fictionBook, profLiterature, medicalTest, shortVacation];



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
  energy = 0;
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
  energy = 10;

  // Show results in the stat stage
  moneyStatDisplay.innerHTML = money.toLocaleString('en');
  healthStatDisplay.innerHTML = health;
  moraleStatDisplay.innerHTML = morale;
  intelligenceStatDisplay.innerHTML = intelligence;
  prestigeStatDisplay.innerHTML = prestige;
  energyStatDisplay.innerHTML = energy;
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
  disableOptions();
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
      intelligence = intelligence + someEvent.intelligenceE;
      prestige = prestige + someEvent.prestigeE;
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
      var coeffMultiplier = 2 - (((health * someEvent.healthCoeffE) + (morale * someEvent.moraleCoeffE) + (intelligence * someEvent.intelligenceCoeffE) + (prestige * someEvent.prestigeCoeffE)) / 100);
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
          intelligence = intelligence + someEvent.intelligenceE;
          prestige = prestige + someEvent.prestigeE;
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
        intelligence = intelligence + someItem.intelligenceI;
        prestige = prestige + someItem.prestigeI;
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
    prestige = prestige - 10;
  };
  // Money increases prestige
  if (money <= 1000000) {
    prestige = prestige + 1;
  };
  // Morale decrease health 
  if (morale <= 0) {
    health = health - 5;
  }; 
  // Prestige decreases morale 
  if (prestige <= 10) {
    morale = morale - 1;
  }; 
  // Low intelligence increases morale 
  if (intelligence <= 20) {
    morale = morale + 2;
  }; 

  // Energy Display
  if (health > 90 || morale > 90) {
    energy = 11;
  } else if (health > 90 && morale > 90) {
    energy = 12;
  } else {
    energy = 10;
  };
  
  // Show Updated Correct Stats (can't be negative)
  updateStats();
  
  // Check for disabled options
  disableOptions();
  checkForDisabled();


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
    prestige = prestige + certaintItem.owningI;
    message(msgBuy + certaintItem.nameI + ' for ' + certaintItem.buyI + '$');
    showPrices();
  };
  if (certaintItem.typeI === 'instant') {
    if (certaintItem.effectivenessI === 1) {
      console.log(certaintItem.effectivenessI);
      health = health + certaintItem.healthI;
      morale = morale + certaintItem.moraleI;
      intelligence = intelligence + certaintItem.intelligenceI;
      prestige = prestige + certaintItem.prestigeI;
      energy = energy + certaintItem.energyI;
      certaintItem.usageCountI ++;
      message(msgBuy + certaintItem.nameI + ' for ' + certaintItem.buyI + '$');
    } else if (certaintItem.effectivenessI < 1) {
      var badLuck = Math.random();
      if (badLuck < certaintItem.effectivenessI) {
        health = health + certaintItem.healthI;
        morale = morale + certaintItem.moraleI;
        intelligence = intelligence + certaintItem.intelligenceI;
        prestige = prestige + certaintItem.prestigeI;
        energy = energy + certaintItem.energyI;
        certaintItem.usageCountI ++;
        message('This ' + certaintItem.nameI + msgUsefulItem);
      } else if (badLuck > certaintItem.effectivenessI) {
        energy = energy + certaintItem.energyI;
        certaintItem.usageCountI ++;
        message('This ' + certaintItem.nameI + msgUnusefulItem);
      };
    };
  };
  if (certaintItem.typeI === 'medicine') {
    health = health + certaintItem.healthI;
    morale = morale + certaintItem.moraleI;
    intelligence = intelligence + certaintItem.intelligenceI;
    prestige = prestige + certaintItem.prestigeI;
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
  prestige = prestige - someItem.owningI;
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
  };
  // Health Limit to 100
  if (health > 100) {
    health = 100;
  };
  // Intelligence Limit to 0
  if (intelligence < 0) {
    intelligence = 0;
  };
  // Intelligence Limit to 100
  if (intelligence > 100) {
    intelligence = 100;
  };
  // Prestige Limit to 0
  if (prestige < 0) {
    prestige = 0;
  };
  // Low energy decreases morale
  if (energy < 0) {
    morale = morale - 2;
  };

  // Show Stats In UI
  moneyDisplay.innerHTML = money.toLocaleString('en');
  healthDisplay.innerHTML = health;
  moraleDisplay.innerHTML = morale;
  intelligenceDisplay.innerHTML = intelligence;
  prestigeDisplay.innerHTML = prestige;
  energyDisplay.innerHTML = energy;
};

// Send Message to player
function message(theme) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`Month ${month}: ${theme}`));
  messages.insertBefore(li, messages.firstChild);
  messages.firstChild.classList.add("msgAppear")
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

function disableOptions() {
  routineArray.forEach(function(someRoutine) {
    if (someRoutine.typeR === 'job') {
      if (health >= someRoutine.healthReqR && morale >= someRoutine.moraleReqR && intelligence >= someRoutine.intelReqR && prestige >= someRoutine.prestigeReqR) {
        someRoutine.availableR = true; 
      } else {
        someRoutine.availableR = false;
      };
    }
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
let msgUsefulItem = ' was useful for you. You learned some and become better';
let msgUnusefulItem = ' was complete waste of time. You learned nothing';




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
//Common
function clearInput(tab) {
  var allInput = document
    .getElementById("day13-b" + tab)
    .getElementsByTagName("input");

  for (var inputTag of allInput) {
    inputTag.value = "";
  }
}

// BUOI13 B1
function calcSalary() {
  //Input
  var workday = document.getElementById("day13_b1_workday").value;
  var dailySalary = document.getElementById("day13_b1_daily_salary").value;

  //Proccess
  var salary = workday * dailySalary;

  //Output
  document.getElementById("day13_b1_salary").value = salary;
}

//BUOI13 B2
function calcArithmetic() {
  //Input
  var num1 = parseFloat(document.getElementById("day13_b2_1").value);
  var num2 = parseFloat(document.getElementById("day13_b2_2").value);
  var num3 = parseFloat(document.getElementById("day13_b2_3").value);
  var num4 = parseFloat(document.getElementById("day13_b2_4").value);
  var num5 = parseFloat(document.getElementById("day13_b2_5").value);
  var decimal_places = document.getElementById("day13_b2_decimal_places").value;

  //Proccess
  var average = (num1 + num2 + num3 + num4 + num5) / 5;
  // var result = average.toFixed(decimal_places);

  //Output
  document.getElementById("day13_b2_arithmetic").value = average;
}

// BUOI13 B3
function convertUSDtoVND() {
  //Input
  var usd = parseFloat(document.getElementById("day13_b3_usd").value);

  //Proccess
  var vnd = usd * 23500;

  //Output
  document.getElementById("day13_b3_vnd").value = vnd + "VND";
}

// BUOI13 B4
function calcRectangle() {
  //Input
  var width = parseFloat(document.getElementById("day13_b4_width").value);
  var height = parseFloat(document.getElementById("day13_b4_height").value);

  //Proccess
  var area = width * height;
  var peripheral = (width + height) * 2;

  //Output
  document.getElementById("day13_b4_area").value = area.toFixed(2);
  document.getElementById("day13_b4_peripheral").value = peripheral.toFixed(2);
}

// BUOI13 B5
function calcSum2Digit() {
  //Input
  var num2digit = document.getElementById("day13_b5_num").value;

  //Proccess
  var result = parseInt(num2digit / 10) + (num2digit % 10);

  //Output
  document.getElementById("day13_b5_result").value = result;
}

// BUOI13 B6
function loadImage() {
  var url = document.getElementById("day13_b6_url").value;

  document.getElementById("day13_b6_img").src = url;
}

function updateImage() {
  var brightness = document.getElementById("day13_b6_brightness").value;
  var contrast = document.getElementById("day13_b6_contrast").value;
  var hue = document.getElementById("day13_b6_hue").value;
  var blur = document.getElementById("day13_b6_blur").value;
  var saturation = document.getElementById("day13_b6_saturation").value;
  var sepia = document.getElementById("day13_b6_sepia").value;

  document.getElementById(
    "day13_b6_img"
  ).style.filter = `brightness(${brightness}%) 
                  contrast(${contrast}%) 
                  hue-rotate(${hue}deg) 
                  blur(${blur}px) 
                  saturate(${saturation}%) 
                  sepia(${sepia}%)`;
}

// BUOI15
// BUOI15_b1
function checkScore() {
  var day15B1Popup = document.getElementById("day15__b1__popup");
  var standardScore = parseFloat(
    document.getElementById("day15_b1_score").value
  );
  var priorityZone = parseInt(document.getElementById("priorityZone").value);
  var priorityType = parseInt(document.getElementById("priorityType").value);

  var s1Score = parseFloat(document.getElementById("day15_b1_s1").value);
  var s2Score = parseFloat(document.getElementById("day15_b1_s2").value);
  var s3Score = parseFloat(document.getElementById("day15_b1_s3").value);

  var arrZone = [2, 1, 0.5];
  var arrType = [2.5, 1.5, 1];

  var zonePlus = 0;
  var typePlus = 0;

  if (priorityZone != -1) {
    zonePlus = arrZone[priorityZone];
  }
  if (priorityType != -1) {
    typePlus = arrType[priorityType];
  }

  var score = s1Score + s2Score + s3Score + zonePlus + typePlus;
  console.log(score);

  if ((score >= standardScore) && s1Score !== 0 && s2Score !== 0 && s3Score !== 0) {
    document.getElementById("day15_b1_result").innerText = "Bạn đậu rồi!!!";
    document.querySelector("#day15__b1__popup h1").innerText = "Chúc mừng";
    day15B1Popup.classList.add("bg-success");
  } else {
    document.getElementById("day15_b1_result").innerText =
      "Bạn không trúng tuyển lần này!!!";
    document.querySelector("#day15__b1__popup h1").innerText = "Chia buồn";
    day15B1Popup.classList.add("bg-danger");
  }
  day15B1Popup.classList.remove("d-none");
}

function closeB1Popup() {
  var day15B1Popup = document.getElementById("day15__b1__popup");

  day15B1Popup.classList.remove("bg-success");
  day15B1Popup.classList.remove("bg-danger");
  day15B1Popup.classList.add("d-none");
}

// BUOI15_b2
function calcTax() {
  var income = parseInt(document.getElementById("day15_b3_income_id").value);
  var dependence = parseInt(document.getElementById("day15_b3_dependence_id").value);

  var taxedIncome = income - 4000000 - dependence * 1600000;

  if (taxedIncome < 0) {
    window.alert("Income can not be a negative number. Try again!!!");
  }

  var tax = 0;
  var unit = 1000000;
  var taxRate = 5/100;
  if (taxedIncome <= 60*unit) {
    taxRate = 5/100;
  }
  else if (taxedIncome > 60*unit && taxedIncome <= 120*unit) {
    taxRate = 10/100;
  }
  else if (taxedIncome > 120*unit && taxedIncome <= 210*unit) {
    taxRate = 15/100;
  }
  else if (taxedIncome > 210*unit && taxedIncome <= 384*unit) {
    taxRate = 20/100;
  }
  else if (taxedIncome > 384*unit && taxedIncome <= 624*unit) {
    taxRate = 25/100;
  }
  else if (taxedIncome > 624*unit && taxedIncome <= 960*unit) {
    taxRate = 30/100;
  }
  else {
    taxRate = 35/100;
  }

  var tax = taxRate * taxedIncome;
  document.getElementById("day15_b3_tax_id").value = tax;
}

// BUOI15_b2
function calcKW() {
  var kw = parseFloat(document.getElementById("day15_b2_kw_id").value);
  var bill = 0;

  if (kw >= 50) {
    bill += 50 * 500;
    kw -= 50;
  }
  else {
    bill += 500 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw >= 50) {
    bill += 50 * 650;
    kw -= 50;
  }
  else {
    bill += 650 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw >= 100) {
    bill += 100 * 850;
    kw -= 100;
  }
  else {
    bill += 850 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw >= 150) {
    bill += 150 * 1100;
    kw -= 150;
  }
  else {
    bill += 1100 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw > 0) {
    bill += kw * 1300;
    document.getElementById("day15_b2_bill_id").value = bill;
  }
}

// BUOI15_b3
function calcCableBill() {
  var type = document.getElementById("day15_b4_type_id").value;
  var channelNumbers = document.getElementById("day15_b4_channel_id").value;
  var billFee = 4.5;
  var serviceFee = 20.5;
  var channelFee = 7.5;
  var bill = 0;
  
  if (type === "brand") {
    var connectors = document.getElementById("day15_b4_connectors_id").value;
    billFee = 15;
    serviceFee = (connectors <= 10) ? 75 : (75 + 5 * (connectors - 10));
  }

  bill += billFee + serviceFee + channelFee * channelNumbers;
  document.getElementById("day15_b4_bill_id").value = bill;
}

function toggleConnectorsInput() {
  var type = document.getElementById("day15_b4_type_id").value;

  if (type === "brand") {
    document.getElementById("day15_b4_connectors_id").classList.remove("d-none");
  }
  else {
    document.getElementById("day15_b4_connectors_id").classList.add("d-none");
  }
}
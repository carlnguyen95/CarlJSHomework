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

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
  var day15B1Popup = document.getElementById("day15PopupId");
  var day15PopupContainer = day15B1Popup.querySelector(
    ".day15__popup--container"
  );
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

  if (
    score >= standardScore &&
    s1Score !== 0 &&
    s2Score !== 0 &&
    s3Score !== 0
  ) {
    document.getElementById("day15_b1_result").innerText = "Bạn đậu rồi!!!";
    document.querySelector("#day15PopupId h1").innerText = "Chúc mừng";
    day15PopupContainer.classList.add("bg-success");
  } else {
    document.getElementById("day15_b1_result").innerText =
      "Bạn không trúng tuyển lần này!!!";
    document.querySelector("#day15PopupId h1").innerText = "Chia buồn";
    day15PopupContainer.classList.add("bg-danger");
  }
  day15B1Popup.classList.remove("d-none");
}

function closeDay15Popup() {
  var day15B1Popup = document.getElementById("day15PopupId");
  var day15PopupContainer = day15B1Popup.querySelector(
    ".day15__popup--container"
  );

  day15PopupContainer.classList.remove("bg-success");
  day15PopupContainer.classList.remove("bg-danger");
  day15B1Popup.classList.add("d-none");
}

// BUOI15_b2
function calcTax() {
  var income = parseInt(document.getElementById("day15_b3_income_id").value);
  var dependence = parseInt(
    document.getElementById("day15_b3_dependence_id").value
  );

  var taxedIncome = income - 4000000 - dependence * 1600000;

  if (taxedIncome < 0) {
    window.alert("Income can not be a negative number. Try again!!!");
  }

  var tax = 0;
  var unit = 1000000;
  var taxRate = 5 / 100;
  if (taxedIncome <= 60 * unit) {
    taxRate = 5 / 100;
  } else if (taxedIncome > 60 * unit && taxedIncome <= 120 * unit) {
    taxRate = 10 / 100;
  } else if (taxedIncome > 120 * unit && taxedIncome <= 210 * unit) {
    taxRate = 15 / 100;
  } else if (taxedIncome > 210 * unit && taxedIncome <= 384 * unit) {
    taxRate = 20 / 100;
  } else if (taxedIncome > 384 * unit && taxedIncome <= 624 * unit) {
    taxRate = 25 / 100;
  } else if (taxedIncome > 624 * unit && taxedIncome <= 960 * unit) {
    taxRate = 30 / 100;
  } else {
    taxRate = 35 / 100;
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
  } else {
    bill += 500 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw >= 50) {
    bill += 50 * 650;
    kw -= 50;
  } else {
    bill += 650 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw >= 100) {
    bill += 100 * 850;
    kw -= 100;
  } else {
    bill += 850 * kw;
    document.getElementById("day15_b2_bill_id").value = bill;
    return 1;
  }

  if (kw >= 150) {
    bill += 150 * 1100;
    kw -= 150;
  } else {
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
    serviceFee = connectors <= 10 ? 75 : 75 + 5 * (connectors - 10);
  }

  bill += billFee + serviceFee + channelFee * channelNumbers;
  document.getElementById("day15_b4_bill_id").value = bill;
}

function toggleConnectorsInput() {
  var type = document.getElementById("day15_b4_type_id").value;

  if (type === "brand") {
    document
      .getElementById("day15_b4_connectors_id")
      .classList.remove("d-none");
  } else {
    document.getElementById("day15_b4_connectors_id").classList.add("d-none");
  }
}

/*BUOI17*/
let arr = [];
function pushArray() {
  let number = document.querySelector("#arrayInputId").value;
  if (isNaN(number)) return;
  arr.push(number);
  document.querySelector("#arrayInputId").value = "";
  document.querySelector("#outputArea").innerText = `[${arr}]`;
}

function clearArray() {
  arr = [];
  document.querySelector("#arrayInputId").value = "";
  document.querySelector("#outputArea").innerText = `[${arr}]`;
}

function closeDay17Popup() {
  document.querySelector("#day17PopupId").classList.add("d-none");
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector("#day17PopupId").classList.add("d-none");
  }
});

//BAI1
document.querySelector("#day17B1Id").addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] >= 0 ? arr[i] : 0;
  }
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p class="counter">SUM = ${sum}</p>`;
});

//BAI2
document.querySelector("#day17B2Id").addEventListener("click", () => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i] >= 0 ? 1 : 0;
  }
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p class="counter">COUNT = ${count}</p>`;
});

//BAI3
document.querySelector("#day17B3Id").addEventListener("click", () => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
  }
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p class="counter">MIN NUMBER = ${min}</p>`;
});

// BAI4
document.querySelector("#day17B4Id").addEventListener("click", () => {
  let min = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (min == -1) min = arr[i];
      else if (arr[i] < min) min = arr[i];
    }
  }
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p class="counter">MIN POSITIVE NUMBER = ${min}</p>`;
});

// BAI5
document.querySelector("#day17B5Id").addEventListener("click", () => {
  let value = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      value = arr[i];
    }
  }
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p class="counter">LAST EVEN NUMBER = ${value}</p>`;
});

// BAI6
document.querySelector("#day17B6Id").addEventListener("click", () => {
  document.querySelector("#day17B6IndexInputId").classList.remove("d-none");
  document
    .querySelector("#day17B6IndexInputId button")
    .addEventListener("click", () => {
      const index1 = document.querySelector("#day17B6Index1Id").value * 1;
      const index2 = document.querySelector("#day17B6Index2Id").value * 1;

      const tmp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = tmp;
      document.querySelector("#day17PopupId").classList.remove("d-none");
      document.querySelector("#day17PopupId .day17__popup--result").innerHTML =
        "";
      document.querySelector(
        "#day17PopupId .day17__popup--result"
      ).innerHTML += `<p>[${arr}]</p>`;
    });
});

document.querySelector("#day17ButtonsId").addEventListener("click", (e) => {
  if (!e.target.matches("#day17B6Id")) {
    document.querySelector("#day17B6IndexInputId").classList.add("d-none");
  }
  if (!e.target.matches("#day17B9Id")) {
    const b9SubmitBtn = document.querySelector("#day17b9SubmitId");
    b9SubmitBtn.remove();
  }
});

// BAI7
document.querySelector("#day17B7Id").addEventListener("click", () => {
  arr.sort();
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
});

// BAI8
document.querySelector("#day17B8Id").addEventListener("click", () => {
  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      document.querySelector("#day17PopupId").classList.remove("d-none");
      document.querySelector("#day17PopupId .day17__popup--result").innerHTML =
        "";
      document.querySelector(
        "#day17PopupId .day17__popup--result"
      ).innerHTML += `<p>[${arr}]</p>`;
      document.querySelector(
        "#day17PopupId .day17__popup--result"
      ).innerHTML += `<p>FIRST PRIME NUMBER: ${arr[i]}</p>`;
      return;
    }
  }
  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>FIRST PRIME NUMBER: -1</p>`;
});

function isPrimeNumber(number) {
  for (let i = 2; i <= parseInt(number / 2); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// BAI9
document.querySelector("#day17B9Id").addEventListener("click", () => {
  document.querySelector("#arrayInputId").placeholder = "Nhâp số thực";
  arr = [];
  document.querySelector("#outputArea").innerText = arr;

  const b9SubmitElement = document.createElement("button");
  b9SubmitElement.classList.add("btn", "btn-dark");
  b9SubmitElement.textContent = "Đếm số nguyên";
  b9SubmitElement.id = "day17b9SubmitId";

  const day17Content = document.querySelector("#day17-b1 .row .col-7");
  if (!day17Content.contains(document.querySelector("#day17b9SubmitId"))) {
    day17Content.insertBefore(
      b9SubmitElement,
      document.querySelector("#day17ButtonsId")
    );
  }

  document.querySelector("#day17b9SubmitId").addEventListener("click", () => {
    let count = 0;
    arr.forEach((number) => {
      if (number - parseInt(number) == 0) {
        count++;
        console.log(number);
      }
    });
    document.querySelector("#outputArea").innerHTML += `<p>${count}</p>`;
  });
});

// BAI10
document.querySelector("#day17B10Id").addEventListener("click", () => {
  let posCount = 0;
  let negCount = 0;
  let result = "<p>Equal</p>";
  arr.forEach(function (number) {
    if (number > 0) posCount++;
    else if (number < 0) negCount++;
  });
  if (posCount > negCount) result = `<p>POSITIVE NUMBER</p>`;
  else if (posCount < negCount) result = `<p>NEGATIVE NUMBER</p>`;

  document.querySelector("#day17PopupId").classList.remove("d-none");
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML = "";
  document.querySelector(
    "#day17PopupId .day17__popup--result"
  ).innerHTML += `<p>[${arr}]</p>`;
  document.querySelector("#day17PopupId .day17__popup--result").innerHTML +=
    result;
});

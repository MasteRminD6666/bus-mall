"use strict";
// global Variables
let prodcutDiv = document.getElementById("prodctus");
let button = document.createElement("button");
let results = document.getElementById("results");
let leftImageElement = document.getElementById("left-image");
let middleImageElement = document.getElementById("middle-image");
let rightImageElement = document.getElementById("right-image");
let maxAttempts = 25;
let userAttempts = 0;
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
let namesArr = [];
let voteArr = [];
let shownArr = [];

function BusMall(name, src) {
  this.name = name;
  this.sorcue = src;
  this.shown = 0;
  this.vote = 0;

  BusMall.allProducts.push(this);
  namesArr.push(this.name);
}

BusMall.allProducts = [];

// instance
new BusMall("bag", "./img/bag.jpg");
new BusMall("banana", "./img/banana.jpg");
new BusMall("bathroom", "./img/bathroom.jpg");
new BusMall("boots", "./img/boots.jpg");
new BusMall("breakfast", "./img/breakfast.jpg");
new BusMall("bubblegum", "./img/bubblegum.jpg");
new BusMall("chair", "./img/chair.jpg");
new BusMall("cthulhu", "./img/cthulhu.jpg");
new BusMall("dog-duck", "./img/dog-duck.jpg");
new BusMall("dragon", "./img/dragon.jpg");
new BusMall("pen", "./img/pen.jpg");
new BusMall("pet-sweep", "./img/pet-sweep.jpg");
new BusMall("scissors", "./img/scissors.jpg");
new BusMall("shark", "./img/shark.jpg");
new BusMall("sweep", "./img/sweep.png");
new BusMall("tauntaun", "./img/tauntaun.jpg");
new BusMall("unicorn", "./img/unicorn.jpg");
new BusMall("water-can", "./img/water-can.jpg");
new BusMall("wine-galss", "./img/wine-glass.jpg");

function getRndIndex() {
  return Math.floor(Math.random() * BusMall.allProducts.length);
}

// render
let rpeatedImages = [];

BusMall.render = function () {
  leftImageIndex = getRndIndex();
  middleImageIndex = getRndIndex();
  rightImageIndex = getRndIndex();

  BusMall.allProducts[leftImageIndex].shown++;
  BusMall.allProducts[middleImageIndex].shown++;
  BusMall.allProducts[rightImageIndex].shown++;

  // console.log(BusMall.allProducts[4].sorcue);
  while (
    leftImageIndex === rightImageIndex ||
    leftImageIndex === middleImageIndex ||
    rightImageIndex === middleImageIndex ||
    rpeatedImages.includes(rightImageIndex) ||
    rpeatedImages.includes(middleImageIndex) ||
    rpeatedImages.includes(leftImageIndex)
  ) {
    rightImageIndex = getRndIndex();
    middleImageIndex = getRndIndex();
    leftImageIndex = getRndIndex();
  }
  rpeatedImages = [leftImageIndex, middleImageIndex, rightImageIndex];
  // this for storing array without Dublicate numbers

  console.log(leftImageIndex, middleImageIndex, rightImageIndex);

  // console.log(BusMall.allProducts);
  leftImageElement.src = BusMall.allProducts[leftImageIndex].sorcue;
  middleImageElement.src = BusMall.allProducts[middleImageIndex].sorcue;
  rightImageElement.src = BusMall.allProducts[rightImageIndex].sorcue;

  // console.log('this is left',leftImageIndex)
  // console.log('this is middle',middleImageIndex)
  // console.log('this is right',rightImageIndex)
};

BusMall.render();
let oneclick = true;

prodcutDiv.addEventListener("click", voteHandling);

let eneable = true;
let try2 = true;
function voteHandling(event) {
  userAttempts++;
  let attempt = document.getElementById("Tries");
  attempt.innerHTML = `Vote Number: ${userAttempts}`;

  //   console.log(event.target.id);

  if (userAttempts < maxAttempts) {
    if (event.target.id === "left-image") {
      BusMall.allProducts[leftImageIndex].vote++;
    } else if (event.target.id === "middle-image") {
      BusMall.allProducts[middleImageIndex].vote++;
    } else if (event.target.id === "right-image") {
      BusMall.allProducts[rightImageIndex].vote++;
    } else {
      alert("click on the image");
      userAttempts--;
      attempt.innerHTML = `Vote Numbers is : ${userAttempts}`;
    }
    BusMall.render();
  } else {
    attempt.innerHTML = "You have 0 Attempts";

    if (try2 === true) {
      results.appendChild(button);
      button.className = "button";
      button.innerHTML = "Click to see the results";

      try2 = false;
    }
    showChart();
    for (let i = 0; i < BusMall.allProducts.length; i++) {
      voteArr.push(BusMall.allProducts[i].vote);
      shownArr.push(BusMall.allProducts[i].shown);
    }
    console.log(voteArr);
    console.log(shownArr);
  }
}

let buttonClick = function () {
  console.log(eneable);

  button.className = "button";
  button.innerHTML = "Click to see the results";
  let ulElment = document.createElement("ul");
  results.appendChild(ulElment);
  if (eneable === true) {
    for (let i = 0; i < BusMall.allProducts.length; i++) {
      let liElment = document.createElement("li");
      ulElment.appendChild(liElment);
      liElment.textContent = `${BusMall.allProducts[i].name} has  ${BusMall.allProducts[i].vote} Votes And Has ${BusMall.allProducts[i].shown} Shown `;
      eneable = false;
    }
  }
};

button.addEventListener("click", buttonClick);
// chart.js
function showChart() {
  const data = {
    labels: namesArr,
    datasets: [
      {
        label: "Votes",
        data: voteArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },

      {
        label: "Shown",
        data: shownArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  var myChart = new Chart(document.getElementById("myChart"), config);
}

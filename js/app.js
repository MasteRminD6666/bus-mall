'use strict';
// global Variables 
let prodcutDiv = document.getElementById('prodctus') ; 
let button= document.createElement('button') ;
let results = document.getElementById('results');
let leftImageElement= document.getElementById('left-image');
let middleImageElement= document.getElementById('middle-image');
let rightImageElement= document.getElementById('right-image');
let maxAttempts=25;
let userAttempts=0;
let leftImageIndex ;
let middleImageIndex ;
let rightImageIndex ;

function BusMall(name,src) {
    this.name = name ;
    this.sorcue = src ; 
    this.shown = 0 ;
    this.vote = 0 ; 

    BusMall.allProducts.push(this) ; 
    
}

BusMall.allProducts = [] ;

// instance 
new BusMall('bag','./img/bag.jpg') ;
new BusMall('banana','./img/banana.jpg') ;
new BusMall('bathroom','./img/bathroom.jpg') ;
new BusMall('boots','./img/boots.jpg') ;
new BusMall('breakfast','./img/breakfast.jpg') ;
new BusMall('bubblegum','./img/bubblegum.jpg') ;
new BusMall('chair','./img/chair.jpg') ;
new BusMall('cthulhu','/img/cthulhu.jpg') ;
new BusMall('dog-duck','/img/dog-duck.jpg') ;
new BusMall('dragon','/img/dragon.jpg') ;
new BusMall('pen','/img/pen.jpg') ;
new BusMall('pet-sweep','/img/pet-sweep.jpg') ;
new BusMall('scissors','/img/scissors.jpg') ;
new BusMall('shark','/img/shark.jpg') ;
new BusMall('sweep','/img/sweep.png') ;
new BusMall('tauntaun','/img/tauntaun.jpg') ;
new BusMall('unicorn','/img/unicorn.jpg') ;
new BusMall('water-can','/img/water-can.jpg') ;
new BusMall('wine-galss','/img/wine-glass.jpg') ;



function getRndIndex() {
    return Math.floor(Math.random() * BusMall.allProducts.length);
  }

// render 

BusMall.render= function() {
   
    leftImageIndex= getRndIndex();
    middleImageIndex = getRndIndex();
    rightImageIndex= getRndIndex();
    BusMall.allProducts[leftImageIndex].shown++;
    BusMall.allProducts[middleImageIndex].shown++;
    BusMall.allProducts[rightImageIndex].shown++;
    // console.log(BusMall.allProducts[4].sorcue);
    while (leftImageIndex===rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex) {
        rightImageIndex=getRndIndex();
        middleImageIndex= getRndIndex();
      }
    // console.log(BusMall.allProducts);
  leftImageElement.src=BusMall.allProducts[leftImageIndex].sorcue;
  middleImageElement.src=BusMall.allProducts[middleImageIndex].sorcue;
  rightImageElement.src=BusMall.allProducts[rightImageIndex].sorcue;
  
    // console.log('this is left',leftImageIndex)
    // console.log('this is middle',middleImageIndex)
    // console.log('this is right',rightImageIndex)
}
BusMall.render()
let oneclick = true;

prodcutDiv.addEventListener('click',voteHandling );


let eneable = true
let try2 = true
function voteHandling(event) {
    
    userAttempts++;  
    let attempt = document.getElementById('Tries');
    attempt.innerHTML= `Vote Number: ${userAttempts}`
    
//   console.log(event.target.id);

    if (userAttempts < maxAttempts) {
    
        if (event.target.id==='left-image') {

            BusMall.allProducts[leftImageIndex].vote++;
            console.log(BusMall.allProducts[leftImageIndex]);
        }
        else if (event.target.id==='middle-image'){
            BusMall.allProducts[middleImageIndex].vote++;
            console.log(BusMall.allProducts[middleImageIndex]);
        }
        else if (event.target.id==='right-image'){
            BusMall.allProducts[rightImageIndex].vote++;
            console.log(BusMall.allProducts[rightImageIndex]);
        }
        else{
            alert('click on the image')
            userAttempts--;
            attempt.innerHTML= `Vote Numbers is : ${userAttempts}`
            
        }
        BusMall.render()
        
        
    }else{
        attempt.innerHTML= 'You have 0 Attempts'
        
        if (try2 === true){
            
        
            results.appendChild(button) ; 
            button.className = 'button'
            button.innerHTML = 'Click to see the results'
          
            try2= false
        }
        
    }
   
   
    
}
let buttonClick =  function() {
    console.log(eneable)
    
     
    button.className = 'button'
    button.innerHTML = 'Click to see the results'
    let ulElment = document.createElement('ul');
    results.appendChild(ulElment);
    if (eneable === true) {
        for (let i = 0; i < BusMall.allProducts.length; i++) {
        
        
            let liElment = document.createElement('li');
            ulElment.appendChild(liElment);
            liElment.textContent= `${BusMall.allProducts[i].name} has  ${BusMall.allProducts[i].vote} Votes And Has ${BusMall.allProducts[i].shown} Shown `
            eneable= false;
        }
    }
 

    
   
   
    }
button.addEventListener('click',buttonClick );


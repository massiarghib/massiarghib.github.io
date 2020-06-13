let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/birdly-dribble.png') {
      myImage.setAttribute ('src','images/birdly-dribble (2).png');
    } else {
      myImage.setAttribute ('src','images/birdly-dribble.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Welcome to my logofolio, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to my logofolio, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
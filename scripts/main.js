

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


myImage.onclick = function()
{
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/image1.jpeg')
	{
		myImage.setAttribute('src','images/image0.jpeg');
	}
	else
	{
		myImage.setAttribute('src','images/image1.jpg');
	}

}


function setUserName() {
  var myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Drum & Bass is awesome, ' + myName;}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Drum & Bass is awesome, ' + storedName;
}
  myButton.onclick = function() {
  setUserName();}
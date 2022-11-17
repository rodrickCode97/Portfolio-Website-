/* colors 
Baby Blue Eyes #A9CEF4
Steel Teal #6F919B
Granite Gray #666666
Steel Blue #58819D
Black Coral #4B5E6C
*/



let headText = document.getElementsByClassName('display-4')[1];
let headText1 = document.getElementsByClassName('display-4')[2];
let headText2 = document.getElementsByClassName('display-4')[3];
let headText3 = document.getElementsByClassName('display-4')[4];
let jumbotron = document.getElementById('jumbotrons');
let navLogo = document.getElementById('navBrand');
let colors = ['#A9CEF4', '#6F919B', '#666666', '#58819D','#4B5E6C'];

jumbotron.addEventListener('mouseover', function() {
    jumbotron.style.color = colors[Math.floor(Math.random()* 5)];
});
headText.addEventListener('mouseover', function(){
    headText.style.color = colors[Math.floor(Math.random() * 5)];
});
headText1.addEventListener('mouseover', function(){
    headText1.style.color = colors[Math.floor(Math.random() * 5)];
});
headText2.addEventListener('mouseover', function(){
    headText2.style.color = colors[Math.floor(Math.random() * 5)];
});
headText3.addEventListener('mouseover', function(){
    headText3.style.color = colors[Math.floor(Math.random() * 5)];
});

navLogo.addEventListener('mouseover', function (){
    navLogo.style.color = colors[Math.floor(Math.random()* 5)];
});
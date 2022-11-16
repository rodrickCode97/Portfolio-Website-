/* colors 
Baby Blue Eyes #A9CEF4
Steel Teal #6F919B
Granite Gray #666666
Steel Blue #58819D
Black Coral #4B5E6C
*/
let colors = ['#A9CEF4', '#6F919B', '#666666', '#58819D','#4B5E6C'];

newColor = colors[Math.floor(Math.random() * 5)];

const div = document.getElementsByClassName('container')[1];

div.addEventListener('mouseover', (event)=>{
event.target.style.color = newColor;
});

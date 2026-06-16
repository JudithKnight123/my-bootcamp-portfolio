// // 1. use document.getElementById to select the searchTerm Button
// var searchTerm = document.getElementById("searchTerm");
// // 2. use document.getElementById to select the searchButton Button
// var searchButton = document.getElementById("searchButton");

// // 3. add an event listener to the searchButton that calls the search function when clicked
// searchButton.addEventListener("click", onClickSearchButton);

// function onClickSearchButton() {
//   // 4. use the value property of the searchInput to get the search term
//   //TODO:
//   var searchTerm = searchInput.value;
  
//   // 5. select the searches div using document.getElementById
//   var searchesDiv = document.getElementById("searches");
//   //TODO:
//   // 6. create a new li element using document.createElement
//   var newLi = document.createElement("li");
//   //TODO:
//   // 7. set the innerHTML of the new paragraph to the search term

//   //TODO:
//   // 8. append the new paragraph to the searches div
//   //TODO:
// }


// 1. use document.getElementById to select the searchTerm Button
var saveTerm = document.getElementById("saveTerm");
// 2. use document.getElementById to select the searchButton Button
var saveButton = document.getElementById("saveButton");
// 3. add an event listener to the searchButton that calls the search function when clicked
saveButton.addEventListener("click", onClickSaveButton);

function onClickSaveButton() {
  // 4. use the value property of the searchInput to get the search term
  //TODO:
  var searchInput = saveTerm.value;
  
  // 5. select the searches div using document.getElementById
  var searchesDiv = document.getElementById("searches");
  //TODO:
  // 6. create a new li element using document.createElement
  var newLi = document.createElement("li");
  //TODO:
  // 7. set the innerHTML of the new paragraph to the search term
newLi.innerHTML = searchInput;
  //TODO:
  // 8. append the new paragraph to the searches div
searchesDiv.appendChild(newLi);
  //TODO:
}

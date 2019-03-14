// from data.js
var tableData = data;

var submit = d3.select("#filter-btn");


//Define the function to get the date whenever user click the filter button

submit.on("click", function() {
	
	d3.event.preventDefault();

//Declaring the variable to get the tbody	
	var node = document.getElementById("ufo-body");

	while (node.hasChildNodes()) 
	{

    node.removeChild(node.lastChild);
	};


	var inputElement = d3.select(".form-control")
	var inputValue = inputElement.property("value");
	
	var filteredData = tableData.filter(UFOdate => UFOdate.datetime === inputValue);
	tbody = d3.select("tbody")
	
	filteredData.forEach((ufo) => {
		
	var row = tbody.append("tr");
	Object.entries(ufo).forEach(([key, value]) => {
	  
    var cell = tbody.append("td");
    cell.text(value);
  });
});
	
});
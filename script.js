function insert_Row() {
    //Write your code here
	const tableHTML = document.getElementById("sampleTable");
	 var row = tableHTML.insertRow(0);
    
    // Insert new cells (<td>) into the row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    // Add some text to the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

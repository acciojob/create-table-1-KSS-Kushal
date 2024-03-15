function insert_Row() {
    //Write your code here
  const add = `
  <tr>
  <td>New Cell1</td>
  <td>New Cell2</td>
  </tr>
  `;
	const tableHTML = document.getElementById("sampleTable");
	tableHTML.innerHTML = add + tableHTML.innerHTML;
  
}

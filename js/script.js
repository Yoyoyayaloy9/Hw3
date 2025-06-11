/*
Name: Mengly Lim
Course: COMP 4610 GUI I
Assignment: HW3 - Dynamic Multiplication Table
Description: This script handles form submission, input validation,
and dynamic creation of the multiplication table based on the user's input.
*/

document.getElementById("mult-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const startCol = parseInt(document.getElementById("startCol").value);
  const endCol = parseInt(document.getElementById("endCol").value);
  const startRow = parseInt(document.getElementById("startRow").value);
  const endRow = parseInt(document.getElementById("endRow").value);
  const errorDiv = document.getElementById("error-message");
  const tableContainer = document.getElementById("table-container");

  errorDiv.textContent = "";
  tableContainer.innerHTML = "";

  if (
    isNaN(startCol) || isNaN(endCol) ||
    isNaN(startRow) || isNaN(endRow)
  ) {
    errorDiv.textContent = "All inputs must be numbers.";
    return;
  }

  if (
    startCol < -50 || endCol > 50 ||
    startRow < -50 || endRow > 50
  ) {
    errorDiv.textContent = "Values must be between -50 and 50.";
    return;
  }

  if (startCol > endCol || startRow > endRow) {
    errorDiv.textContent = "Start values must be less than or equal to end values.";
    return;
  }

  // Create table
  const table = document.createElement("table");

  // Header row
  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th")); // Top-left empty cell
  for (let col = startCol; col <= endCol; col++) {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Data rows
  for (let row = startRow; row <= endRow; row++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = row;
    tr.appendChild(th);

    for (let col = startCol; col <= endCol; col++) {
      const td = document.createElement("td");
      td.textContent = row * col;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
});

function clearTable() {
  document.getElementById("table-container").innerHTML = "";
  document.getElementById("error-message").textContent = "";
}
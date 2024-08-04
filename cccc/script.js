window.addEventListener('load', function () {
    loadItemsFromLocalStorage();
  });
  
  document.getElementById('itemForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const serialNumber = parseInt(document.getElementById('serialNumber').value, 10);
    const itemDescription = document.getElementById('itemDescription').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value, 10);
  
    const totalPrice = price * quantity;
  
    const newItem = {
      serialNumber: serialNumber,
      itemDescription: itemDescription,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice
    };
  
    // Check if the serial number is already used
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const usedSerialNumbers = items.map(item => item.serialNumber);
    if (usedSerialNumbers.includes(serialNumber)) {
      alert('Serial number is already used. Please choose a different serial number.');
      return;
    }
  
    let existingItems = JSON.parse(localStorage.getItem('items')) || [];
    existingItems.push(newItem);
    existingItems.sort((a, b) => a.serialNumber - b.serialNumber); // Sort by serial number
    localStorage.setItem('items', JSON.stringify(existingItems));
  
    displayItems();
  });
  
  function displayItems() {
    const tableBody = document.getElementById('itemTableBody');
    const totalPriceColumn = document.getElementById('totalPriceColumn');
    tableBody.innerHTML = '';
  
    const items = JSON.parse(localStorage.getItem('items')) || [];
    let totalSum = 0;
  
    for (const item of items) {
      const newRow = tableBody.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
      const cell6 = newRow.insertCell(5);
  
      cell1.innerHTML = item.serialNumber;
      cell2.innerHTML = item.itemDescription;
      cell3.innerHTML = item.price;
      cell4.innerHTML = item.quantity;
      cell5.innerHTML = item.totalPrice;
  
      // Create edit and delete buttons
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'btn btn-sm btn-secondary';
      editButton.addEventListener('click', () => editItem(item.serialNumber));
      cell6.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'btn btn-sm btn-danger ml-1';
      deleteButton.addEventListener('click', () => deleteItem(item.serialNumber));
      cell6.appendChild(deleteButton);
  
      totalSum += item.totalPrice;
    }
  
    totalPriceColumn.innerText = totalSum;
  }
  
  function loadItemsFromLocalStorage() {
    if (localStorage.getItem('items')) {
      displayItems();
    }
  }
  
  function editItem(serialNumber) {
    // Implement edit functionality if needed
    alert('Edit functionality not implemented for this example.');
  }
  
  function deleteItem(serialNumber) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
  
    // Filter out the item to be deleted
    items = items.filter(item => item.serialNumber !== serialNumber);
  
    // Update local storage
    localStorage.setItem('items', JSON.stringify(items));
  
    // Re-display the items
    displayItems();
  }
  
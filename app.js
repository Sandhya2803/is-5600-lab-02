document.addEventListener('DOMContentLoaded', () => {
    const stocksData = JSON.parse(stockContent);
    const userData = JSON.parse(userContent);
    generateUserList(userData, stockData);

    const saveButton = document .querySelector('#saveButton');
    const deleteButton = document. querySelector('#deletionButton');

    // Register the event listener on the delete button
  deleteButton.addEventListener('click', (event) => {
    // we don't want the form to submit (since we will lose form state)
    event.preventDefault();

    // find the index of the user in the data array 
     const userId = document.querySelector('#userID').value;
     const userIndex = userData.findIndex(user => user.id == userId);
    // remove the user from the array
     userData.splice(userIndex, 1);
    // render the user list
     generateUserList(userData, stocksData);
   });
   Register the event listener on the save button
  saveButton.addEventListener('click', (event) => {
    // we don't want the form to submit (since we will lose form state)
    e.preventDefault();

    // find the user object in our data
    const id = document.querySelector('#userID').value;

  });





// Load existing trainers from local storage
let trainersData = JSON.parse(localStorage.getItem('trainers')) || [];

// Function to save trainers to local storage
function saveToLocalStorage() {
    localStorage.setItem('trainers', JSON.stringify(trainersData));
}

// Function to render trainers list
function renderTrainersList() {
    let trainersListContainer = document.querySelector('.trainers-list');
    trainersListContainer.innerHTML = '';

    trainersData.forEach((trainer, index) => {
        let listItem = document.createElement('div');
        listItem.innerHTML = `
            <p>${trainer.fullName} - ${trainer.email}</p>
            <button onclick="editTrainer(${index})">Edit</button>
            <button onclick="deleteTrainer(${index})">Delete</button>
        `;
        trainersListContainer.appendChild(listItem);
    });
}

// Function to add a new trainer
document.getElementById('addbtn').addEventListener('click', function() {
    let fullName = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    let newTrainer = {
        fullName: fullName,
        email: email,
        password: password
    };

    trainersData.push(newTrainer);

    // Save to local storage and render the updated list
    saveToLocalStorage();
    renderTrainersList();

    // Clear input fields
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    alert('Trainer added successfully.');
});


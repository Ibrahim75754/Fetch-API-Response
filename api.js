const loadUsers = () => {
    fetch('https://gorest.co.in/public/v1/users')
    .then(response => response.json())
    .then(users => showUsers(users))
}
loadUsers();

const showUsers = users => {
    const userContainer = document.getElementById('user-container');
    for (const user of users.data) {  
        const div = document.createElement('div');
        div.classList.add('userStyle');
        div.innerHTML = `
        <h3>ID: ${user.id}</h3>
        <h3>Name: ${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>Status: ${user.status}</p>
        `;
        userContainer.appendChild(div)
    }
}
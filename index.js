// Write Javascript Here


var mydata = JSON.parse(data);
mydata[0].name

const baseUrl = "http://localhost:3000/users";
const headers = {
    'Content-type': 'application/json; charset=UTF-8'
};

getUsersRequest().then(users => {
    //This function has been implemented already for you
    const tableEl = document.getElementById("table");
    for (const user of users) {
        tableEl.appendChild(createTableRow(user))
    }
})



function addNewUser() {
    //TODO: Implement me
    let text;
    let person = prompt("Add user:");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    }
    console.log(person)
    this.createUserRequest(person);
    this.createTableRow(person);
}

function editUser(id, userName) {
    //TODO: implement me
    let text;
    let person = prompt("Edit user:");
    if (person != null && person != "" && person == mydata[0].name) {
        text = "Don't want to edit ?";
        this.getUsersRequest();
        this.createUserRequest(person)
        this.updateUserRequest(person)
        this.createTableRow(person);
    }
}

function deleteUser(id) {
    //TODO: implement me
    let text;
    let person_id = alert("delete user?");
    if (person_id == mydata[i++].id)
        this.deleteUserRequest(person);
        this.updateUserRequest(person);
}


//CRUD HELPER METHODS
function createUserRequest(user) {
    // console.log("user", user)
    return fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user),
    }).then(response => response.json()).then(res => console.log(response))
}


function getUsersRequest() {
    return fetch(baseUrl, {
        method: 'GET',
    }).then(response => response.json())
}

function deleteUserRequest(id) {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}


function updateUserRequest(user) {
    return fetch(`${baseUrl}/${user.id}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(user),
    }).then(response => response.json())
}


//HELPER METHODS
function createTableRow(user) {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(${user.id})">Delete</a></td>`;
    return tr;
}

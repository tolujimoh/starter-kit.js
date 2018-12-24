import { getUsers, deleteUsers } from "./api/usersAPI";


getUsers().then(users => {

const usersTableBody = users.reduce((accumlator, user) => 
    accumlator += 
    `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
    </tr>`
,'');

global.document.getElementById('users').innerHTML = usersTableBody;

const deleteLinks = global.document.getElementsByClassName('deleteUser');

[...deleteLinks].map(link => {
    link.onclick = event => {
        const element = event.target;
        event.preventDefault();

        deleteUsers(element.attributes['data-id'].value);

        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});
});


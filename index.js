// 1. API URL
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch Users from the API Url
function fetchUsers() {
    // Make Use of browser fetch API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        renderUsers(data);
      });
} 

//  3. Render the Users in the DOM
function renderUsers(usersData) {
    const ul = document.getElementById("listsect");
    // Render an li tag for each of the users
    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        
        <span class="username">${user.username}</span>
        `;

        // Append  the current user li tag to the ul tag
        ul.appendChild(li);
    });
}

// 4. Add a search function to the DOM
function searchUsersByUsername() {
   ;
    const input = document.getElementById("search");
    const ul = document.getElementById("listsect");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li"); //array of all the li tags

    for(let index = 0; index < usersList.length; index++) {
        const usernameSpanTag = usersList[index].querySelectorAll(".username");
        const usernameSpanTagValue = usernameSpanTag[0].innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if(isMatch) {
            usersList[index].style.display = "block";
        } else {
            usersList[index].style.display = "none";
        }

    }
}

// Calling the fetch function
fetchUsers();
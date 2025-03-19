let username;

document.querySelector("#submit").onclick = function() {
    username = document.querySelector("#my_text").value;
    document.querySelector("#welcome").textContent = `Hello, ${username}!`;
};
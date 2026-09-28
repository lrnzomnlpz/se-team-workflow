function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Authentication successful";
    }

    return "Authentication failed";
}

console.log(login("admin", "1234"));
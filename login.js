function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Authentication successful";
    }

    return "Invalid username or password";
}

console.log(login("admin", "1234"));
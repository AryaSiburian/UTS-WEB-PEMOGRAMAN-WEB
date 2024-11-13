function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.length < 6) {
        alert("Username minimal 6 karakter.");
        return false;
      }
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex. test(username)){
        alert("Username hanya boleh berisi huruf dan angka")
        return
    }
    
}
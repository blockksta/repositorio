document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const enterButton = document.getElementById("enter-button");

    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleLogin();
        }
    });

    enterButton.addEventListener("click", function() {
        handleLogin();
    });

    function handleLogin() {
        const enteredPassword = passwordInput.value;

        // Compare a senha inserida com a senha específica
        if (enteredPassword === "pipi") {
            // Redirecionar para a página permitida
            window.location.href = "Shop.html";
        } else {
            alert("Access Denied");
            passwordInput.value = ""; // Limpa o campo de senha
        }
    }

    // Impede o envio do formulário quando a tecla "Enter" é pressionada
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });
});
if (localStorage.getItem("token") == null) {
    window.location.href = "./assets/html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = ".assets/html/signin.html";
}

function swtichTheme() {
    loginBox.classList.toggle( "dark-mode" );
    body.classList.toggle( "dark-mode" );
    h1.classList.toggle( "dark-mode" );
    inputs.forEach( input => {
        input.classList.toggle( "dark-mode" );
        } );
    loginButton.classList.toggle( "dark-side" );
    h2.classList.toggle( "dark-mode" );
}
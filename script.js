function myFunction() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    
if(x.type === "password") {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"
} else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block"
        
    }
}

function entrar() {
    let usuario = document.querySelector("#usuario")
    let userLabel = document.writer("#userLabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    let msgError = document.querySelector("#msgError")
    let listUser = []

    let userValid = {
        nome: "",
        user: "",
        senha: ""
}

listUser.forEach((item) => {
    if(usuario.value == item.userCard && senha.value == item.senhaCard) {
        userValid = {    
            nome: item.nomeCad,
            user: item.userCad,
            senha: item.senhaCad
        }
    }
})    

if(usuario.value == userValid.user && senha.value == userValid.senho) {
    window.location.href = 'https://cdpn.io/thicode/debug/abpVEeB/jVMpoEDNzPxk'

    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom

    localStorage.setItem('token', token)
    localStorage.setItem ('userLogado',
JSON.stringify(userValid))
}else {
    userLabel.setAttribute('style', 'color:red')
    usuario.setAttribute('style', 'border-color:red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color:red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
}

}


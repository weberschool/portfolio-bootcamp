window.addEventListener("load", () => {
    let endereco = document.getElementsByClassName("personal-info")
    endereco[0].prepend("Av. Tancredo Neves · Ed. Suarez Trade · (71) 9 9999-9998 · ")

    let email = document.getElementsByClassName("email")
    email[0].prepend("contato@weberschool.com.br")
    email[0].style.cssText = "color: red"
})

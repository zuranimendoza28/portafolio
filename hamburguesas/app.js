function cambiarTheme(){
    let theme = document.getElementById('theme').value;
    let body = document.getElementById('body');

    if(theme == 1){
        localStorage.setItem('1', 'them-dark')
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
    }else if (theme == 2){
        localStorage.setItem('1', 'them-light')
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
    }else if (theme == 3){
        body.classList.add("theme-free");luis
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
localStorage.setItem('1', 'them-free')
    }

}
try {
    let valor = localStorage.getItem('1')
    if(valor == 'them-dark'){
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
    }else if (valor == 'them-light'){
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
    }else if (valor == 'them-free'){
        body.classList.add("theme-free");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
    }
} catch (error) {  
}

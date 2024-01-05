//window.location.href = "./salir.html";
const FORMULARIO_HTML = document.getElementById('formualrio-html')

FORMULARIO_HTML,addEventListener('click', (e) => {
    e.preventDefault()

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email");
    let password = document.getElementById("password");
    const persons = [
        { nombre: "luis", correo: "luis@gmail.com", password: "luis6", genero: "hombre",imagenes:[
        './luis-img1.jpg',
        './luis-img2.avif',
        './luis-imag3.webp',
        './luis-img4.jpg',
        ]
    },
        { nombre: "zurani", correo: "zurani@gmail.com", password: "zurani28", genero: "mujer", imagenes:[
            './zurani-img1.jpg',
            './zurani-img2.webp',
            './zurani-img3.jpg',
            './zurani-img4.avif',

        ]
    },
        { nombre: "randal", correo: "randal@gmail.com", password: "randal", genero: "macho", imagenes:[
            './randal-img1.jpg',
            './randal-img2.jpg',
            './randal-img3.jpg',
            './randal-img4.jpg',

        ] 
    },

    ];

    if (correo.value != "" && password.value != "" && nombre.value != "")  {
        correo.classList.add("is-valid");
        correo.classList.remove("is-invalid");
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        nombre.classList.add("is-valid")
        nombre.classList.remove("is-invalid");
    }
    else {
        correo.classList.add("is-invalid");
        correo.classList.remove("is-valid");
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
        
    };
    
    persons.forEach((person) => {
        console.log(correo.value, password.value)
        if (
        person.correo == correo.value &&
        person.password == password.value
        ) {
           window.location.href = "./salir.html";
           sessionStorage.setItem('usurioLogeado', true)
           sessionStorage.setItem('imagenes',String(person.imagenes))
           sessionStorage.setItem('saludo',person.nombre)
        }

    });
   
})

function volver(){
    window.location.href = "./inicio.html"
    sessionStorage.clear()
    };


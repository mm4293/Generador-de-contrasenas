let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890°!#$%&/()=?¡*[]_:;,.-{}+¿\@';

function generar(){

    let numDigitado = parseInt (cantidad.value);

    if(numDigitado < 10){
        alert("La cantidad de caracteres tiene que ser mayor o igual a de 10")
    }
    
    let password = '';
    for(let i = 0; i < numDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;

}

//let texto = "texto";
//console.log(typeof cantMin);






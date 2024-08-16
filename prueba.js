const e = 'enter';
const i = 'imes';
const a = 'ai';
const o = 'ober';
const u = 'ufat';

const textarea = document.getElementById('codigo');
const loader = document.getElementById('loader');
const sherlock = document.querySelector('#sherlock');
const sherlocked = document.querySelector('#sherlocked');
const textoSherlocked = document.querySelector('#desencriptador');


function codificar(){
    //obtener el mensaje de la caja de texto y asignarla a la variable
    texto = document.getElementById('codigo').value;
    console.log(texto);

    if (texto === '') {
        textoSherlocked.innerHTML = 'Debe escribir un mensaje'
    }else if (/[^a-z0-9\s]/.test(texto)) {
        // Verificar si el texto contiene caracteres especiales, acentos o mayúsculas
        document.getElementById('desencriptador').textContent = 'El mensaje contiene caracteres especiales, acentos o mayúsculas';
    } else {
        //se utilzia el metodo .replace para remplazar las "e" (la g indica global, es decir todas las e que se encuentren)  por la constante e previamente definida
        texto = texto.replace(/e/g,e);
        texto = texto.replace(/i/g,i);
        texto = texto.replace(/a/g,a);
        texto = texto.replace(/o/g,o);
        texto = texto.replace(/u/g,u);
        console.log(texto);
        //limpiar la caja de texto a decifrar
        document.querySelector("#codigo").value ="";
        //poner el texto cifrado en la otra caja de texto
        //document.querySelector("#nuevocodigo").value = texto;
        //cambiar el background-color del body
        document.body.style.backgroundColor = "#FFFFFF";
        //quitar la imagen de sherlock, asigna la imagen a una variable, luego verifica si sherlock     existe, de ser cierto lo elimina, de lo contrario sigue.
        let sherlock = document.querySelector('#sherlock')
        if(sherlock){
            sherlock.remove();
        }
        //asignar el texto cifrado a el text IM SHER LOCKED Para cambiar el contenido de un elemento <p> (o cualquier otro elemento que no sea un campo de formulario) en HTML, debes utilizar la propiedad innerHTML o textContent, en lugar de value. La propiedad value es para elementos de formulario como <input>, <textarea>
        document.querySelector('#desencriptador').innerHTML = texto;
        document.querySelector('#desencriptador').style.fontSize = '1.5rem';
        document.querySelector('#desencriptador').style.color = '#FFFFFF';
        document.querySelector('#desencriptador').style.textAlign = 'justify';
        //habilitar boton de copiar
        document.querySelector('#copiar').style.visibility = 'visible';
        //remover loader
        loader.style.display = 'none';
    }
}

function decodificar(){
    //obtener el mensaje de la caja de texto y asignarla a la variable
    texto = document.getElementById('codigo').value;


    //se utilzia el metodo .replace para remplazar los valores de la constante e ("enter") por la letra "e" (la g indica global, es decir todas las e que se encuentren)  
    texto = texto.replaceAll(e,'e');
    texto = texto.replaceAll(i,'i');
    texto = texto.replaceAll(a,'a');
    texto = texto.replaceAll(o,'o');
    texto = texto.replaceAll(u,'u');
    console.log(texto);
    //asignar el texto cedifrado a el text IM SHER LOCKED Para cambiar el contenido de un elemento <p> (o cualquier otro elemento que no sea un campo de formulario) en HTML, debes utilizar la propiedad innerHTML o textContent, en lugar de value. La propiedad value es para elementos de formulario como <input>, <textarea>
    document.querySelector('#desencriptador').innerHTML = texto;
    //limpiar la caja de texto a decifrar
    document.querySelector("#codigo").value ="";
}

function copiar(){
    //seleccionar el texto encriptado
    texto = document.getElementById('desencriptador').textContent;
    console.log(texto);
    //metodo para copiar el texto 
    navigator.clipboard.writeText(texto);
    /*Mensaje de texto copiado*/
    document.querySelector('#desencriptador').innerHTML = 'Texto copiado con exito!'
}

/*poner imagen y audio cunado se este escribiendo en el textarea*/
/*el text area esta a la espera de un evento, en este caso es un
input, que ejecutara la funcion don el loader aparece 
y la imagen de sherlock desaparece, y por ultimo se da play a la 
cancion*/

/*repetir la cancion una y otra vez*/
sherlocked.loop = true;

textarea.addEventListener('input', function(){
    /*añadir loader cuando se esta escribiendo*/
    loader.style.display = 'flex';
    /*quitar la imagen de sherlock*/
    sherlock.style.display = 'none';
    /*dar play a la cancion*/    
    sherlocked.play();
    /*activar animacion del texto*/
    textoSherlocked.style.animationPlayState = 'running';
});

/*funcion cambiar paleta de colores*/
function colors_1(){
    document.documentElement.style.setProperty('--color-primario', '#e5e5e5');
    document.documentElement.style.setProperty('--color-secundario', ' #f1dbda');
    document.documentElement.style.setProperty('--color-terciario', '#e9f2f9');
    document.documentElement.style.setProperty('--color-cuartario', '#3a89c9');
    document.documentElement.style.setProperty('--color-quintario', '#a2a9af');
    document.documentElement.style.setProperty('--color-sexto', '#d1eaee');
    
}
function colors_2(){
    document.documentElement.style.setProperty('--color-primario', '#cbdad5');
    document.documentElement.style.setProperty('--color-secundario', ' #89a7b1');
    document.documentElement.style.setProperty('--color-terciario', '#566981');
    document.documentElement.style.setProperty('--color-cuartario', '#3a415a');
    document.documentElement.style.setProperty('--color-quintario', '#34344e');
    document.documentElement.style.setProperty('--color-sexto', '#d1eaee');

}
function colors_3(){
    document.documentElement.style.setProperty('--color-primario', '#e3e1b1');
    document.documentElement.style.setProperty('--color-secundario', ' #e8cc9c');
    document.documentElement.style.setProperty('--color-terciario', '#ce938b');
    document.documentElement.style.setProperty('--color-cuartario', '#9c667d');
    document.documentElement.style.setProperty('--color-quintario', '#3b5274');
    document.documentElement.style.setProperty('--color-sexto', '#d1eaee');

    const boton = document.querySelector('#boton3');

}
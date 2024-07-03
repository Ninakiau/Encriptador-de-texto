//traemos el input con el texto a encriptar o desencriptar
let texto = document.getElementById("text");

//Eventos
//Traemos el botón de encriptar y le agregamos un evento al hacer click en el botón y llamamos a la función encriptar
let btnEncriptar = document.getElementById("encriptar");
btnEncriptar.addEventListener("click", (event) => {
  //Prevenimos el comportamiento por defecto del evento
  event.preventDefault();
  //Obtenemos el texto ingresado en el input y lo guardamos en una variable
  let text = texto.value;

  //Validamos que solo se ingrese letras en minusculas y sin caracteres especiales
  if (validarInput(text)) {
    //Llamamos a la función encriptar y le pasamos el texto como parámetro
    let newText = encriptar(text);
    //Mostramos el texto encriptado en el textarea
    document.getElementById("texto-encriptado").innerHTML = newText;
    //Limpiamos el input
    document.getElementById("text").value = "";
  }
  //De no cumplir las validaciones limpiamos el input
  document.getElementById("text").value = "";
});

//Funciones

//Funcion para encriptar
function encriptar(text) {
  //Creamos una variable para el texto encriptado
  let newText = "";

  //Recorremos el texto y reemplazamos las letras
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        newText += "ai";
        break;
      case "e":
        newText += "enter";
        break;
      case "i":
        newText += "imes";
        break;
      case "o":
        newText += "ober";
        break;
      case "u":
        newText += "ufat";
        break;
      case " ":
        newText += " ";
        break;
      default:
        newText += text[i];
        break;
    }
  }

  //Devolvemos el texto encriptado
  return newText;
}

//Traemos el botón de desencriptar y le agregamos un evento al hacer click en el botón y llamamos a la función desencriptar
let btnDesencriptar = document.getElementById("desencriptar");
btnDesencriptar.addEventListener("click", (event) => {
  //Prevenimos el comportamiento por defecto del evento
  event.preventDefault();

  //Obtenemos el texto ingresado en el input y lo guardamos en una variable
  let text = texto.value;

  //Validamos que solo se ingrese letras en minusculas y sin caracteres especiales
  if (validarInput(text)) {
    //Llamamos a la función desencriptar y le pasamos el texto como parámetro
    let newText = desencriptar(text);
    //Mostramos el texto encriptado en el textarea
    document.getElementById("texto-encriptado").innerHTML = newText;
    //Limpiamos el input
    document.getElementById("text").value = "";
  }

  //De no cumplir las validaciones limpiamos el input
  document.getElementById("text").value = "";
});

//Funcion para desencriptar
function desencriptar(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "a":
          newText += "a";
          i += 1;
          break;
        case "e":
          newText += "e";
          i += 4;
          break;
        case "i":
          newText += "i";
          i += 3;
          break;
        case "o":
          newText += "o";
          i += 3;
          break;
        case "u":
          newText += "u";
          i += 3;
          break;
        default:
          newText += text[i];
          break;
      }
    }
    return newText;
  }

//Validamos que sólo se ingrese letras en minusculas y sin caracteres especiales.
function validarInput(text) {
  let regex = /^[a-zñ\s]+$/;
  if (!regex.test(text)) {
    alert(
      "Por favor, ingrese solo letras minúsculas y sin caracteres especiales."
    );
    return false;
  }
  return true;
}

//Botón para copiar el texto encriptado
let btnCopy = document.getElementById("copy-text");
btnCopy.addEventListener("click", (event) => {
  //Prevenimos el comportamiento por defecto del evento
  event.preventDefault();
  //Copiamos el texto encriptado
  navigator.clipboard.writeText(
    document.getElementById("texto-encriptado").innerHTML
  );
  //Mostramos una notificación que indica que el texto ha sido copiado
  let notification = document.getElementById("copy-notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 500); // La notificación se ocultará después de 2 segundos
});

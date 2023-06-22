const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  let textoEscrito = textarea.value;
  let validador = textoEscrito.match(/^[a-z\s]*$/);

  if (!validador || validador.length === 0) {
    alert("Solo se permiten letras minúsculas y espacios");
    return false;
  }

  return true;
}

function btnEncriptar() {
  if (validarTexto()) {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    copia.style.display = "block";
  }
}

// Laves de encriptacion
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        new RegExp(matrizCodigo[i][0], "g"),
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensaje.value);
  mensaje.value = textoDesencriptado;
  console.log("desencriptado")
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        new RegExp(matrizCodigo[i][1], "g"),
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function Copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}
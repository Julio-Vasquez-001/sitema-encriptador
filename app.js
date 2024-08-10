document.addEventListener("DOMContentLoaded", function() {
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const btnCopiar = document.querySelector(".btn-copiar");
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    btnEncriptar.addEventListener("click", function() {
        const texto = textArea.value;
        const textoEncriptado = encriptarTexto(texto);
        mensaje.value = textoEncriptado;
        if (textoEncriptado) {
            mensaje.classList.add("sin-imagen");
        }
    });

    btnDesencriptar.addEventListener("click", function() {
        const texto = textArea.value;
        const textoDesencriptado = desencriptarTexto(texto);
        mensaje.value = textoDesencriptado;
        if (textoDesencriptado) {
            mensaje.classList.add("sin-imagen");
        }
    });

    btnCopiar.addEventListener("click", function() {
        mensaje.select();
        document.execCommand("copy");
    });

    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
});

const textoEntrada = document.getElementById("texto");
const resultado = document.querySelector(".resultado");
const botaoCriptografar = document.getElementById("criptografar");
const botaoDescriptografar = document.getElementById("descriptografar");
const botaoCopiar = document.getElementById("copiar");

function criptografarTexto() {
    let texto = textoEntrada.value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoCriptografado);
    textoEntrada.value = "";
}

function descriptografarTexto() {
    let textoCriptografado = textoEntrada.value;
    let textoDescriptografado = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDescriptografado);
    textoEntrada.value = "";
}

function mostrarResultado(texto) {
    resultado.innerHTML = `
        <p>${texto}</p>
    `;
    botaoCopiar.style.display = "block"; 
}

function copiarTexto() {
    let textoCopiado = resultado.querySelector("p").textContent;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
            resultado.innerHTML = '';
        })
        .catch(err => {
            console.error("Falha ao copiar: ", err);
        });
}

botaoCriptografar.addEventListener("click", criptografarTexto);
botaoDescriptografar.addEventListener("click", descriptografarTexto);
botaoCopiar.addEventListener("click", copiarTexto);
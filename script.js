
/* ===== CURIOSIDADES DA KOMBI ===== */

const botaoCuriosidade =
    document.querySelector("#botao-curiosidade");

const textoCuriosidade =
    document.querySelector("#curiosidade-texto");

const curiosidades = [
    "A Kombi começou a ser produzida em 1950, na Alemanha.",
    "A fabricação nacional da Kombi começou em 1957.",
    "A Kombi ficou conhecida por sua versatilidade.",
    "O nome Kombi tem origem na palavra alemã Kombinationskraftwagen.",
    "A produção brasileira da Kombi terminou em 2013."
];

let indice = 0;

if (botaoCuriosidade && textoCuriosidade) {

    botaoCuriosidade.addEventListener("click", function() {

        textoCuriosidade.textContent = curiosidades[indice];

        indice++;

        if (indice >= curiosidades.length) {
            indice = 0;
        }

    });

}


/* ===== FORMULÁRIO DE CONTATO ===== */

const formularioContato =
    document.querySelector("#formulario-contato");

if (formularioContato) {

    formularioContato.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nome =
            document.querySelector("#nome").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const assunto =
            document.querySelector("#assunto").value.trim();

        const mensagem =
            document.querySelector("#mensagem").value.trim();

        const emailDestino =
            "contato.aghatarocha@gmail.com";

        const corpo =
            "Nome: " + nome + "\n" +
            "E-mail: " + email + "\n\n" +
            "Mensagem:\n" + mensagem;

        const linkEmail =
            "mailto:" + emailDestino +
            "?subject=" + encodeURIComponent(assunto) +
            "&body=" + encodeURIComponent(corpo);

        const status =
            document.querySelector("#status-formulario");

        status.textContent =
            "Seu aplicativo de e-mail será aberto. " +
            "Confirme o envio por lá.";

        window.location.href = linkEmail;

    });

}


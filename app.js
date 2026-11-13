
const numeroWhatsApp = "55988670677";

// async --> assincrono
async function imagemApi(){
    const imagem = document.querySelector(".img-dog");
    // só roda na página que tem a imagem do cachorro (index.html)
    if (!imagem) return;

    // espera chegar a resposta --> await
    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
    let dadosApi = await respostaApi.json();
    imagem.src = dadosApi.message;
    console.log(dadosApi);

}
imagemApi()


function whatZap(){

const texto = "Olá! Vim pelo site da PetPurple e gostaria de agendar um horário para o meu pet.";
const textoFormatado =encodeURIComponent(texto)
const url = "https://wa.me/" + numeroWhatsApp + "?text=" + textoFormatado;
open(url,'_blank');
console.log(url);
}

// formulário da página de contato --> manda a mensagem pelo WhatsApp
function enviarContato(evento){
    evento.preventDefault(); // não recarrega a página

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const mensagem = document.querySelector("#mensagem").value;

    const texto = "Olá! Meu nome é " + nome +
        "\nE-mail: " + email +
        "\nTelefone: " + telefone +
        "\nMensagem: " + mensagem;

    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto);
    open(url, '_blank');
}

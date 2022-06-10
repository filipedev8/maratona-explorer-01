// variaveis
// quais são meus dados de entrada?
// quais são meus dados de saida?

const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


// clicar em fazer perguntar
function fazerPergunta() {

  if(inputPergunta.value == ""){
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  // console.log(respostas[numeroAleatorio])

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  // sumir a resposta depois de 3 segundos
  elementoResposta.style.opacity = 1;
  
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}


// AUDIO DO SITE

var podcastAudio = document.querySelector('#podcast-audio')
var playBtn = document.querySelector('#podcast-play')
var pauseBtn = document.querySelector('#podcast-pause')

const playShow = function() {
  podcastAudio.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
};

const pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'none';
};
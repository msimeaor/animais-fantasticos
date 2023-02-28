export default function initFaq() {
  const classeAtivo = 'ativo'
  const perguntasFaq = document.querySelectorAll('[data-acc="accordion"] dt')

  adcEventCLickNasPerguntas()

  function adcEventCLickNasPerguntas() {
    perguntasFaq.forEach(pergunta => {
      pergunta.addEventListener('click', ativarOuDesativarPerguntaeResposta)
    })
  }

  function ativarOuDesativarPerguntaeResposta(event) {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }
}
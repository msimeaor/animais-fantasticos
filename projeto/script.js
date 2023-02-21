var classeAtivo = 'ativo'

function initAnimais() {
  const listaImagensAnimais = document.querySelectorAll('.js-tabmenu li')
  const listaSectionsDescricoes = document.querySelectorAll('.js-tabcontent section')
  listaSectionsDescricoes[0].classList.add(classeAtivo)

  adcEventNasImagensChamarInitAnimais()

  function adcEventNasImagensChamarInitAnimais() {
    listaImagensAnimais.forEach((imagem, index) => {
      imagem.addEventListener('click', function() {
        ativarSection(index)
      })
    })
  }

  function ativarSection(index) {
    desativarTodasSections()
    listaSectionsDescricoes[index].classList.add(classeAtivo)
  }

  function desativarTodasSections() {
    listaSectionsDescricoes.forEach(section => {
      section.classList.remove(classeAtivo)
    })
  }
}

function initFaq() {
  const perguntasFaq = document.querySelectorAll('.js-accordion dt')

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

function initScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  sections[0].classList.add(classeAtivo)
  const $60porcentoHeightView = window.innerHeight * 0.6

  window.addEventListener('scroll', medirSecTopEAtivar)

  function medirSecTopEAtivar() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top

      if(sectionTop < $60porcentoHeightView) {
        section.classList.add(classeAtivo)
      }

    })
  }
}
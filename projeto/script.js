var classeAtivo = 'ativo'

function initTabNav() {
  const listaAnimais = document.querySelectorAll('.js-tabmenu li')
  const descricaoAnimais = document.querySelectorAll('.js-tabcontent section')

  if(listaAnimais.length && descricaoAnimais.length) {
    descricaoAnimais[0].classList.add(classeAtivo)

    function ativarSectionReferenteAoLi(index) {
      descricaoAnimais.forEach(item => {
        item.classList.remove(classeAtivo)
      })

      descricaoAnimais[index].classList.add(classeAtivo)
    }

    listaAnimais.forEach((li, index) => {
      li.addEventListener('click', function() {
        ativarSectionReferenteAoLi(index)
      })
    })
  }
}

function initAccordion() {
  const perguntasFaq = document.querySelectorAll('.js-accordion dt')

  if(perguntasFaq.length) {
    function ativarPerguntaeResposta(event) {
      this.classList.toggle(classeAtivo)
      this.nextElementSibling.classList.toggle(classeAtivo)
    }
  
    perguntasFaq.forEach(item => {
      item.addEventListener('click', ativarPerguntaeResposta)
    })
  }

}

function initScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  sections[0].classList.add(classeAtivo)

  const $60porCentoView = window.innerHeight * 0.6

  function atualizarSectionTopeAtivarSection(event) {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top

      if(sectionTop < $60porCentoView) {
        section.classList.add(classeAtivo)
      }

    })
  }

  window.addEventListener('scroll', atualizarSectionTopeAtivarSection)
}

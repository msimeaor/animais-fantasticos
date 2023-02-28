export default function initAnimais() {
  const classeAtivo = 'ativo'
  const listaImagensAnimais = document.querySelectorAll('[data-tab="menu"] li')
  const listaSectionsDescricoes = document.querySelectorAll('[data-tab="content"] section')
  listaSectionsDescricoes[0].classList.add('show-right')

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
    const classeDirecao = listaSectionsDescricoes[index].dataset.anime
    listaSectionsDescricoes[index].classList.add(classeDirecao)
  }

  function desativarTodasSections() {
    listaSectionsDescricoes.forEach(section => {
      section.classList.remove('show-right', 'show-up', 'show-left', 'show-down')
    })
  }
}
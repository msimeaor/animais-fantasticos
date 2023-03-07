export default function initMenu() {
  const botaoMenu = document.querySelector('[data-menu="button"]')
  const menuLista = document.querySelector('.menu-lista')

  botaoMenu.addEventListener('click', mostrarListaMenu)

  function mostrarListaMenu(event) {
    menuLista.classList.toggle('ativo')
  }
}
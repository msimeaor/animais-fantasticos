export default function initNumeros() {
  
  function animaNumero() {
    const numeros = document.querySelectorAll('[data-especie="numero"]')

    numeros.forEach(numero => {
      const valorNumero = +numero.innerHTML
      const incremento = Math.floor(valorNumero / 30)

      let start = 0
      const timer = setInterval(() => {
        start += incremento
        numero.innerHTML = start

        if(start > valorNumero) {
          clearInterval(timer)
          numero.innerHTML = valorNumero
        }
      }, 75)
    })
  }

  const observador = new MutationObserver(handleMutation)
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      animaNumero()
      observador.disconnect()
    };
  }

  const section = document.querySelector('.especies')
  observador.observe(section, {attributes: true})

}
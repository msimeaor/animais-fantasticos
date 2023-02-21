/*

const menu = document.querySelector('.menu')

menu.classList.add('cabecalho', 'main')
console.log(menu.className) 

menu.className += ' navegacao login-container'
console.log(menu.classList)

*/

/*

const menu = document.querySelector('.menu')
const itensMenu = menu.querySelectorAll('a')

itensMenu.forEach(function(item) {
    item.setAttribute('class', item.className + ' ativo')
})

// Novo exercicio

itensMenu.forEach(item => {
    item.classList.remove('ativo')
})

itensMenu[0].setAttribute('class', 'ativo')
console.log(itensMenu[0].className)

// Novo exercicio

const allImg = document.querySelectorAll('img')
allImg[3].setAttribute('alt', 'Imagem de lobo')

allImg.forEach(function(item) {
    console.log(item.getAttribute('src') + ' Tem alt? ' + item.hasAttribute('alt'))
})

// Novo exercicio 

itensMenu[itensMenu.length - 1].setAttribute('href', 'https://www.instagram.com/msimeaor/')
itensMenu[itensMenu.length - 1].setAttribute('target', '_blank')

*/

/*

const animaisLista = document.querySelector('.animais-lista')
const heightImg = animaisLista.clientHeight
const widthImg = animaisLista.clientWidth
const scrollHeightImg = animaisLista.scrollHeight

console.log(`Dimensoes da imagem: ${widthImg}x${heightImg} imagem com scroll tem um height de ${scrollHeightImg}`)

const raposah2 = document.querySelector('h2')
const rect = raposah2.getBoundingClientRect()
const raposah2Top = rect.top

if(raposah2Top < 0) {
    console.log('O h2 "raposa" saiu da tela')
}

const dimensoesTela = window.matchMedia('(max-width: 900px)')
if(dimensoesTela.matches) {
    console.log('tela menor que 900px')
} else {
    console.log('tela maior que 900px')
}

*/

/*

window.onload = function() {
    const todasImagens = document.querySelectorAll('img')

    let somaWidthImagens = 0
    todasImagens.forEach(item => {
        somaWidthImagens += item.clientWidth
        console.log(item.clientWidth) 
    })

    console.log(somaWidthImagens)

}

const widthSite = window.matchMedia('(max-width: 720px)')

if(widthSite.matches) {
    const menu = document.querySelector('.menu')
    menu.className += ' menu-mobile'
    console.log(menu.classList)
}

*/

/*

const allLinks = document.querySelectorAll('a')
console.log(allLinks)

const externalLink = document.querySelector('a[href^=http]')
console.log(externalLink.getAttribute('href'))

function handleLink(event) {
    event.preventDefault()
    console.log(event)
}

externalLink.addEventListener('click', handleLink)

*/

/*

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
    event.preventDefault()

    linksInternos.forEach(item => {
        item.classList.remove('ativo')
    })

    this.classList.add('ativo')
}

linksInternos.forEach(item => {
    item.addEventListener('click', handleLink)
})

*/

/*

const todosElementosDoSite = document.querySelectorAll('body *')

function removeItem(event) {

    event.preventDefault()
    event.target.remove()
    
}

todosElementosDoSite.forEach(item => {
    item.addEventListener('click', removeItem)
})

*/

/*

function aumentarTexto(event) {
    
    if(event.key == 't') {
        const todosTextosSite = document.querySelectorAll('Body *')
        todosTextosSite.forEach(item => {
            item.style.fontSize = '.1%'
        })
    }

}

window.addEventListener('keydown', aumentarTexto)

*/

/*

const secEscquilo = document.querySelector('#sec-esquilo')
const contatoLista = document.querySelector('.contato-lista')

secEscquilo.insertBefore(contatoLista, secEscquilo.children[2])
console.log(secEscquilo.children)

secEscquilo.removeChild(contatoLista)

*/

/*

const novoh1 = document.createElement('h1')
const rodape = document.querySelector('.copy')
const menu = document.querySelector('.menu')

novoh1.innerHTML = 'Novo titulo'
rodape.insertBefore(novoh1, rodape.children[0])

const cloneH1 = novoh1.cloneNode(true)
menu.appendChild(cloneH1)

*/


/* Exercicios

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const menuClone = menu.cloneNode(true)
copy.appendChild(menuClone)

*/

/*

const dlFaq = document.querySelector('.faq-lista')
const primeiroFilhoDlFaq = dlFaq.children[0]
const ddDoPrimeiroDl = primeiroFilhoDlFaq.nextElementSibling
console.log(ddDoPrimeiroDl)

*/

/*

const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')

faq.innerHTML = animais.innerHTML

*/


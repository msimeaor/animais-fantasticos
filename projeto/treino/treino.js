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

/*

const GridSectionAnimais = {
    h1Animais: '.animais h1.titulo', 
    h1Element() {
        return document.querySelector(this.h1Animais)
    }, 
    ulAnimais: '.animais ul.animais-lista', 
    ulElement() {
        return document.querySelector(this.ulAnimais)
    }, 
    divDescricoes: '.animais div.animais-descricao', 
    divElement() {
        return document.querySelector(this.divDescricoes)
    }
}

const Menu = { 
    ulMenu: '.menu ul' ,
    ulElement() {
        return document.querySelector(this.ulMenu)
    }, 
    ulLis: 'li', 
    ulLisElement() {
        return this.ulElement().querySelectorAll(this.ulLis)
    }
}

console.log(GridSectionAnimais.h1Element())
console.log(GridSectionAnimais.ulElement())
console.log(GridSectionAnimais.divElement().children[3])

console.log(Menu.ulLisElement())

*/

/*

function Section(seletor) {
    this.seletor = seletor
    this.element = function() {
        return document.querySelector(this.seletor)
    }
}
function Ul(seletor) {
    this.seletor = seletor
    this.element = function() {
        return document.querySelector(this.seletor)
    }
}
function Imgs(seletor) {
    this.seletor = seletor
    this.element = function() {
        return document.querySelectorAll(this.seletor)
    }

    this.ativar = function() {
        this.element().forEach(item => {
            item.classList.add('ativar')
        })
    }
}

const sectionsAnimais = new Section('.animais')
console.log(sectionsAnimais.element())

const sectionFaq = new Section('.faq')
console.log(sectionFaq.element())

const animaisLista = new Ul('.animais-lista')
console.log(animaisLista.element())

const imagensSectionAnimais = new Imgs(animaisLista.seletor + ' img')
console.log(imagensSectionAnimais.element())
imagensSectionAnimais.ativar()

*/

/* Exercicios */

/*

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(`${this.nome}, de ${this.idade} anos andou`)
    }
}

const matheus = new Pessoa('Matheus', 20)
matheus.andar()

*/

/*

function Dom(seletor) {
    this.seletor = seletor
    this.pluralElement = function() {
        return document.querySelectorAll(this.seletor)
    }

    this.addClass = function(classe) {
        this.pluralElement().forEach(element => {
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe) {
        this.pluralElement().forEach(element => {
            element.classList.remove(classe)
        })
    }
}

const listaMenu = new Dom('.menu li')
listaMenu.addClass('ativo')
listaMenu.removeClass('ativo')

*/

/*

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const matheus = new Pessoa('matheus', 'simeao', 20)
console.log(matheus)

*/

/*

const fruta = 'Banana'
console.log(fruta.slice(0, 2))

const frutas = 'banana, melancia, jabuticaba, abobrinha'
console.log(frutas.slice(5, 15))

*/

/*

const valores = [
    {
        descricao: 'Taxa do pao', 
        valor: 'R$ 39' 
    }, 
    {
        descricao: 'Taxa do Mercado', 
        valor: 'R$ 129'
    }, 
    {
        descricao: 'Recebimento do cliente', 
        valor: 'R$ 99'
    }, 
    {
        descricao: 'Taxa do banco', 
        valor: 'R$ 129'
    }, 
    {
        descricao: 'Recebimento do cliente', 
        valor: 'R$ 49'
    }
]


let somaTaxas = 0.0
valores.forEach(item => {
    
    if(item.descricao.startsWith('Taxa')) {
        let valorLimpo = item.valor.replace('R$ ', '')
        somaTaxas += +valorLimpo
    }

})

console.log(somaTaxas)

*/
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

/*

let numero = 497.99
const numeroMoeda = numero.toLocaleString('eu-ES', {style: 'currency', currency: 'EUR'})
console.log(numeroMoeda)

const numero1 = (Math.random() * 500).toFixed(2)
console.log(numero1)
const numero1Float = Number.parseFloat(numero1).toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'})
console.log(numero1Float)

*/

/*
let randomNumber = (1050 + Math.random() * (2000 - 1050)).toFixed(2)
console.log(randomNumber)

let numeros = '4, 5, 20, 27, 9'
let arrayNumeros = numeros.split(', ')
const numeroMaximo = Math.max(...arrayNumeros)
console.log(numeroMaximo)
*/

/*

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200']
let somaNumeros = 0.0

listaPrecos.forEach(item => {
    let precoLimpo = item
        .trim()
        .toLowerCase()
        .replace('r$ ', '')
        .replace(' ', '')

    let numerosComCentavos = Number.parseFloat(precoLimpo).toFixed(2)
    somaNumeros += +numerosComCentavos
})

console.log(somaNumeros.toFixed(2))

*/

/* Exercicios
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

const primeiraComida = comidas.shift() // .shift() remove o primeiro item e joga dentro da variavel
const ultimaComida = comidas.pop() // .pop() remove o ultimo item e joga dentro da variavel
comidas.push('arroz') // .push() adiciona item na ultima posicao do array
comidas.unshift('peixe', 'batata') // .unshift() adiciona item na primeira posicao do array

console.log(primeiraComida)
console.log(comidas)

*/

/* Exercicios
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

console.log(estudantes.sort())
console.log(estudantes.reverse())
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))
*/

/*Exercicios
const html = 
    `<section>
        <div>Sobre</div>
        <div>Produtos</div>
        <div>Contato</div>
    </section>`

const htmlSectionJoin = html.split('section').join('li')
console.log(htmlSectionJoin)
*/

/* Exercicios
const carros = ['Ford', 'Fiat', 'Volkswagem', 'Honda']
const carrosBackup = carros.slice()

carros.pop()
console.log(carros)
console.log(carrosBackup)
*/

/*
const aulas = [
    {
        nome: 'HTML 1', 
        min: 15
    }, 
    {
        nome: 'HTML 2', 
        min: 10
    }, 
    {
        nome: 'CSS 1', 
        min: 20
    }, 
    {
        nome: 'JS 1', 
        min: 25
    }
]

let totMinutosAulas = 0
const minutosAulas = aulas.map(obj => {
    return obj.min
}).map(min => {
    totMinutosAulas += min
})

console.log(totMinutosAulas)
*/

/*
const numeros = [1, 4, 6, 3, 4, 7, 2, 12]

const maiorNumero = numeros.reduce((anterior, item) => {
    
    if(anterior < item)
        return item
    else
        return anterior

})

console.log(maiorNumero)
*/

/* Exercicio
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objCurso = arrayCursos.map((curso) => {

    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    
    return {
        titulo: titulo, 
        descricao: descricao, 
        aulas: aulas, 
        horas: horas
    }
})
*/

/* Exercicio
const numeros = [3, 44, 333, 23, 122, 322, 33]
const numerosMaioresQue100 = numeros.filter(numero => {
    return numero > 100
})

console.log(numerosMaioresQue100)
*/

/* Exercicio
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some(instrumento => {
    return instrumento == 'Baixo'
})
console.log(verificaBaixo)
*/

/*
const compras = [
    {
        item: 'Banana', 
        preco: 'R$ 4.99'
    }, 
    {
        item: 'Ovo', 
        preco: 'R$ 2,99'
    }, 
    {
        item: 'Carne', 
        preco: 'r$ 25,49'
    }, 
    {
        item: 'Refrigerante', 
        preco: 'R$ 5,35'
    }, 
    {
        item: 'Queijo', 
        preco: 'r$ 10,60'
    }
]

let valorTotalCompras = compras.reduce((acumulador, objeto) => {
    const valorRefatorado = objeto.preco
        .toLowerCase()
        .replace('r$ ', '')
        .replace(',', '.')

    const valorComDecimais = Number.parseFloat(valorRefatorado).toFixed(2)
    const valorLimpo = Number.parseFloat(valorComDecimais)

    return acumulador + valorLimpo
}, 0)

console.log(valorTotalCompras)
*/

/*
function carro(velocidade) {
    console.log(this.marca + ' ' + this.ano + ' ' + velocidade + 'km/h')
}

carro.call({marca: 'Honda', ano: 2010}, 125)
*/

/*
function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe)
}

const li = new Dom('li')
Dom.prototype.ativo.call(li, 'ativo')
*/

/*
const nodeLi = document.querySelectorAll('li')

const classeAtivo = Array.prototype.filter.call(nodeLi, item => {
    return item.classList.contains('ativo')
})
console.log(classeAtivo)
*/

/*
function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

const $ = document.querySelectorAll.bind(document)
const li = $('li')

console.log(li)
*/

/*
const carro = {
    marca: 'honda', 
    ano: 2018, 
    acelerar: function(tempo) {
        console.log(`${this.marca} acelerou em ${tempo} segundos`)
    }
}

const fiat = {
    marca: 'fiat'
}

const acelerarFiat = carro.acelerar.bind(fiat)
acelerarFiat(12.1)
*/

/*
const html = document.querySelectorAll('p')

const somaTotalCaracteres = Array.prototype.reduce.call(html, (acum, item) => {
    return acum + item.innerText.length
}, 0)

console.log(somaTotalCaracteres)
*/

/*
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}

console.log(criarElemento('div', 'ativo', 'Conteudo da div'))
const criadorh1 = criarElemento.bind(null, 'h1', 'titulo')
console.log(criadorh1('Conteudo do h1'))
*/

/*
const carro = {
    init(marca) {
        this.marca = marca
        return this
    },
    acelerar() {
        return `${this.marca} acelerou`
    }
}

const honda = Object.create(carro).init('Honda')
console.log(honda.acelerar())
*/

/*
const automovel = {
    acelerar() {
        return `${this.marca} acelerou`
    }, 
    buzinar() {
        return `${this.marca} buzinou`
    }
}

const carro = {
    marca: 'marca', 
    rodas: 4
}
const moto = {
    marca: 'marca', 
    rodas: 2
}

const honda = Object.assign(carro, automovel)
honda.marca = 'honda'
console.log(honda.acelerar())

const fazer600 = Object.assign(moto, automovel)
fazer600.marca = 'fazer600'
console.log(fazer600.buzinar())
*/

/*
const moto = {}

Object.defineProperties(moto, {
    rodas: {
        set(rodas) {
            this._rodas = rodas * 2
        }, 
        get() {
            return this._rodas
        }
    }, 
    capacete: {
        set(valor) {
            this._capacete = valor
        }, 
        get() {
            return this._capacete
        }
    }
})
*/

/*
function verificarDado(dado) {
    return Object.prototype.toString.call(dado)
}

console.log(verificarDado(12))
*/

/*
const quadrado = {}
Object.defineProperties(quadrado, {
    lados: {
        value: 4, 
        configurable: false
    }
})

quadrado.lados = 8
console.log(quadrado.lados)
*/

/*
const config = {
    width: 800, 
    height: 600, 
    background: '#333'
}
Object.freeze(config)
console.log(Object.isFrozen(config))
*/


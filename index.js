

//Efeito máquina de escrever

const meuNome = document.querySelector('.meu-nome')
const fName = meuNome.innerHTML

function typeWriter(nome) {
    setTimeout(() => {
        const meuNomeF = nome.split('');
        meuNome.innerHTML = '';
        meuNomeF.forEach((letra, index) => {
            setTimeout(function () {
                meuNome.innerHTML += letra;
            }, 150 * index)
        })
    }, 500)

}

typeWriter(fName)


//Alternar cor de borda do menu de navegação


//conforme o scroll
window.onscroll = function () { transparent() }

function transparent() {

    if (document.documentElement.scrollTop <= 700) {
        home.classList.add('atual')
        projetos.classList.remove('atual')
        sobre.classList.remove('atual')
    } else if (document.documentElement.scrollTop <= 3700 && document.documentElement.scrollTop > 700) {
        home.classList.remove('atual')
        projetos.classList.add('atual')
        sobre.classList.remove('atual')
    } else if (document.documentElement.scrollTop > 3700) {
        home.classList.remove('atual')
        projetos.classList.remove('atual')
        sobre.classList.add('atual')
    }
}


//conforme o click
const home = document.getElementById('home')
const projetos = document.getElementById('projetos')
const sobre = document.getElementById('sobre')


home.addEventListener('click', function () {
    home.classList.add('atual')
    projetos.classList.remove('atual')
    sobre.classList.remove('atual')
})
projetos.addEventListener('click', function () {
    home.classList.remove('atual')
    projetos.classList.add('atual')
    sobre.classList.remove('atual')
})
sobre.addEventListener('click', function () {
    home.classList.remove('atual')
    projetos.classList.remove('atual')
    sobre.classList.add('atual')
})





const cross = document.getElementById('cross');

const turismo = document.getElementById('turismo');
const sodie = document.getElementById('sodie');
const rpg = document.getElementById('rpg');
const paralax = document.getElementById('paralax');
const calculadora = document.getElementById('caculadora');
const dj = document.getElementById('dj');
const dados = document.getElementById('dados');
const tarefas = document.getElementById('tarefas');
const tenis = document.getElementById('tenis');
const senhas = document.getElementById('senhas');

const projectDesc = document.getElementById('projectDescription')


const infoProject = document.getElementById('infoProject')

cross.addEventListener('click', function () {
    infoProject.classList.add('close');
    infoProject.classList.remove('open');
})

turismo.addEventListener('click', function () {
    projectDesc.innerHTML = "Site imersivo, que ensina a respeito de tecnologias, satélites e agentes da Nasa, líder em exploração espacial."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

sodie.addEventListener('click', function () {
    projectDesc.innerHTML = "Clone do site da sodiê doces."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

rpg.addEventListener('click', function () {
    projectDesc.innerHTML = "Rpg estático da mitologia nórdica, com imagens geradas por inteligência artificial."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

paralax.addEventListener('click', function () {
    projectDesc.innerHTML = "Demonstração do incrível efeito paralax immersivo."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

calculadora.addEventListener('click', function () {
    projectDesc.innerHTML = "Cauculadora simples."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

dj.addEventListener('click', function () {
    projectDesc.innerHTML = "Sass desenvolvido para me ajudar na função de DJ no Planeta Kids."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

dados.addEventListener('click', function () {
    projectDesc.innerHTML = "Um tipo de calculadora que permite concverter a quantia de o um tipo de dado(KB, GB, MB...), para outro maior ou menor."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

tarefas.addEventListener('click', function () {
    projectDesc.innerHTML = "Lista de tarefas que separa tarefas por urgência."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

tenis.addEventListener('click', function () {
    projectDesc.innerHTML = "Jogo tenis for two desenvolvido através do canvas do javascript."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})

senhas.addEventListener('click', function () {
    projectDesc.innerHTML = "Gerador de senhas."
    infoProject.classList.remove('close');
    infoProject.classList.add('open');
})



// descrição das tecnologias

const skillDesc = document.getElementById('skillDescription')





function leave() {
    skillDesc.innerText = 'Passe o mouse por cima para obter informações da ferramenta...'
}

function htmlDesc() {
    skillDesc.innerText = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.'
}


function cssDesc() {
    skillDesc.innerText = 'CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.'
}

function jsDesc() {
    skillDesc.innerText = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
}

function bootsDesc() {
    skillDesc.innerText = 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.'
}

function nodeDesc() {
    skillDesc.innerText = 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.'
}

function pythonDesc() {
    skillDesc.innerText = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.'
}

function reactDesc() {
    skillDesc.innerText = 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
}

function sassDesc() {
    skillDesc.innerText = 'O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente.'
}




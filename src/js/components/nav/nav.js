const optsNav = [
    'Séries',
    'Filmes',
    'Seriados',
    'Desenhos',
    'Animes'
]

export default ((main) => {
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'nav')

    main.appendChild(nav)
    
    populateOptionsNav(nav)
    populateStylesNav(nav)
})

function populateOptionsNav(nav) {
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'ul-nav')
    nav.appendChild(ul)

    optsNav.forEach((element) => {
        let li = document.createElement('li')
        li.textContent = element
        ul.appendChild(li)
    })
}

function populateStylesNav(nav) {
    const head  = document.getElementsByTagName('head')[0];
    const link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = './js/components/nav/style.css';
    head.appendChild(link);
}
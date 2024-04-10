const menu = document.getElementById('menu')
menu.addEventListener('click', () => {
    const nav = document.getElementsByTagName('nav')[0]
    nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active')
})

const info = document.getElementById('info')
info.addEventListener('click', () => {
    const container = document.getElementsByClassName('infos')[0]
    container.classList.contains('active') ? container.classList.remove('active') : container.classList.add('active')
})

const settings = document.getElementById('settings')
settings.addEventListener('click', () => {
    const container = document.getElementsByClassName('settings')[0]
    container.classList.contains('active') ? container.classList.remove('active') : container.classList.add('active')
})

const modes = document.querySelectorAll('.modes span')
for (let mode of modes) {
    mode.addEventListener('click', (event) => {
        if (event.target.id === 'light-mode' && !event.target.classList.contains('active')) {
            event.target.classList.add('active')
            document.getElementById('dark-mode').classList.remove('active')
            document.body.classList.add('light-mode')
            document.body.classList.remove('dark-mode')
        } else if (event.target.id === 'dark-mode' && !event.target.classList.contains('active')) {
            event.target.classList.add('active')
            document.getElementById('light-mode').classList.remove('active')
            document.body.classList.add('dark-mode')
            document.body.classList.remove('light-mode')
        }
        const container = document.getElementsByClassName('settings')[0]
        container.classList.remove('active')
    })
}
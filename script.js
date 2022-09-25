const projectCards = document.querySelectorAll('.project-card')
const projectLinks = document.querySelectorAll('.project-links')
const nameSpans = document.querySelectorAll('.name-container span')
const navDropdown = document.querySelector('nav ul')

projectCards.forEach(ele => ele.addEventListener('mouseenter',(e) => displayLinks(e)) )
projectCards.forEach(ele => ele.addEventListener('mouseleave', hideLinks ))

function displayLinks(e){   
    e.target.querySelector('.project-links').style.display = 'flex'

}

function hideLinks(){
    projectLinks.forEach(link => link.style.display = 'none')

}


function wave(){
    let i = 0
    nameSpans.forEach(span => {
        span.style.animationDelay = `${.07 * i}s`
        i++
    })

}

function closeNav(){
    navDropdown.classList.toggle('hidden-nav')
}

function openNav(){
    navDropdown.classList.toggle('hidden-nav')
}
wave()
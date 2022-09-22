const projectCards = document.querySelectorAll('.project-card')
const projectLinks = document.querySelectorAll('.project-links')
const nameContainer = document.querySelector(".name-container")
const spans = nameContainer.querySelectorAll('span')

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
    spans.forEach(span => {
        span.style.animationDelay = `${.07 * i}s`
        i++
    })

}

wave()
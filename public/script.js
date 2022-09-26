const projectCards = document.querySelectorAll('.project-card')
const projectLinks = document.querySelectorAll('.project-links')
const nameSpans = document.querySelectorAll('.name-container span')
const navDropdown = document.querySelector('nav ul')

projectCards.forEach(ele => ele.addEventListener('mouseenter',(e) => displayLinks(e)) )
projectCards.forEach(ele => ele.addEventListener('mouseleave', hideLinks ))

// resets/closes the mobile dropdown everytime the window is resized past the breakpoint 
window.addEventListener('resize', (e) => {
    e.target.innerWidth > 755 ? navDropdown.classList.remove('show-nav') : null
})

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
    navDropdown.classList.toggle('show-nav')
}

function openNav(){
    navDropdown.classList.toggle('show-nav')
}
wave()
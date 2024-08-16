const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const goto = document.querySelector('.go-to-top')


hamburgerIcon.addEventListener('click', (e)=> 
{
   e.stopPropagation()

    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener( 'click' , ()=> 
{
    headerContent.classList.remove('menu-open')
} )

goto.addEventListener( 'click' , ()=> 
{
    document.querySelector('.main-content').scroll(0,0)
} )


nav.addEventListener('click', (e) =>
{
    e.stopPropagation()
} )


window.addEventListener ( 'click',() => 
{
    headerContent.classList.remove('menu-open')
} )
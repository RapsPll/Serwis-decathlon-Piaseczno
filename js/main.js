const serviceTypes = document.querySelector('.navigation__itemLink--special');
const listServiceTypes = document.querySelector('.navigation__subcategories');
const main = document.querySelector('main')
const showSubMenu = () => {
    listServiceTypes.classList.toggle("navigation__subcategories--show")
}
serviceTypes.addEventListener('click', showSubMenu )

main.addEventListener('click' , () => {
    listServiceTypes.classList.remove("navigation__subcategories--show")
    console.log('działa')
})
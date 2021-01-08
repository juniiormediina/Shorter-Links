/* btn menu */
let btnFullMenu = document.getElementById('btnFullMenu');
let fullMenu = document.getElementById('fullMenu');

btnFullMenu.addEventListener('click', () => {
    if(btnFullMenu.classList.contains('fa-bars')){
        btnFullMenu.classList.add('fa-times');
        btnFullMenu.classList.remove('fa-bars');
        fullMenu.style.left = '0%';
    }else{
        btnFullMenu.classList.add('fa-bars');
        btnFullMenu.classList.remove('fa-times');
        fullMenu.style.left = '-100%';
    }
});
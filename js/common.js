const burgerBtn = document.querySelector('.burger-button');
const burgerBtnP = document.querySelectorAll('.burger-button p');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenulist = document.querySelectorAll('.burger-menu .menu');
const burgerMenuBtn = document.querySelectorAll('.burger-menu .menu img');
const burgerMenuSub = document.querySelectorAll('.burger-menu .sub');

const searchBtn = document.querySelector('.search-button');
const searchBtnImg = document.querySelector('.search-button img');
const searchMenu = document.querySelector('.search-menu');

// -------burger menu--------
burgerBtn.onclick = function(){
    burgerMenu.classList.toggle('active');
    this.classList.toggle('active');
    burgerBtnP.forEach(function(el){
        el.classList.toggle('collection');
    })
    
}

burgerMenulist.forEach(function(el, i){
    el.onclick = function(){
        burgerMenuBtn[i].classList.toggle('active');
        burgerMenuSub[i].classList.toggle('active');
    }
})
// -------burger end--------



// -------search menu--------
searchBtn.onclick = function(){
    if(searchMenu.classList.contains('active')){
        if(searchMenu.classList.contains('search-2')){
            searchBtnImg.setAttribute('src','./imgs/ic-search-w.png')
            searchMenu.classList.replace('search-2','search-1');
            searchMenu.classList.remove('active');
        } else{
        searchBtnImg.setAttribute('src','./imgs/ic-search.png')
        searchMenu.classList.remove('active');
        }
    } else if(searchMenu.classList.contains('search-1')){
        searchBtnImg.setAttribute('src','./imgs/ic-close.png')
        searchMenu.classList.replace('search-1','search-2');
        searchMenu.classList.add('active');
    } else {
        searchBtnImg.setAttribute('src','./imgs/ic-close.png')
        searchMenu.classList.add('active');
    }
}
// -------search end--------
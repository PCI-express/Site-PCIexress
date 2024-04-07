window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
});
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.btn-upper');
    scroll.classList.toggle("active", window.scrollY>500)
});
document.querySelector(".btn-upper").addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
document.querySelector(".title-btn").addEventListener('click', function(){
    const cat = document.getElementById("catalog").getBoundingClientRect().top;
    window.scrollTo({
        top: cat,
        behavior:'smooth'
    })
})
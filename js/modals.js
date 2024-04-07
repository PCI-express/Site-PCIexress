const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const nameProduct = document.getElementById('name-product');
const costProduct = document.getElementById('cost-product');
const imgProduct = document.getElementById('img-product');

let unlock = true;

const timeout = 300;

if(modalLinks.length > 0){
    for(let i = 0; i < modalLinks.length; i++){
        const modalLink = modalLinks[i];
        modalLink.addEventListener("click", function(e){
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const curentModal = document.getElementById(modalName);
            openModal(curentModal);
            e.preventDefault();
        });
    }
}

const closeModalIcon = document.querySelectorAll('.close-modal')
if(closeModalIcon.length > 0){
    for(let i = 0; i < closeModalIcon.length; i++){
        const closeModalEl = closeModalIcon[i];
        closeModalEl.addEventListener("click", function(e){
            modalClose(closeModalEl.closest('.modal'));
            e.preventDefault();
        });
    }
}

function openModal(curentModal){
    if(curentModal && unlock){
        const modalActive = document.querySelector('.modal.open');
        if(modalActive){
            modalClose(modalActive, false);
        }
        else{
            bodyLock();
        }
        curentModal.classList.add('open');
        curentModal.addEventListener('click', function(e){
            if(!e.target.closest('.modal-content')){
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}

function modalClose(modalActive, doUnlock = true){
    if(unlock){
        modalActive.classList.remove('open');
        if(doUnlock){
            bodyUnlock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('.header-bg').offsetWidth + 'px';
    body.style.paddingRight = lockPaddingValue;

    body.classList.add('lock');

    unlock = false;
    setTimeout(function (){
        unlock = true;
    }, timeout);
}

function bodyUnlock(){
    setTimeout(function(){
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    
    unlock = false;
    setTimeout(function (){
        unlock = true;
    }, timeout)
}

function addInfo(i){
    if(i === 1){
        nameProduct.textContent = 'ASUS ExpertCenter D7 D700MC-5114000680';
        imgProduct.setAttribute('src', 'img/ASUS ExpertCenter D7  D700MC-5114000680.png');
        costProduct.textContent = '74 999 р.';
    }
    if(i === 2){
        nameProduct.textContent = 'ARDOR GAMING RAGE H306';
        imgProduct.setAttribute('src', 'img/ARDOR GAMING RAGE H306.png');
        costProduct.textContent = '87 499 р.';
    }
    if(i === 3){
        nameProduct.textContent = 'MSI Modern 14 C12M-229RU';
        imgProduct.setAttribute('src', 'img/MSI Modern 14 C12M-229RU.png');
        costProduct.textContent = '52 999 р.';
    }
    if(i === 4){
        nameProduct.textContent = 'ASUS TUF Gaming A15  FA507NV-LP023';
        imgProduct.setAttribute('src', 'img/ASUS TUF Gaming A15  FA507NV-LP023.png');
        costProduct.textContent = '108 999 р.';
    }
    if(i === 5){
        nameProduct.textContent = 'Akko 5087B Plus Steam Engine';
        imgProduct.setAttribute('src', 'img/Akko 5087B Plus Steam Engine.png');
        costProduct.textContent = '9 499 р.';
    }
    if(i === 6){
        nameProduct.textContent = 'ARDOR GAMING LINK AF24H1UE';
        imgProduct.setAttribute('src', 'img/ARDOR GAMING LINK AF24H1UE.png');
        costProduct.textContent = '13 199 р.';
    }
    if(i === 7){
        nameProduct.textContent = 'Dark Project KD83A';
        imgProduct.setAttribute('src', 'img/Dark Project KD83A.png');
        costProduct.textContent = '9 999 р.';
    }
    if(i === 8){
        nameProduct.textContent = 'Philips 278E1A ';
        imgProduct.setAttribute('src', 'img/Philips 278E1A.png');
        costProduct.textContent = '25 999 р.';
    }
}
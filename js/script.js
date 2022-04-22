const panels = document.querySelectorAll('.panel');
const your1 = document.getElementById('your1');

function toggleOpen(){
    this.classList.toggle('open');
    your1.innerHTML = 'Breakfast'
}

function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    your1.innerHTML = 'your'
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
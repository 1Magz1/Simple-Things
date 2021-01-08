export function DropDown() {
    let item = document.querySelectorAll('.dropdown');

    for(let i =0; i < item.length; i++) {
        let itemBtn = item[i].querySelector('.dropdown__btn');
        let itemMenu = item[i].querySelector('.dropdown__menu');
        itemBtn.addEventListener('click', function() {
            if(itemMenu.classList.contains('start')) {
                itemMenu.classList.remove('start');
                itemMenu.classList.add('stop');
            } else if (itemMenu.classList.contains('stop')) {
                itemMenu.classList.remove('stop');
                itemMenu.classList.add('start');
            } else {
                itemMenu.classList.add('start');
            }
        })
    }
}
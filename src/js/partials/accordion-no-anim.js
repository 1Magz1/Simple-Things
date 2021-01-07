export function AccordionNoAnim() {
    let accordion = document.querySelectorAll('.accordion');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            if (this.classList.contains('no-animation')) {
                this.classList.toggle('active');
            }
        })
    }


}
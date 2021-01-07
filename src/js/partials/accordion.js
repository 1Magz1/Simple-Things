export function Accordion() {
    let accordion = document.querySelectorAll('.accordion');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            if (this.classList.contains('no-animation')) {

                this.classList.toggle('active');

            } else if (this.classList.contains('animation')) {

                this.classList.toggle('active');

                let panel = this.querySelector(".accordion__footer--anim");

                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        })
    }


}
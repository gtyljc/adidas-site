
const player_btn = document.getElementsByClassName("t_s__player-btn")[0];
const video = document.getElementsByClassName("t_s__back")[0];
const player_btn_icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" role="img" aria-hidden="true" class="stripes_v7_gl-cta-icon__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 26L11 6H12L12 26H11ZM20 26L20 6H21L21 26H20Z" fill="var(--icon-primary-color, #000)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H14L14 28H9L9 4ZM18 4H23L23 28H18L18 4ZM11 26H12L12 6H11V26ZM20 26H21L21 6H20L20 26Z" fill="var(--icon-outline-color, #eceff1)"></path></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" role="img" aria-hidden="true" class="stripes_v7_gl-cta-icon__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6V26L16 21L25 16L7 6ZM8 7.69951V24.3005L22.9409 16L8 7.69951Z" fill="var(--icon-primary-color, #000)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6V26L16 21L25 16L7 6ZM8 7.69951V24.3005L22.9409 16L8 7.69951Z" fill="var(--icon-outline-color, #eceff1)" fill-opacity="0.2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.60107L29.1183 16.0001L5 29.3991V2.60107ZM7 6.0001V26.0001L25 16.0001L7 6.0001ZM22.9409 16.0001L8 24.3006V7.69962L22.9409 16.0001ZM10 11.0986L18.8226 16.0001L10 20.9016V11.0986Z" fill="var(--icon-outline-color, #eceff1)"></path></svg>`
]
var swicther = true; // true => play / false => paused

// init
player_btn.innerHTML = player_btn_icons[0];
player_btn.onclick = () => {
    if(swicther){
        video.pause();

        swicther = false;
        player_btn.innerHTML = player_btn_icons[1];
    }
    else {
        video.play();

        swicther = true;
        player_btn.innerHTML = player_btn_icons[0];
    }
};
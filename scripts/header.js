

// ----------- header appearing


const header = document.getElementsByClassName("header")[0];
let touchY;

window.addEventListener( // pc
    "wheel",
    (event) => {

        // scroll up
        if (event.deltaY > 0){
            header.style.top = "-150px";
        }

        // scroll down
        else{
            header.style.top = "0px";
        }
    }
);


// ----------- ad scrolling


const ads = [
    `<div class="header__return-info">
        <span>Gratis Rücksendung & Umtausch</span>
        <button class="standard-svg-btn standart-svg-btn--small">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 19.2929L8.35359 11.6465L7.64648 12.3536L16 20.7071L24.3536 12.3536L23.6465 11.6465L16 19.2929Z" fill="white"></path>
            </svg>
        </button>
    </div>`,
    `<div class="header__return-info">
        <span>Bis zu 30% Rabatt</span>
        <button class="standart-svg-btn standart-svg-btn--small">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 19.2929L8.35359 11.6465L7.64648 12.3536L16 20.7071L24.3536 12.3536L23.6465 11.6465L16 19.2929Z" fill="white"></path>
            </svg>
        </button>
    </div>`
]
const ad_con = document.getElementsByClassName("header__return-info-con")[0];
var index = -1;

function scrollAd(){
    if (index + 1 == ads.length) {
        index = 0;
    }
    else {
        index += 1;
    }

    ad_con.innerHTML = ads[index];

    ad_con.onanimationend = scrollAd;
}

// init
ad_con.innerHTML = ads[0];

ad_con.children[0].onanimationend = scrollAd;


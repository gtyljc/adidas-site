
// ----------- carousel logic

let carousels = Array.from(document.getElementsByClassName("carousel-section__row-con"));

function hideScrollBtn(btn) {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
}

function showScrollBtn(btn) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
}

carousels.forEach(
    element => {
        const scrlLeftBtn = element.getElementsByClassName("carousel-section__left-btn")[0];
        const scrlRightBtn = element.getElementsByClassName("carousel-section__right-btn")[0];
        const row = element.getElementsByClassName("carousel-section__row")[0];
        const STEP = row.children[0].clientWidth; // px
        const GAP = 10; // px
        let index = 0;

        scrlLeftBtn.onclick = () => {
            if (index != 0) {
                index -= 1;

                // hide left btn if neccessary
                if (index == 0) {
                    hideScrollBtn(scrlLeftBtn);    
                }

                // show right btn if neccessary
                if (index == row.children.length - 2) {
                    showScrollBtn(scrlRightBtn)
                }

                row.style.transform = `translateX(-${(STEP + GAP) * index}px)`;                
            }
        }

        scrlRightBtn.onclick = () => {
            if (index < row.children.length - 1) {
                index += 1;

                // show left btn if neccessary
                if (index == 1) {
                    showScrollBtn(scrlLeftBtn);
                }

                if (index == row.children.length - 1) {
                    hideScrollBtn(scrlRightBtn);
                }

                row.style.transform = `translateX(-${(STEP + GAP) * index}px)`;
            }
        }
    }
);


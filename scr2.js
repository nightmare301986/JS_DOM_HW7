document.addEventListener('click', (e) => {
    const btncloseEl = document.querySelectorAll(".close");

    btncloseEl.forEach((itm2) => {
        itm2.addEventListener('click', (e) => {
            const index2 = Array.from(btncloseEl).indexOf(e.target);
        });
        itm2.addEventListener('click', (e) => {
            const cheadingEl = document.querySelector('.card__heading');
            const index3 = Array.from(btncloseEl).indexOf(e.target);
            itm2.parentNode.parentNode.remove();
            emptprodEl = document.querySelector(".card");
            emptallEl = document.querySelector(".wrapper");
            if (emptprodEl === null) {
                emptallEl.style.display = "none";
            }
        });
    });
});
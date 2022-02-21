let catalog = document.querySelector(".menu__item_catalog");

function menuOpen() {
    catalog.addEventListener("click", function(e) {
        let menuCatalog = document.querySelector(".menu-catalog");
        menuCatalog.classList.toggle('_active');
        event.preventDefault()
            // document.documentElement.classList.toggle("menu-open");
    })
}
menuOpen();

let navigationMenu = {
    popup: document.getElementsByTagName("nav")[0],
    button: document.getElementById("navmenu"),
    isShown: false,
    animationTime: .5,

    click() {
        this.show()

        // Replay click animation
        let animationClass = "navmenu-click-animation"
        this.button.classList.remove(animationClass);
        void this.button.offsetWidth;
        this.button.classList.add(animationClass);
    },

    show() {
        if (this.isShown) this.close();
        else this.open();
    },

    open() {
        this.popup.style.display = 'inherit';
        this.isShown = true;
        this.popup.style.animation = `navmenu-popup-open ${this.animationTime}s`;
    },

    close() {
        this.popup.style.animation = `navmenu-popup-close ${this.animationTime}s`;
        setTimeout(() => {
            this.popup.style.display = 'none';
            this.isShown = false;
        }, this.animationTime * 1000 - 1);
    }
}


let navigationMenu = {
    element: document.getElementsByTagName("nav")[0],
    isShown: false,
    animationTime: .5,

    show() {
        if (this.isShown) this.close()
        else this.open()
    },

    open() {
        this.element.style.display = 'inherit'
        this.isShown = true
        this.element.style.animation = `navmenu-popup-open ${this.animationTime}s `
    },

    close() {
        this.element.style.animation = `navmenu-popup-close ${this.animationTime}s `
        setTimeout(() => {
            this.element.style.display = 'none'
            this.isShown = false
        }, this.animationTime * 1000 - 1)
    }
}

console.log("run")
console.log("element: ", navigationMenu.element)

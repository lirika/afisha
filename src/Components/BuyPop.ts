import '../styles/buyPop.css';

export default class BuyPop {
    hostElement: HTMLElement
    destroyBoundWithThis = this.destroy.bind(this)

    constructor(child: HTMLElement) {
        const tempElement: HTMLElement = document.createElement("DIV")

        tempElement.innerHTML = `<div class='buy-pop'>
        <a class='close'><!--&#x274c-->&#x2716</a>
          <div class='childContainer'></div>
       </div>`
        this.hostElement = tempElement.firstChild as HTMLElement
        (this.hostElement.querySelector(".childContainer") as HTMLElement).appendChild(child)
    }

    show(): void {
        document.body.appendChild(this.hostElement)
        this.addListeners()
    }

    addListeners() {
        const closeElement = this.hostElement.querySelector("a")
        if (closeElement) {
            closeElement.addEventListener("click", this.destroyBoundWithThis)
        }

        const submitBtn = this.hostElement.querySelector('button[type="submit"]')
        if (submitBtn) {
            submitBtn.addEventListener("click", this.destroyBoundWithThis)
        }
    }

    destroy(): void {
        (this.hostElement.parentElement as HTMLElement).removeChild(this.hostElement)
    }
}
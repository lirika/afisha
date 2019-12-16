import BuyPop from "../Components/BuyPop"

export default function renderBuyPage() {
    var child: HTMLElement = document.createElement("DIV")
    child.innerHTML = `<p>This is Buy Page</p>
           <p>Some Text</p>
           <button type="submit">Submit</button>
        `
    var popup = new BuyPop(child)
    popup.show()
}

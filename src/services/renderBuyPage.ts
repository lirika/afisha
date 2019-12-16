import BuyPop from "../Components/BuyPop"
import DataService from "./DataService";

export default async function renderBuyPage() {
    var child: HTMLElement = document.createElement("DIV")
    child.innerHTML = `<p>Some text</p>
           <p>Some Text</p>
           <button type="submit">Submit</button>
        `
    var popup = new BuyPop(child)
    popup.show()
}

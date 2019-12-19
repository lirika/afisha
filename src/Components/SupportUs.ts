import Contacts from "../model/Contacts";

export default class SupportUs {
    render(data:Contacts) {
        const root = document.querySelector('#root');
        root!.innerHTML = `
            <div class="dark" id="dark"></div>
        <div class="burger-icon" id="burger">
          <div class="burger-line"></div>
        </div>
        <header id="header">
          <div class="navbar" id="navbar">
            <div class="all-items">
              <div class="item homePage">HOME PAGE</div>
              <div class="item TodoApp">PLAN YOUR VISIT</div>
              <div class="item eventPage">Events</div>
              <div class="item support active">SUPPORT US</div>
              <div class="item aboutPage">ABOUT US</div>
              <div class="item adminPage ">ADMIN PAGE</div>
            </div>
          </div>
        </header>
        <h1>Support Us</h1>
        <form >
            <label for="name">Your name</label>
            <input type="text" name="name">
             <label for="name">Your last name</label>
            <input type="text" name="last-name">
             <label for="name">Your email</label>
            <input type="email" name="email">
            <input type="submit">
         </form>
         <div class="contacts-wrapper">
         <h1>Our contacts</h1>
         <p>Phone: ${data.phone}</p>
         <p>Email: ${data.email}</p>
         <p>Address: ${data.address}</p>
  
</div>
        `
        
    }
}
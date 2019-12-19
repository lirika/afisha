import Contacts from "../model/Contacts";
import '../styles/supportUs.css';

export default class SupportUs {
    render(data: Contacts) {
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
        <div class="contentSupport">
        <form class="formSupport">
        <div class="titleSupport"> Support Us</div>
            <label for="name">Your name</label>
            <input type="text" name="name" class="input">
             <label for="name">Your last name</label>
            <input type="text" name="last-name" class="input">
             <label for="name">Your email</label>
            <input type="email" name="email" class="input">
            <input type="submit" class ="button">
         </form>
         <div class="contacts-wrapper">
         <div class="titleSupport"> Our contacts</div>
         <p class="contacts"><b>Phone:</b> ${data.phone}</p>
         <p class="contacts"><b>Email:</b> ${data.email}</p>
         <p class="contacts"><b>Address:</b> ${data.address}</p>
    </div>
</div>
        `

    }
}
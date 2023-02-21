class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `<nav class="navbar navbar--header">            
         
    <ul>
    <li class="navbar navbar--header navbar__title navbar__link"><a href="index.html"><h2>Company Name</h2></a></li>
    <li class="navbar navbar--header navbar__link"><a href="Contact.html">Contact</a></li>
    <li class="navbar navbar--header navbar__link"><a href="About.html">About</a></li>
    <li class="navbar navbar--header navbar__link"><a href="Greece.html">Greece</a></li>
    <li class="navbar navbar--header navbar__link"><a href="Japan.html">Japan</a></li>
    </ul> 
         
</nav>`
;
}
}


customElements.define('main-header', Header);


class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `<footer class="navbar navbar--footer">            
         
    <ul>
    <li class="navbar navbar--footer navbar__link"><a href="#">Facebook</a></li>
    <li class="navbar navbar--footer navbar__link"><a href="#">Twitter</a></li>
    <li class="navbar navbar--footer navbar__link"><a href="#">Instragram</a></li>
    <li class="navbar navbar--footer navbar__link"><a href="#">LinkedIn</a></li>
    </ul> 
         
</footer>`
;
}
}


customElements.define('main-footer', Footer);
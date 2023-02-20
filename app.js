class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `<nav>            
         
    <ul>
    <li><a href="index.html"><h2>Company Name</h2></a></li>
    <li><a href="Contact.html">Contact</a></li>
    <li><a href="About.html">About</a></li>
    <li><a href="Greece.html">Greece</a></li>
    <li><a href="Japan.html">Japan</a></li>
    </ul> 
         
</nav>`
;
}
}


customElements.define('main-header', Header);


class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `<nav>            
         
    <ul>
    <li><a href="#">Facebook</a></li>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Instragram</a></li>
    <li><a href="#">LinkedIn</a></li>
    </ul> 
         
</nav>`
;
}
}


customElements.define('main-footer', Footer);
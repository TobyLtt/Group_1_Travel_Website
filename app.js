class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `<nav>            
         
    <ul>
    <li><a href="index.html"><h1>Company Name</h1></a></li>
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
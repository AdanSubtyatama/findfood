class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header">
        <a tabindex="0" href="#" class="header__brand link"><h1>Find__Food</h1></a>
        <button for="menu" tabindex="0" id="menu" class="tooglemenu">☰</button>
        <nav id="drawer" class="navbar">
            <ul >
              <li><a class="linkmenus" href="https://github.com/AdanSubtyatama">About us</a></li>
              <li><a class="linkmenus" href="#/favorite">Favorite</a></li>
              <li><a class="linkmenus" href="">Home</a></li>
            </ul>
        </nav>
      </div>
          `;
  }
}
customElements.define('app-bar', AppBar);

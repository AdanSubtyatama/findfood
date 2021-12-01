class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
          <p>Copyright &copy; 2021 - <b class="footer_brand">Find_Food</b></p>
          <span>Created by <b class="footer_myname">adansubtyatama</b></span>
      </footer>
          `;
  }
}
customElements.define('app-footer', AppFooter);

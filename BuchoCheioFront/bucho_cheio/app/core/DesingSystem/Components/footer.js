class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footerText">footerInformation</footer>
        `;
    }
}

if (!customElements.get('custom-footer')) {
    customElements.define('custom-footer', CustomFooter);
}
if (!customElements.get('app-footer')) {
    customElements.define('app-footer', CustomFooter);
}

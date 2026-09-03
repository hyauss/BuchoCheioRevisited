class CustomHeader extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active') || '';
        this.innerHTML = `
        <header>
            <button onclick="window.location.href='../home/home.html'" aria-label="Ir para Home">
                <img class="headerImages" src="../../DesingSystem/Assets/fork.knife.circle.png" alt="Imagem contendo um garfo e uma faca.">
            </button>
            <button class="text headerText ${active === 'home' ? 'active' : ''}" aria-label="Home" onclick="window.location.href='../home/home.html'">Home</button>
            <button class="text headerText ${active === 'restaurantes' ? 'active' : ''}" aria-label="Resturante" onclick="window.location.href='../restaurantes/restaurantes.html'">Resturante</button>
            <button class="text headerText ${active === 'cadastrar' ? 'active' : ''}" aria-label="Cadastrar">Cadastrar</button>
            <button class="text headerText ${active === 'relatorios' ? 'active' : ''}" aria-label="Relatórios">Relatórios</button>
            <button class="text headerText ${active === 'meus-restaurantes' ? 'active' : ''}" aria-label="Meus restaurantes">Meus restaurantes</button>
            <button class="profileImage" aria-label="Perfil">
                <img class="headerImages" src="../../DesingSystem/Assets/person.crop.circle.png" alt="Imagem de perfil">
            </button>
        </header>
        `;
    }
}

if (!customElements.get('custom-header')) {
    customElements.define('custom-header', CustomHeader);
}
if (!customElements.get('app-header')) {
    customElements.define('app-header', CustomHeader);
}

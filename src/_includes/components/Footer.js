const { html } = require('common-tags');

function Footer({ sideBool }) {
    footerTop = html`<footer class="footer bg-accent">`;
    if (sideBool === false) {
        footerTop = html`<footer class="footer bg-accent mb-0 mt-auto">`;
    }
    return footerTop + html`
            <nav>
                <span class="footer-title text-l m-0 p-2">2024</span>
                <span class="m-0 px-2">Site: &copy; George D. Crochiere</span>
                <span class="m-0 px-2 pb-2">Pokémon: &copy; The Pokémon Company</span>
            </nav>
        </footer>
    `;
}

module.exports = Footer;
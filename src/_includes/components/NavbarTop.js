const { html } = require('common-tags');

function NavbarTop({ }) {
  return html`
    <div class="navbar bg-primary h-20">
  <div class="flex-1">
    <a class="btn btn-ghost text-2xl" href="/">Pokedex App - Home</a>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/search">Pokemon Search</a>
  </div>
  <div class="flex-2">
    <a class="btn btn-ghost text-l" href="https://github.com/GeorgeCrochiere/comm429-framework-app">GitHub</a>
  </div>
</div> 
    `;
}

module.exports = NavbarTop;

const { html } = require('common-tags');

function NavbarTop({ }) {
  return html`
    <div class="navbar bg-primary h-20 hidden sm:flex">
  <div class="flex-1">
    <a class="btn btn-ghost text-2xl" href="/">Pokédex App - Home</a>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/search">Pokémon Search</a>
  </div>
  <div class="flex-2">
    <a class="btn btn-ghost text-l" href="https://github.com/GeorgeCrochiere/comm429-framework-app">GitHub</a>
  </div>
</div> 

<div class="navbar bg-primary h-20 flex sm:hidden">
  <div>
    <a class="btn btn-ghost text-2xl" href="/" title="Pokédex App - Home"><span class="material-symbols-outlined">stadia_controller</span></a>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/search" title="Pokémon Search"><span class="material-symbols-outlined">manage_search</span></a>
  </div>
  <div class="flex-2">
    <a class="btn btn-ghost text-l" href="https://github.com/GeorgeCrochiere/comm429-framework-app" title="GitHub"><span class="material-symbols-outlined">code</span></a>
  </div>
</div>
    `;
}

module.exports = NavbarTop;

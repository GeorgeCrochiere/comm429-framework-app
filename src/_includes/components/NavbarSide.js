const { html } = require('common-tags');

function NavbarSide({ }) {
  return html`
    <div class="w-max bg-primary flex-col hidden sm:flex row-span-2 pt-3">
  <div class="flex flex-col flex-1">
    <div class="text-center">
        <a class="btn btn-ghost text-2xl whitespace-nowrap text-center" href="/">Pokédex Home</a>
    </div>
    <div class="text-center">
        <a class="btn btn-ghost text-xl whitespace-nowrap" href="/search">Pokémon Search</a>
    </div>
  </div>
  <div class="text-center flex-2 py-4">
    <a class="btn btn-ghost text-l whitespace-nowrap" href="https://github.com/GeorgeCrochiere/comm429-framework-app">GitHub</a>
  </div>
</div> 

<div class="w-max bg-primary flex-col flex sm:hidden row-span-2 pt-3">
  <div class="flex flex-col flex-1">
    <div class="text-center">
        <a class="btn btn-ghost text-2xl whitespace-nowrap text-center" href="/" title="Pokédex App - Home"><span class="material-symbols-outlined">stadia_controller</span></a>
    </div>
    <div class="text-center">
        <a class="btn btn-ghost text-xl whitespace-nowrap" href="/search" title="Pokémon Search"><span class="material-symbols-outlined">manage_search</span></a>
    </div>
  </div>
  <div class="text-center flex-2 py-4">
    <a class="btn btn-ghost text-l whitespace-nowrap" href="https://github.com/GeorgeCrochiere/comm429-framework-app" title="GtHub"><span class="material-symbols-outlined">code</span></a>
  </div>
</div>
    `;
}

module.exports = NavbarSide;

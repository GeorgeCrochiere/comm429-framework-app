const { html } = require('common-tags');

function NavbarSide({ }) {
    return html`
    <div class="w-max bg-primary h-screen flex flex-col">
  <div class="flex flex-col flex-1">
    <div class="text-center">
        <a class="btn btn-ghost text-2xl whitespace-nowrap text-center" href="/">Pokedex App - Home</a>
    </div>
    <div class="text-center">
        <a class="btn btn-ghost text-xl whitespace-nowrap" href="/search">Pokemon Search</a>
    </div>
  </div>
  <div class="text-center flex-2 py-4">
    <a class="btn btn-ghost text-l whitespace-nowrap" href="https://github.com/GeorgeCrochiere/comm429-framework-app">GitHub</a>
  </div>
</div> 
    `;
}

module.exports = NavbarSide;

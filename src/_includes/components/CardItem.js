const { html } = require('common-tags');

function CardItem({ url }) {

  return html`
    <div class="card max-w-2xl mx-auto bg-base-100 shadow-xl">
  <figure class="bg-accent" id="imgPkmn"></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
}

module.exports = CardItem;

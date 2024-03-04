const { html } = require('common-tags');

function DropDown({ name, list, param }) {
  listElems = ``;
  list.forEach(element => {
    listElems += `<li class="text-white"><a class="optionSel ${param}">${element.name.substring(0, 1).toUpperCase() + element.name.substring(1)}</a></li>
        `;
  });

  return html`
<div class="dropdown min-h-max">
  <div tabindex="0" role="button" class="btn btn-primary m-1 text-xl"><span id="${param}">${name}</span></div>
  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li class="text-gray-400"><a class="optionSel ${param}"> - Select - </a></li>
        ` + listElems + `
  </ul>
</div>`;
}

module.exports = DropDown;
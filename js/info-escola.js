// import { investments } from './investments.js';
const response = await fetch('../js/escolas.json');

const investments = await response.json();
const cards = document.querySelector('.cards');
const mapalink = document.getElementById("mapalink")
const foto_escola = document.getElementById("foto_escola")
let x = sessionStorage.getItem("escola")
console.log(investments)
console.log(sessionStorage.getItem("escola"))
console.log(investments[x])

let n = parseInt(x)

  const view = `
    <button class="nav-link" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#produto" escola_num="${x}"
                  type="button" role="tab" aria-controls="nav-strategy-tab" aria-selected="false">
                  <h3 class='' style="font-size: 2em;">INFORMAÇÕES</h3>
                  <div style="line-height: 1.6">
                  <span style="font-size: 0.9em;">${investments[x].endereço}</span>
                  <span style="font-size: 0.9em;">${investments[x].telefone}</span>
                  <span style="font-size: 0.9em;">${investments[x].anos}</span>
                  <span style="font-size: 0.9em;">${investments[x].horários}</span>
                  </div></button>
    <button class="nav-link" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#mapa" escola_num="${x}"
      type="button" role="tab" aria-controls="nav-strategy-tab" aria-selected="false">
      <h3 class='' style="font-size: 2em;">MAPA</h3>
      <div style="line-height: 1.6">
      <span style="font-size: 0.9em;">${investments[x].endereço}</span>
      </div></button>
                  `;


cards.insertAdjacentHTML('beforeend', view);

mapalink.src = `${investments[x].mapa}`
foto_escola.src = `../images/Escolas/${investments[x].foto}`

const titulo = document.getElementById('título')
titulo.innerHTML = `${investments[x].nome}`
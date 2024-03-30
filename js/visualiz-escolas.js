// import { investments } from './investments.js';
const response = await fetch('../js/escolas.json');

const investments = await response.json();

const cards = document.querySelector('.cards');

let x = -1

function redirecionar(school){
  sessionStorage.setItem("escola", school);
  location.assign("../html/info-escola.html")
}

for (const investment of investments) {
  x++
  const view = `
  <div class="col">
    <button id="${x}"
      class="nav-link" 
      id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#produto${x} type="button" role="tab" aria-controls="nav-strategy-tab" aria-selected="false"
    >
    
        <h3 class='' style="font-size: 2em;">${investment.nome}</h3>
        <div style="line-height: 1.6">
        <span style="font-size: 0.9em;">${investment.endereço}</span>
        <span style="font-size: 0.9em;">${investment.telefone}</span>
        <span style="font-size: 0.9em;">${investment.anos}</span>
        <span style="font-size: 0.9em;">${investment.horários}</span>
        </div>
      </button>
    <div>`;
  cards.insertAdjacentHTML('beforeend', view);
  let botao = document.getElementById(x);
  botao.addEventListener('click', function(){
    redirecionar(botao.id);
  })
}
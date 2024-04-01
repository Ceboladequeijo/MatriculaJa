// import { investments } from './investments.js';
const response = await fetch('../js/escolas.json');

const investments = await response.json();

const cards = document.querySelector('.cards');

for (const investment of investments) {
  const view = `
    <button class="button nav-link active" id="nav-business-tab" data-bs-toggle="tab" data-bs-target="#produto1"
                  type="button" role="tab" aria-controls="nav-business" aria-selected="true">
                  <p><strong>${investment.nome}</strong></p>
                  <p><strong>${investment.endereço}</strong></p>
                  <p><strong>${investment.número}</strong></p>
                  <p><strong>${investment.anos}</strong></p>
                  <p><strong>${investment.horários}</strong></p>
                  </button>`;

  cards.insertAdjacentHTML('afterbegin', view);
}
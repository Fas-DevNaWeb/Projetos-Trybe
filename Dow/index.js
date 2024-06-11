const inputName = document.getElementById('name');
const inputEmail = document.querySelector('#email');
const form = document.querySelector('form');

const bntMenosLanchao = document.querySelector('.btn-menos-lanchao');
const qtdLanchao = document.querySelector('#qtd-lanchao');
const btnMaisLanchao = document.querySelector('.btn-mais-lanchao')

const btnMenosLanche = document.querySelector('.btn-menos-lanche');
const qtdLanche = document.querySelector('#qtd-lanche');
const btnMaisLanche = document.querySelector('.btn-mais-lanche')

const btnMenosLanchinho = document.querySelector('.btn-menos-lanchinho');
const qtdLanchinho = document.querySelector('#qtd-lanchinho');
const btnMaisLanchinho = document.querySelector('.btn-mais-lanchinho');

const bntMenosOvos = document.querySelector('.btn-menos-ovo');
const qtdOvos = document.querySelector('#qtd-ovo');
const bntMaisOvos = document.querySelector('.btn-mais-ovo');

const btnMenosAbacaxi = document.querySelector('.btn-menos-abacaxi');
const qtdAbacaxi = document.querySelector('#qtd-abacaxi');
const btnMaisAbacaxi = document.querySelector('.btn-mais-abacaxi');


const atualizarQuantidade = (btnMenos, btnMais, qtElementos) => {
    btnMenos.addEventListener('click', () => {
        const quantidade = parseInt(qtElementos.innerText);
        if (quantidade > 0) {
            qtElementos.innerText = quantidade - 1;
        }
    })

    btnMais.addEventListener('click', () => {
        qtElementos.innerText = parseInt(qtElementos.innerText) + 1;
    })
}
atualizarQuantidade(bntMenosLanchao, btnMaisLanchao, qtdLanchao);
atualizarQuantidade(btnMenosLanche, btnMaisLanche, qtdLanche);
atualizarQuantidade(btnMenosLanchinho, btnMaisLanchinho, qtdLanchinho);

atualizarQuantidade(bntMenosOvos, bntMaisOvos, qtdOvos);
atualizarQuantidade(btnMenosAbacaxi, btnMaisAbacaxi, qtdAbacaxi);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let orderInfo = {};

    orderInfo.Nome = inputName.value;
    orderInfo.Email = inputEmail.value;

    if(parseInt(qtdLanchao.innerText) > 0) orderInfo.lanchao = parseInt(qtdLanchao.innerText);
    if(parseInt(qtdLanche.innerText) > 0) orderInfo.lanche = parseInt(qtdLanche.innerText);
    if(parseInt(qtdLanchinho.innerText) > 0) orderInfo.lanchinho = parseInt(qtdLanchinho.innerText);
    if(parseInt(qtdOvos.innerText) > 0) orderInfo.Ovos = parseInt(qtdOvos.innerText);
    if(parseInt(qtdAbacaxi.innerText) > 0) orderInfo.Abacaxi = parseInt(qtdAbacaxi.innerText);
    console.log(orderInfo);
})
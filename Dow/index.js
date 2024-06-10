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
atualizarQuantidade(bntMenosLanchao,btnMaisLanchao,qtdLanchao);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let orderInfo = {};

    orderInfo.Nome = inputName.value;
    orderInfo.Email = inputEmail.value;
    console.log(orderInfo);
})
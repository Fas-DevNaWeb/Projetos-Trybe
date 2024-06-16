/**
 * addEventListener(), é um método que adiciona um evento um escutador ao seu elemento
 * Isso indica que naquele ponto vai acontecer alguma ação,seja um click de um botão ou o mause 
 * que passou por uma imagem e assim vai dependendo de qual ação você que usar.
*/

/*
No addEventListener(event,função), ele recebe dois parametros um e o tipo de evento,nesse caso
quando ouver um click no botão, o outro parametro é uma função que designa o que tem que ser feito 
quando esse botão for acionado.

OBS 1:Lembrese que quando o navegador executa o evento ele da um refresh na pagina e isso é muito rapido. 
você não conseguirar ver o resultado, por isso você precisa passar um parametro na sua função o
(event) é um evento que por sua vez possui um metodo chamado preventDefault(); que vai guardar essa 
informação, de modo que você vai conseguir ver os resultados no browser.
*/

/*
OBS 2: Você pode capturar elementos html de váriaas formas, por tag, por classe,por id ou por uma determinada 
propriedade.
A ideia é que quando você capitura esses elementos  eles ficam a sua disposição para ser manipulados.
Ex: Você pode capiturar o valor contido num campo de texto por exemplo. 
*/

/**
OBS: 3 Quando você cria um botão que esta sobre o evento de outro botão nesse caso no mesmo
escopo, ele executa do mesmo geito se você não identifica-lo como um botão comum, se você não qué que ele
aja como um executador você deve coloca-lo como type="button". Ou fazer uma expecificação no botão desejado.
 */
const inputName = document.getElementById('name');
const inputEmail = document.querySelector('#email');
const forn = document.querySelector('form');

forn.addEventListener('click', (event) => {
    event.preventDefault();
  
    let ordrInfo = {};
    ordrInfo.nome = inputName.value;
    ordrInfo.email = inputEmail.value;
    console.log(ordrInfo);
})
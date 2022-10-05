
const itemInput = document.querySelector('#btnAdd');
const btn = document.querySelector('#btn-addItem');
const campoLista = document.querySelector('.lista');
const lista = document.querySelector('ul');
const content = document.querySelector('body');
 

let itens = [];
function mostraLista(){
    lista.innerHTML = "";
    for(item of itens){
        const elementoItem = document.createElement('li'); //criando tag LI dentro da tag UL
        const icon = document.createElement('button'); //botao apagar
        const txtItem = document.createTextNode(item);

        elementoItem.appendChild(txtItem);
        lista.appendChild(elementoItem);

        elementoItem.appendChild(icon);
        icon.innerText = 'X';

        pos = itens.indexOf(item);
        icon.setAttribute('onclick', `deletaProduto(${pos})`);
    }
}

function adicionaItem(){
    if(itemInput.value === ''){
        const pop_up = document.createElement('div');
        pop_up.classList.add('notificacao')
        pop_up.innerText = 'Atenção!!! Digite o nome do produto'; 

        content.appendChild(pop_up);

        setTimeout(() => {
            pop_up.remove(pop_up);
        }, 1000);
    }else{
        const valorInput = itemInput.value;
        itens.push(valorInput);
        itemInput.value = "";
    
        mostraLista();
    }
}
btn.addEventListener('click', adicionaItem);


function deletaProduto(pos){
    itens.splice(pos, 1);
    mostraLista();
}
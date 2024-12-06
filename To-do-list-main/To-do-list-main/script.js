// Array para armazenar os produtos
let produtos = [];

// Elementos do DOM
const form = document.getElementById('formProduto');
const inputProduto = document.getElementById('produto');
const listaSupermercado = document.getElementById('listaSupermercado');

// Função para renderizar a lista na tela
function renderizarLista() {
    listaSupermercado.innerHTML = '';
    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = produto;

        // Botão de edição
        const containerBotoes = document.createElement('div');
        const btnEditar = document.createElement('button');
        btnEditar.style.backgroundColor = '#16a085';
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarProduto(index);

        // Botão de remoção
        const btnRemover = document.createElement('button');
        btnRemover.style.backgroundColor = '#e74c3c';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerProduto(index);

        li.appendChild(span);
        li.appendChild(containerBotoes);
        containerBotoes.appendChild(btnEditar);
        containerBotoes.appendChild(btnRemover);
        listaSupermercado.appendChild(li);
    });
}

// Função para adicionar produto
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const produto = inputProduto.value.trim();
    if (produto !== '') {
        produtos.push(produto);
        inputProduto.value = '';
        renderizarLista();
    }
});

// Função para remover produto
function removerProduto(index) {
    produtos.splice(index, 1);
    renderizarLista();
}

// Função para editar produto
function editarProduto(index) {
    const novoProduto = prompt("Editar produto:", produtos[index]);
    if (novoProduto !== null && novoProduto.trim() !== '') {
        produtos[index] = novoProduto.trim();
        renderizarLista();
    }
}

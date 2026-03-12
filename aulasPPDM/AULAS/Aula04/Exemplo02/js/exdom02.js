//Vamos pegar a lista de produtos com id = lista
const elementoLista = document.getElementById('lista');

//Vamos pegar o input com id = novoItem
const elementoInput = document.getElementById('novoItem');

//Vamos pegar um elemento button com id = botaoAdicionar
const elementoBotao = document.getElementById('botaoAdicionar');

//Vamos adicionar o metodo addEventListener
elementoBotao.addEventListener('click', function(){
    //Vamos ler o produto digitado pelo usuario
    const novoProduto = elementoInput.value;
    
    //Vamos fazer a validação do produto
    if (novoProduto !== "") {
        //1. Vamos criar um novo elemento li
        const novoItemElemento = document.createElement("li");

        //2. Vamos definir o texto do novo elemento li
        novoItemElemento.textContent = novoProduto;

        //3. Vamos inserir o li criado no ul
        elementoLista.appendChild(novoItemElemento);

        //4. Vamos limpar o input
        elementoInput.value = '';
    }
});
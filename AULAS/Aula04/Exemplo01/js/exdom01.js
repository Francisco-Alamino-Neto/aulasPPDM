//Vamos pegar o elemento h1 com id = titulo
const texto = document.getElementById('titulo');

//Vamos pegar o elemento button com id = botao
const elementoBotao = document.getElementById('botao');

//Manipulador de eventos método add addEventListener
elementoBotao.addEventListener('click', function(){
    //Vamos alterar o texto do elemento h1 para Texto Alterado
    texto.textContent = 'Texto Alterado';
});
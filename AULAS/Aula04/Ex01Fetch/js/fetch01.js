//Vamos trazer os dados dos usuarios do jsonplaceholder
//usando o método nativo fetch()
fetch('https://jsonplaceholder.typicode.com/users/')

//Será gerado uma promisse
//Tenho os dez usuários no formato JSON

//Converter a resposta no formato JSON para um objeto do JS
.then(response => response.json())

//Com o JSON convertido para objeto
//Vamos exibir as informações na página
.then(usuario => {
    const todosUsuarios = document.getElementById('listaUsuarios');

    usuario.forEach(user => {
        const cadaUsuario = document.createElement('li');
        cadaUsuario.textContent = user.name + ' (' + user.email + ')';
        todosUsuarios.appendChild(cadaUsuario);
    });
})
.catch(error => {
    document.getElementById('todosUsuarios').textContent = 'Erro ao buscar os usuários';
}); 
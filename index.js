let url = 'https://fakestoreapi.com/products' 
// 'https://fakestoreapi.com/products?limit=20'
fetch(url)
    .then(function (response) {
        response
            .json().then(function (data) {
                listarProdutos(data)
            })
    })
let objeto;
function listarProdutos(dados) {
    objeto = dados
    for (let i = 0; i <= dados.length - 1; i++) {
        cards.innerHTML +=
            `
       <li>
            <div>
                <img src="${dados[i].image}">
            </div>
            <h2>${dados[i].title}</h2>
            <p>Avaliação: ${dados[i].rating.rate}</p>
            <p class="category">Categoria: ${dados[i].category}</p>
        </li>
        `
    }
    // <p>${dados[i].description}</p>
}
li = document.getElementsByTagName('li')
function filtrar() {
    let pes = pesquisar.value 
    for (let i = 0; i < objeto.length; i++){
        if (objeto[i].title.toUpperCase().search(pes.toUpperCase()) != -1) {
            li[i].style.display = 'block'
        } else {
            li[i].style.display = 'none'
        }
    }
    if(pes == ''){
        category()
    }
        
}
function category() {
    for (let i = 0; i < objeto.length; i++) {
        if (objeto[i].category == categoria.value || categoria.value == 'todos') {
            li[i].style.display = 'block'
        } else {
            li[i].style.display = 'none'
        }
    }
    filtroPorAvaliacao() 
}
function filtroPorAvaliacao() {
    for (let i = 0; i < objeto.length; i++) {
        if (objeto[i].rating.rate >= avaliacao.value && categoria.value == 'todos' || objeto[i].rating.rate >= avaliacao.value && objeto[i].category == categoria.value) {
            li[i].style.display = 'block'
        } else if(avaliacao.value  == 'todos'){
            category()
        }else{
            li[i].style.display = 'none'
        }
    }
}

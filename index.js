let url = 'https://fakestoreapi.com/products?limit=20'
fetch(url)
.then(function (response) { response
.json().then(function (data) {
    // console.log(data);
        listarProdutos(data)
    })
})

function listarProdutos(dados){
    for(let i = 0; i <= dados.length-1; i++){
        cards.innerHTML += 
        `
        <div>
            <img src="${dados[i].image}">
        </div>
        <h2>${dados[i].title}</h2>
        <p>${dados[i].description}</p>
        `
    }
}
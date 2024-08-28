fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))

fetch(urlR)
.then(function (response) { response
.json().then(function (data) {
        addRegioes(data)
    })
})
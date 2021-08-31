console.debug('carregando')

fetch('js/vitrini.json')
    .then(response => response.json())
    .then(dados => {


        let valores = dados.products.map(function(item, i) {
            console.debug(item, i)

            return `      
      <div class="item1" id="item">
        <img src="${item.photo}" alt="bateria">
        <p class="grid-item-nome">${item.productName}</p>
        <p class="desc">${item.descriptionShort}</p>
        <span>${item.price}</span>`
        })

        document.getElementById('item').innerHTML = valores

    })
    .catch( (error) => console.log("Não foi possivel trazer os dados."))



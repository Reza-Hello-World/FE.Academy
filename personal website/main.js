function getProducts() {
    fetch('http://localhost:1337/api/products?populate=image')
        .then((response) => response.json())
        .then((products) => {
            renderProducts(products.data)
        })
}

function renderProducts(products) {
    console.log(products[2].attributes.projectsJson.data[0].techList.length)
    let ulListsLength = products[2].attributes.projectsJson.data[0].techList.length
    let projectsElement = document.getElementById('projects')
    let articleElement = document.createElement('article')
    let textDivElement = document.createElement('div')
    let header4Element = document.createElement('h4')
    let header3Element = document.createElement('h3')
    let blackBoxElement = document.createElement('p')
    let technoElement = document.createElement('h4')
    let ulElement = document.createElement('ul')
    for (let i; i < ulListsLength; i++) {
        let liElement = document.createElement('li')
        ulElement.appendChild(liElement)
    }
    projectsElement.appendChild(articleElement)
    articleElement.appendChild(textDivElement)
    textDivElement.appendChild(header4Element)
    textDivElement.appendChild(header3Element)
    textDivElement.appendChild(blackBoxElement)
    textDivElement.appendChild(technoElement)

    // for (let product of products) {
    //     let productElement = document.createElement('div')
    //     let img = document.createElement('img')
    //     let imageUrl = 'http://localhost:1337' + product.attributes.i mage.data.attributes.url
    //     img.src = imageUrl
    //         // console.log(debugTest)
    //     productElement.textContent = product.attributes.title
    //     productElement.className = "product"
    //     productsElement.appendChild(productElement)
    //     productElement.appendChild(img)
    // }
    console.log(ulElement)
}

getProducts()
const box = document.querySelector('.box');
async function Market() {
    try {
        let res = await fetch('https://dummyjson.com/products') 
        let resolve = await res.json()
        let res_arry = resolve.products
        res_arry.forEach(info => {
            console.log(info);
            let div = document.createElement('div')
            div.classList.add('card')
            let h1 = document.createElement('h1')
            h1.classList.add('card_title')
            let p = document.createElement('p')
            p.classList.add('card_text')
            let p2 = document.createElement('p')
            p2.classList.add('card_price')
            let p3 = document.createElement('p')
            p3.classList.add('card_stock')
            let h4 = document.createElement('h3')
            h4.classList.add('card_category')
            let img = document.createElement('img')
            h1.innerHTML = `Name:${info.title}`
            p.innerHTML = `description: ${info.description}`
            p2.innerHTML = `price: ${info.price}$`
            p3.innerHTML = `stock: ${info.stock} ta`
            h4.innerHTML = `category: ${info.category}`
            img.innerHTML = `thumbnail: ${info.thumbnail}`
            img.setAttribute('src', `${info.thumbnail}`)
            div.append(img)
            div.append(h1)
            div.append(h4)
            div.append(p)
            div.append(p2)
            div.append(p3)
            box.append(div)
        }); 
    } catch (error) {
        console.error(error);
    }
}
Market()
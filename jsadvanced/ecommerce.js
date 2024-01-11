let products = [];

async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const div = document.querySelector(".card-container");
    const ul = document.querySelector('ul');
    const tot=document.querySelector('.totale')

    data.forEach((product) => {
      const img = document.createElement("img");
      const title = document.createElement("h2");
      const p = document.createElement("p");
      const divCard = document.createElement("div");
      const btn = document.createElement("button");
      btn.classList.add('btn-add');
      divCard.classList.add('divCard');

      img.setAttribute("src", product.image);
      title.innerText = product.title;
      p.textContent = product.price;
      btn.textContent = "add"

      btn.addEventListener('click', () => {
        ul.innerHTML=''
        // products.push(product)
        
        const findProd= products.find(chartProduct=>chartProduct.id==product.id)
        if(!findProd){
          products=[...products,{...product,quantity:1}]
        }else{
          findProd.quantity++;
        }
        const total= products.reduce((a, product)=>Math.round(a+product.quantity*product.price),0);

        tot.textContent=`Totale: ${total}`
        console.log(total)
        console.log(products)
        products.forEach((chart) => {
          const li = document.createElement('li');
          li.textContent = chart.title + "X" + chart.quantity
          console.log(li)
          ul.appendChild(li)
        })
        
        
      })

      divCard.append(title, img, p, btn);
      div.appendChild(divCard);
    });

  } catch (error) {
    console.error(error);
  }
}

getData();
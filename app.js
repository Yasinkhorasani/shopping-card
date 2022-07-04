// Elemente aussuchen

const proElements = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const plus = document.querySelector(".plus");

 let products = [];

const handleLoad = (evt) => {
  if (evt.target.status == 200) {
     products = JSON.parse(evt.target.responseText);
    console.log(products);
  } else {
    console.log(evt.target.statusText);
  }
  processProduct();
};
const loadData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "./products.json");
  xhr.addEventListener("load", handleLoad);
  xhr.send();
};


  // save cart to local storage
  let addToCart = (products)=>{
    console.log(products.icons);
  }

const processProduct = () => {
  products.forEach(element => {
   let img = document.createElement("IMG");
    img.src = element.imgSrc;
    img.innerHTML = element.imgSrc;

    let icons = document.createElement("IMG");
    icons.src = element.iconSrc;
    

    const container = document.createElement("div");
    proElements.appendChild(container);
    container.innerHTML = element.name;
    container.appendChild(icons);container.appendChild(img);
    

    const preis = document.createElement("h3");
    preis.innerHTML = `€ ${element.preis}`;
    container.appendChild(preis);

    icons.addEventListener('click', addToCart);
    
  });
};

//cart Array
//let cart = []




/*const renderProducts = (product) => {
  for (let product of products) {
    proElements.innerHTML += `
    <div class="item">
        <div class="item-container">
           <div class="item-img">
                <img src="${product.imgSrc}">
           </div>
            <div class="desc">
              <h2>${product.name}</h2>
              <h4>€ ${product.preis}</h4>
            </div>
          <div class="plus" onclick="addToCart(${product.id})">
           <img src="./icons/bag-plus.svg" alt="plus">
          </div>
        </div>
     </div>
    `;
  }
};
;*/


//Inkrementieren 


const init = () => {
  loadData();
 
  //renderProducts();
};

init();

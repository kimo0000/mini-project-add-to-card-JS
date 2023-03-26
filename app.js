const products = [
   {
      id: 0,
      image : './imgs/shoes01.jpeg',
      title : 'product 01',
      price : 350
   },
   {
      id : 1,
      image : './imgs/shoes02.webp',
      title : 'product 02',
      price : 450,
   },
   {
      id : 2,
      image : './imgs/shoes03.jpg',
      title : 'product 03',
      price : 399,
   },
   {
      id : 3,
      image : './imgs/shoes04.jpg',
      title : 'product 04',
      price : 299,
   },
   {
      id : 4,
      image : './imgs/shoes05.jpg',
      title : 'product 05',
      price : 410,
   },
   {
      id : 5,
      image : './imgs/shoes06.jfif',
      title : 'product 06',
      price : 250,
   },
];

// Create Empty Array
let card = [];

function addTocard(a) {
   card.push({...products[a]})
   displaycard();
}

function deleteItem(a) {
   card.splice(a, 1);
   displaycard();
}

// Add Items To Page
let root = document.querySelector('.root');

let i = 0;

root.innerHTML = products.map((product) => {
   let {image, title, price} = product;
   return (`
      <div class='box'>
        <div class='image'>
           <img src=${image} alt='image' />
        </div>
        <div class='box_info'>
           <h3>${title}</h3>
           <p class='size'>
             <span>S</span>
             <span>M</span>
             <span>L</span>
             <span>XL</span>
             <span>XXL</span>
           </p>
           <h4>$${price}.00</h4>
        `
      +"<button onclick='addTocard("+(i++)+")'>Add To Card</button></div></div>"
      )
}).join('');

let contentcard = document.querySelector('.content_card');

function displaycard() {
   let j = 0;
   let total = 0;

   let counterCard = document.querySelector('.counter');
   counterCard.innerHTML = card.length

   let totale = document.querySelector('.total .totale');
   console.log(totale.innerHTML);
   
   if(card.length === 0) {
      contentcard.innerHTML = 'Card Is Empty !';
      totale.innerHTML = `$${0}.00`;
   } else {
      contentcard.innerHTML = card.map((item) => {
         
         let {image, title, price} = item;
         
         total += price;
         console.log(total);
          totale.innerHTML = `$${total}.00`;

         return (
            `<div class='row'>
               <img src='${image}' alt='image' />
               <h3>${title}</h3>
               <h4>$${price}.00</4>
            `
            +"<i class='fa-solid fa-trash-can' onclick='deleteItem("+(j++)+")'></i></div>"
         )
      }).join('');
   }
}









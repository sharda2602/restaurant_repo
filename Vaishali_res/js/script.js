
let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBTN = document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBTN.addEventListener("click",function(){
    menus.classList.remove("active");
})

document.querySelector('#View_all')
.addEventListener('click', () => {
   window.location.href = 'menu1.html';
})


//--------------------------Swiper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        968:{
            slidesPerView: 3,
        },
    }
  });

//.................................Dynamic images

const SectionCenter = document.querySelector('.menus_items_container');
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach(function(btn){
   btn.addEventListener("click",function(e){
   const Category = e.currentTarget.dataset.id;
   const menuCategory = menu.filter(function(menuItem){
      if(menuItem.Category==Category){
         return menuItem;
      }
   });
   /*if(Category=="Snacks"){
      displayMenusItem(menu);
   }
   else{
      displayMenusItem(menuCategory);
   }*/

   const menu1Category = menu1.filter(function(menuItem){
      if(menuItem.Category==Category){
         return menuItem;
      }
   });
   

   const menu2Category = menu2.filter(function(menuItem){
      if(menuItem.Category==Category){
         return menuItem;
      }
   });

   const menu3Category = menu3.filter(function(menuItem){
      if(menuItem.Category==Category){
         return menuItem;
      }
   });

   const menu4Category = menu4.filter(function(menuItem){
      if(menuItem.Category==Category){
         return menuItem;
      }
   });

   const menu5Category = menu5.filter(function(menuItem){
      if(menuItem.Category==Category){
         return menuItem;
      }
   });
   
   if(Category=="Snacks"){
      displayMenusItem(menu);
   }
   else if(Category=="Bhel Puri"){
      displayMenusItem(menu1);
   }
   else if(Category=="Sandwiches & Toasts"){
      displayMenusItem(menu2);
   }
   else if(Category=="Pizza"){
      displayMenusItem(menu3);
   } 
   else if(Category=="Drinks"){
      displayMenusItem(menu4);
   } 
   else if(Category=="Desserts"){
      displayMenusItem(menu5);
   }
   else{
      displayMenusItem(menuCategory);
   }

});
});

const menu =[
    {
       id: 1,
       title: "Masala Dosa",
       Category: "Snacks",
       price: "60.00",
       img: "./imgs/masala dosa.png"
    },

    {
        id: 2,
        title: "Mysore Masala Dosa",
        Category: "Snacks",
        price: "90.00",
        img: "./imgs/mysore masala dosa.png"
     },

     {
        id: 3,
        title: "Onion Tomato Uttappa",
        Category: "Snacks",
        price: "100.00",
        img: "./imgs/onion tomato uttappa.png"
     },

     {
        id: 4,
        title: "Onion Tomato Cheese Uttappa",
        Category: "Snacks",
        price: "130.00",
        img: "./imgs/Cheese Onion Uttappa (1).png"
     },

     {
        id: 5,
        title: "Tomato Omelette",
        Category: "Snacks",
        price: "60.00",
        img: "./imgs/Tomato Omlette.png"
     },

     {
        id: 6,
        title: "Tomato Omelette with Cheese",
        Category: "Snacks",
        price: "100.00",
        img: "./imgs/tomato omelette with cheese.png"
     },

     {
        id: 7,
        title: "Idli Wada",
        Category: "Snacks",
        price: "50.00",
        img: "./imgs/idli wada.png"
     },

     {
        id: 8,
        title: "Dahi Wada",
        Category: "Snacks",
        price: "70.00",
        img: "./imgs/dahi wada.png"
     },

     {
        id: 9,
        title: "Potato Wada",
        Category: "Snacks",
        price: "40.00",
        img: "./imgs/Potato wada.png"
     },

     {
        id: 10,
        title: "Sabudana Wada",
        Category: "Snacks",
        price: "50.00",
        img: "./imgs/sabudana wada.png"
     },

     {
        id: 11,
        title: "Veg Cutlet",
        Category: "Snacks",
        price: "60.00",
        img: "./imgs/veg cutlet.png"
     },

     {
        id: 12,
        title: "Veg Burger",
        Category: "Snacks",
        price: "60.00",
        img: "./imgs/veg burger.png"
     },
   ],
   
   menu1 =[
   {
      id: 1,
      title: "Bhel",
      Category: "Bhel Puri",
      price: "40.00",
      img: "./imgs/Bhel.png"
   },

   {
      id: 2,
      title: "Shev Puri",
      Category: "Bhel Puri",
      price: "50.00",
      img: "./imgs/Shev Puri.png"
   },

   {
      id: 3,
      title: "Shev Potato Puri",
      Category: "Bhel Puri",
      price: "50.00",
      img: "./imgs/Shev Potato Puri (2).png"
   },

   {
      id: 4,
      title: "Bhel Puri",
      Category: "Bhel Puri",
      price: "50.00",
      img: "./imgs/Bhel Puri.png"
   },

   {
      id: 5,
      title: "Dahi Puri",
      Category: "Bhel Puri",
      price: "50.00",
      img: "./imgs/Dahi Puri.png"
   },

   {
      id: 6,
      title: "Shev Potato Dahi Puri",
      Category: "Bhel Puri",
      price: "65.00",
      img: "./imgs/Shev potato dahi puri.png"
   },
],

menu2 =[
   {
      id: 1,
      title: "Toast Butter Sandwich",
      Category: "Sandwiches & Toasts",
      price: "50.00",
      img: "./imgs/Toast Butter Sandwich.png"
   },

   {
      id: 2,
      title: "Cheese Toast Sandwich",
      Category: "Sandwiches & Toasts",
      price: "70.00",
      img: "./imgs/Cheese toast sandwich.png"
   },

   {
      id: 3,
      title: "Chutney Sandwich",
      Category: "Sandwiches & Toasts",
      price: "40.00",
      img: "./imgs/chutney sandwich.png"
   },

   {
      id: 4,
      title: "Veg Sandwich",
      Category: "Sandwiches & Toasts",
      price: "50.00",
      img: "./imgs/Veg Sandwich.png"
   },

   {
      id: 5,
      title: "Cheese Veg Sandwich",
      Category: "Sandwiches & Toasts",
      price: "80.00",
      img: "./imgs/Cheese Veg Sandwich.png"
   },

   {
      id: 6,
      title: "Veg Club Sandwich",
      Category: "Sandwiches & Toasts",
      price: "70.00",
      img: "./imgs/Veg club sandwich.png"
   },

   {
      id: 7,
      title: "Tomato Omlette Sandwich",
      Category: "Sandwiches & Toasts",
      price: "60.00",
      img: "./imgs/Tomato omlette sandwich.png"
   },

   {
      id: 8,
      title: "Cheese Veg Club Sandwich",
      Category: "Sandwiches & Toasts",
      price: "90.00",
      img: "./imgs/cheese veg club sandwich.png"
   },

   {
      id: 9,
      title: "Cheese Chilli Veg Toast",
      Category: "Sandwiches & Toasts",
      price: "100.00",
      img: "./imgs/cheese cjilli veg toast.png"
   },
],

menu3 =[
   {
      id: 1,
      title: "Cheese Pizza",
      Category: "Pizza",
      price: "120.00",
      img: "./imgs/cheese pizza.png"
   },

   {
      id: 2,
      title: "Cheese Veg Pizza",
      Category: "Pizza",
      price: "190.00",
      img: "./imgs/cheese veg pizza.png"
   },

   {
      id: 3,
      title: "Cheese Capsicum Onion Pizza",
      Category: "Pizza",
      price: "190.00",
      img: "./imgs/cheese capsicum onion pizza.png"
   },

],

menu4 =[
   {
      id: 1,
      title: "Tea",
      Category: "Drinks",
      price: "30.00",
      img: "./imgs/tea.png"
   },

   {
       id: 2,
       title: "Fresh Coffee",
       Category: "Drinks",
       price: "40.00",
       img: "./imgs/fresh coffee.png"
    },

    {
       id: 3,
       title: "Sweet Lassi",
       Category: "Drinks",
       price: "70.00",
       img: "./imgs/sweet lassi.png"
    },

    {
       id: 4,
       title: "Salted Lassi",
       Category: "Drinks",
       price: "70.00",
       img: "./imgs/salted lassi.png"
    },

    {
       id: 5,
       title: "Cold Coffee",
       Category: "Drinks",
       price: "80.00",
       img: "./imgs/cold coffee.png"
    },

    {
       id: 6,
       title: "Vanilla Shake",
       Category: "Drinks",
       price: "80.00",
       img: "./imgs/vanilla shake.png"
    },

    {
       id: 7,
       title: "Banana Shake",
       Category: "Drinks",
       price: "80.00",
       img: "./imgs/banana shake.png"
    },

    {
       id: 8,
       title: "Rose Shake",
       Category: "Drinks",
       price: "90.00",
       img: "./imgs/rose shake.png"
    },

    {
       id: 9,
       title: "Cold Shake",
       Category: "Drinks",
       price: "100.00",
       img: "./imgs/cold shake.png"
    },

    {
       id: 10,
       title: "Mango Shake",
       Category: "Drinks",
       price: "110.00",
       img: "./imgs/mango shake.png"
    },

    {
       id: 11,
       title: "Strawberry Shake",
       Category: "Drinks",
       price: "90.00",
       img: "./imgs/strawberry shake.png"
    },

    {
       id: 12,
       title: "Thandai Shake",
       Category: "Drinks",
       price: "90.00",
       img: "./imgs/thandai shake.png"
    },
  ],

  menu5 =[
   {
      id: 1,
      title: "Fresh Fruit Salad",
      Category: "Desserts",
      price: "80.00",
      img: "./imgs/fresh fruit salad.png"
   },

   {
       id: 2,
       title: "Fresh Fruit Salad with Icecream",
       Category: "Desserts",
       price: "100.00",
       img: "./imgs/fresh fruit salad with icecream.png"
    },

  ]

window.addEventListener("DOMContentLoaded",function(){
    displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let displayMenusItem = menuItem.map(function(item){
        return `<div class="img_cards">
        <img src="${item.img}" alt="">
        <p class="price">${item.price}</p>
        <p>${item.title}</p>
    </div>`;
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
}
// home page
// loading
$(document).ready(function(){
  $("#loading").fadeOut(2000 , function(){
      $("body").css( "overflow","auto" )
  })
})

// fix
let fix = document.getElementById("fix");
let fix2 = document.getElementById("fix2");
let fix3 = document.getElementById("fix3");
let fixItem = document.getElementById("fix-item");
let sideBar = document.getElementById("sideBar");
// header
let icon = document.getElementById("icon");
let search = document.getElementById("inputSeach"); 
let pad = document.getElementById("pad");
let header = document.getElementById("header");
// scroll
window.onscroll = function() {
  if(scrollY >= 200) {
    header.classList.add("header_2");
    fix.classList.add("fixjs");
  }
  else{
    header.classList.remove("header_2");
    fix.classList.remove("fixjs");
  }
}
// icon on header
icon.addEventListener("click" , function(){
  let form = document.getElementById("form-inline");
  search.style.cssText = "display: inline";
  form.style.cssText = "margin-left: -140px";
})
// side bar
sideBar.addEventListener("click" , function(){
  fix2.classList.toggle("showFix");
  fix3.classList.toggle("zindex");
  fixItem.classList.toggle("showFixItem");
})
// add to card
let container = [
    {
        id :0,
        prise : "$85.00" ,
        name : "HOLDING GEAR",
        imgSrc :"task divit english/img/product1-730x730.jpg"

    },
    {
        id :1,
        prise : "$470.00" ,
        name : "PRO-DIVE SCUBA TANK",
        imgSrc :"task divit english/img/product4-730x730.jpg"

    },
    {
        id :2,
        prise : "$350.00" ,
        name : "SCUBA DIVING",
        imgSrc :"task divit english/img/product2-730x730.jpg"

    }
]

function productss(){
    let product1 = ""
    for (let i = 0; i < container.length; i++) {
        product1+= `
        <div class="col-lg-4">
        <div class="text2">
          <p>${container[i].prise}</p>
          <h2>${container[i].name}</h2>
        </div>
        <div class="photo">
          <div class="layer"></div>
          <img src="${container[i].imgSrc}" alt="">
          <button class="btn" onclick="AddItem(${i})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
        `
    }
    document.getElementById("apply_product").innerHTML = product1
}
productss()

let container_product = []

function AddItem(id){
    let item = container.find((ele) => ele.id === id)
    container_product.push(item)
    displayProduct()
}


function displayProduct(){
    let rowProduct3 =""
    for (let i = 0; i < container_product.length; i++) {
        rowProduct3 +=`
        <div class="text">
        <div class="photo">
          <img src="${container_product[i].imgSrc}" alt="">
        </div>
        <div class="text_info">
          <h5>${container_product[i].name}</h5>
          <p>${container_product[i].prise}</p>
          <div onclick="deleteProduct(${i})">
      <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
        `
    }
    document.getElementById("product_show").innerHTML =rowProduct3
}



function deleteProduct(i) {
  container_product.splice(i,1)
  displayProduct()
}



export function menuTab(){


const menu=[
    "Hamburger             :   $3.00",
    "Cheeseburger          :   $3.50",
    "Double Cheeseburger   :   $5.00",
    "Steak                 :   $15.00",
    "Ribs                  :   $12.00"
]

const pic=["hamburger.png","cheeseburger.png","double-cheeseburger.png","steak.png","ribs.png"]

const content=document.getElementById("content");
content.className="active";
//create menu header
const h1=document.createElement("h1");
h1.textContent="Menu";
const div=document.createElement("div");
div.className="menu";
const img=document.createElement("img");
img.src="./images/chef.png";
img.width=80;
img.height=80;
div.appendChild(h1);
div.appendChild(img);
content.appendChild(div);

const dir="./images/";

function menuDiv(pic,price,dir){
    let div=document.createElement("div");
    let img=document.createElement("img");
    let h3=document.createElement("h3");
    div.className="menu-item";
    img.src=dir+pic;
    img.width=80;
    img.height=80;
    h3.innerText=price;
    div.appendChild(img);
    div.appendChild(h3);
    return div;
}

const divmenu=document.createElement("div");
divmenu.id="wholemenu";
for (let i=0;i<=menu.length-1;i++){
    divmenu.appendChild(menuDiv(pic[i],menu[i],dir));
}
content.appendChild(divmenu);
}


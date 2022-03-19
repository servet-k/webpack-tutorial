import {headerDiv} from "./header"
export function home(){

const div=document.createElement("div");
      div.className="welcome";
const p=document.createElement("p");
p.innerHTML="<span style=\"color:red;font-size:30px\">BurgerHouse</span> <br>Best Burger By Neighbourhood";
div.appendChild(p);
const content=document.getElementById("content");
content.className="active";
content.appendChild(div);

}
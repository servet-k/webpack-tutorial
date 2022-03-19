export function contact(){
const content=document.getElementById("content");
const dialog=document.createElement("dialog");
const tel=document.createElement("h2");
const addr=document.createElement("h2");

dialog.setAttribute("open","");
tel.innerText=" Tel : 90 212 333 22 11 "
dialog.appendChild(tel);
addr.innerText=" Address: Unknown,please just call..";
dialog.appendChild(addr);

content.appendChild(dialog);
}
export function headerDiv(){
const header=document.createElement("header");
const ul=document.createElement("ul");

const nav_arr=["Home","Menu","Contact"]

for (const x of nav_arr){
    const li=document.createElement("li");
    li.innerText=x;
    li.setAttribute("data-tab-target",`#${x.toLowerCase()}`);
    ul.appendChild(li);
}

header.appendChild(ul);

return header;
}
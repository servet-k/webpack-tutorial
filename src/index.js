import { headerDiv } from "../dist/header";
import { home } from "../dist/home";
import { menuTab } from "../dist/menu";
import { clearDiv} from "../dist/clear";
import { contact } from "../dist/contact";


const content=document.getElementById("content");
content.appendChild(headerDiv());
const link=document.querySelectorAll("li");
home();
link.forEach(item=>item.addEventListener("click",
    (e)=>{
        if (e.target.innerText=="Home"){
           
            clearDiv(content);
            
            home();
        } else if (e.target.innerText=="Menu"){
           
            clearDiv(content);
            
            menuTab();

        }else if (e.target.innerText=="Contact"){
            
            clearDiv(content);
            
            contact();

        }

    }
)
    
    
    )
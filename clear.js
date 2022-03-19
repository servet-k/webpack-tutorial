export function clearDiv(e_id){
    let div=document.getElementById(e_id);
    while (content.childElementCount>1){
        content.removeChild(content.lastChild);
        }
}
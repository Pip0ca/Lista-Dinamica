var ul = document.getElementById("lista");
//buscando elemento do html - lista
var li;
var itemId;
var item;

addAnim = function(){
    if(document.getElementById("animText").value !=""){
    //verificar se a caixa de texto não esta vazio
        item = document.getElementById("animText");
        itemId = ul.childElementCount; 
        // childElementCount quantifade de elementos filhos
        li = createItemEl(item.value,itemId);
        li.appendChild(createRemoveAnimBtn(itemId));
        ul.appendChild(li);
    }
    
}

removeAnim = function(itemId){
    for (i=0; i<ul.children.length ; i++){
        if(ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove();
        }
    }
}

createItemEl = function(itemValue,itemId){
    let li = document.createElement("li");
    //criar elemento item de lista
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

createRemoveAnimBtn = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeAnim("+itemId+")");
    btn.innerHTML = "X";
    return btn;
}

contatAnim = function(ul){
    document.getElementById("contador").innerHTML = itemId + 1;
}
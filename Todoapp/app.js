let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");


btn.addEventListener("click",function(){
    let inptext=inp.value.trim();
    if(inptext!==""){
        let item=document.createElement("li");
        item.innerText=inp.value;
       
    
        let del=document.createElement("button");
        del.innerText="remove"; 
        del.classList.add("remove");
    
        item.appendChild(del);
        
        ul.appendChild(item);
        //console.log(inp.value);
        inp.value ="";

    }
    else{
        alert("please enter a valid task");
    }
   
   

});
// This code can be only delete existing elements/tasks only 
// let delbtn=document.querySelectorAll(".remove");
// for(btns of delbtn){
// btns.addEventListener("click",function(){
//     let par=this.parentElement;
//     par.remove();
    
// });
// }

//To delete newly added task
 ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){//event.target.nodeName tells on which item that we have clicked
        let listItem=event.target.parentElement;
        listItem.remove();
    }
 });
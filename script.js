var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")




(document).ready(function(){
    activaTab('one');
});



function changeHeader(event, id){
    
    for (var x of tabs) {
        x.style.display = "none"
        x.classList.remove("tabAnimation")
    }

   

    
    document.getElementById(id).style.display = "flex"



    
    setTimeout(function(){
        document.getElementById(id).classList.add("tabAnimation")
    }, 130)

   
}

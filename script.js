var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")
var one = document.getElementById("one")
var two = document.getElementById("two")



// Paslepia visus tabus pradžioje
for (var x of tabs) {
    x.style.display = "none"
}

function changeHeader(event, id){
    // Paslepia ir nuima animaciją tabams
    for (var x of tabs) {
        x.style.display = "none"
        x.classList.remove("tabAnimation")
    }

   

    // Parodo konkretų tab pagal id
    document.getElementById(id).style.display = "block"



    // Prideda animaciją po 100ms
    setTimeout(function(){
        document.getElementById(id).classList.add("tabAnimation")
    }, 100)

   
    // Pašalina mygtukams klasę
    for (var x of buttons) {
        x.classList.remove("selected")
    }

    // Prideda konkrečiam mygtukui klasę
    event.currentTarget.classList.add("selected")
}

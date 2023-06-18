let extra = document.querySelectorAll(".extra");
let event_details = document.querySelectorAll(".event-details");

event_details.forEach(function(item){
    item.classList.add("shrink");
})

extra.forEach(function(item){
    item.addEventListener("click",expands);
})

let closed = 1;
function expands(){
    let item = this.previousSibling;
    let image = item.childNodes[1];
    
    if(closed){
    item.classList.remove("shrink");
    // image.style.width=250+"px";
    if(window.outerWidth <500){
        image.style.width=335+"px";
    }
    else{
        image.style.width=550+"px";
    }
    this.innerHTML = "Read less";
    closed = 0;
    console.log(item.childNodes[1]);
    }
    else{
        item.classList.add("shrink");
        this.innerHTML = "Read more";
        if(window.outerWidth <500){
            image.style.width=335+"px";
        }
        else{
            image.style.width=250+"px";
        }
        // image.style.width=150+"px";
        closed = 1;
    }
}
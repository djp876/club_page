let index_btn = document.querySelector(".index-btn");
let select_box = document.querySelector("#event-pics");
let main_loc = window.location.href;

index_btn.addEventListener("click",function (){
    let loc = select_box.value;
    window.location.href =main_loc+"#"+loc;
})
 list= [
    "MANDAPATI SMRUTHI SRI","csm"
]
cord_names = [
    "Bussa Jeswitha ","Ch Baby Snehitha" ,
    "Katta sai sindhu","Katakam Anirudh",
    "Avvaru Aasritha","KOTHA SAI BABA ",
    "Veeravalli Persis Preethi", "Mohammed Shakeer Ahmad ",
    "Chandana.Talla", "KANCHARLA AJAY KUMAR ",
    "Deborahblessy.potharlanka ","Anam Sushma Reddy",
    "Suramsetti Srivani","PACHIGOLLA SANJAY RATNAM ",
    "Gottapu Rakesh","Polisetti pardhu",
    "Vallurupalli Medini","JADAPALLI GOWTHAM",
]

    let container = document.querySelector(".committee-container");
    console.log(container);
    for(let i=0;i<cord_names.length;i++){
        container.innerHTML+=`<div class="member">
        <div class="details" style="padding:10px 20px">
            <img src="./Images/person.png" alt="member"  class="image">
            <div class="detail-box">
            <p class="detail">${cord_names[i]}</p>
            <p class="detail">Co-ordinator</p>
            <!-- <p class="detail">Co-cordinator</p> -->
          </div>
        </div>
      </div>`

    }
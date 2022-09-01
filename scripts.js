// Text input counter
var maxchar = 255;
var i = document.getElementById("textpip");
var c = document.getElementById("count");
c.innerHTML = 0;

i.addEventListener("keydown", count);

function count(e) {
   var len = i.value.length;
   if (len >= maxchar) {
      e.preventDefault();
   } else {
      c.innerHTML = 0 + len + 1;
   }
}

// Fetches database on LOAD
window.addEventListener("load", async () => {
   const response = await fetch(
      "https://mul3sem-default-rtdb.europe-west1.firebasedatabase.app/transactions.json"
   ) // Add .json

   // Converts the response to JSON
   const data = await response.json()
   console.log(data)

   // Creates an empty Array
   const items = []

   // Convert items in object to an Array
   for (item in data) {
      items.push(data[item])
   }

   items.forEach(item => {
      console.log(item);

      const printPostedPips = `<div class="pipFeed">
      <div class="postedPipBox">
       <div class="postedPipBoxContent d-flex">
        <img class="userImg" src="/img/profilepic.jpg" alt="">
        <div>
            <div class="username"><span>${item.category}</span></div>
            <div class="postedPipDate"><span>${item.transaction_date}</span></div>
            <div class="postedPipText">
                <p>${item.credit_card_company}</p>
                 </div>
               </div>
           </div>
         </div>
      </div>`;

      const div = document.querySelector(".pipFeed");
      div.innerHTML += printPostedPips;

   });


});

/* const printPostedPips = `<div class="pipFeed">
<div class="postedPipBox">
    <div class="postedPipBoxContent d-flex">
        <img class="userImg" src="/img/profilepic.jpg" alt="">
        <div>
            <div class="username"><span>${pip.name}</span></div>
            <div class="postedPipDate"><span>${pip.date}</span></div>
            <div class="postedPipText">
                <p>${pip.text}</p>
            </div>
        </div>
    </div>
</div>
</div>`;

const div = document.querySelector(".pipFeed");
div.innerHTML += printPostedPips; */

// Modal

const pipBtnModal = document.getElementById("pipOpenModal");
const pipCloseModal = document.getElementById("pipCloseModal");
const modal = document.getElementById("pipModal");

pipBtnModal.addEventListener("click", function() {
   modal.style.display = "block";
});

pipCloseModal.addEventListener("click", function() {
   modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
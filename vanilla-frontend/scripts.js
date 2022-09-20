// Text input counter
/* const maxchar = 255;
const i = document.getElementById("textPip");
const c = document.getElementById("count");
c.innerHTML = 0;

i.addEventListener("keydown", count); */

const localHost = "http://localhost:8000";
const textPipInput = document.getElementById("textPip");
const postPipForm = document.querySelector("#postPipForm");

// Counter
textPipInput.addEventListener("keyup", () => {
   const counter = document.getElementById("count");
   const length = textPipInput.value.length;
   counter.innerHTML = length;

   if (length > 199 && length < 255) {
      counter.style.color = "orange";
   } else if (length >= 255) {
      counter.style.color = "red";
   } else {
      counter.style.color = "inherit";
   }
})

// Form
function count(e) {
   var len = i.value.length;
   if (len >= maxchar) {
      e.preventDefault();
   } else {
      c.innerHTML = 0 + len + 1;
   }
}

// Exspanding Textarea
const textarea = document.getElementById("textPip");
const heightLimit = 200; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

// Fetches database on LOAD
window.addEventListener("load", async () => {
   const response = await fetch(
      localHost
   );
   console.log(response)

   // Converts the response to JSON
   const data = await response.json();
   console.log(data)

   // Creates an empty Array
   const items = []

   // Convert items in object to an Array
   for (item in data) {
      items.push(data[item])
   }

   items.forEach(item => {
      //console.log(item);

      const printPostedPips = `<div class="pipFeed">
      <div id="pipId${item.idpip}" class="postedPipBox">
       <div class="box postedPipBoxContent">
       <div class="postedPipImg"><img class="userImg" src="${item.userimage}" alt="profilepic"></div>
        <div class="postedPipTextContent">
        <div class="postedPipUserAndMenu row row-cols-2">
            <div class="userInfo col"><span class="userfirstname">${item.userfirstname}</span><span><svg class="authenticate-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
          </svg></span><span class="username">${item.userpip}</span></div><div class="postedPipMenu col"><button onclick="dropdownPostedPip(${item.idpip})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg></button></div></div>

        <!-- Dropdown!!! -->
        <div class="dropdown">
            <div id="dropdown-content-id-${item.idpip}" class="dropdown-content hide">
              <a href="#">Edit</a>
              <a href="javascript:deletePip(${item.idpip})">Delete</a>
            </div>
          </div>

            <div class="postedPipDate"><span>${item.timepip}</span></div>
            <div class="postedPipText">
                <p>${item.textpip}</p>
                 </div>
                 <div class="postedPipActions row row-cols-2"><div class="col"><button onclick="" class="pipCommentBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                 <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
               </svg></button></div><div class="col"><button onclick="likePip(${item.idpip})" class="pipLikesBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
               <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
             </svg>&nbsp<span id="pipLikesId${item.idpip}" class="pipLikesValue">${item.likespip}</span></button></div></div>
               </div>

           </div>
         </div>
      </div>`;

      const div = document.querySelector(".pipFeed");
      div.innerHTML += printPostedPips;
   });

   // Show Name Of User - now it is undefined
   document.querySelector(".userfirstname").innerHTML = `<div>${item.userpip}</div>`;
});

// Like Pip with Parametre
async function likePip(selectedPipId) {
   // Gets selectedPipId Param from Button
   let pipLikesValue = parseInt(document.querySelector("#pipLikesId"+selectedPipId).innerHTML);
   //console.log(selectedPipId);
   pipLikesValue++;
   // Change Value In HTML until Refresh
   document.querySelector("#pipLikesId"+selectedPipId).innerHTML = pipLikesValue;
   //console.log(pipLikesValue)

   // Fiks denne!
   //document.querySelector("#pipId"+selectedPipId+".bi-heart").style.fill = "red";

   const rawResponse = await fetch(localHost, {
      method: 'PUT',
      body: JSON.stringify({ likespip: pipLikesValue, idpip: selectedPipId })
   });
   console.log(rawResponse);
   const content = await rawResponse.json();
   console.log(content);
}


// Check if Pip Value is Valid
function isInputValid(input) {
   const result = input.length > 0;
   return result;
}

// POST textPip.Value TO SQL
postPipForm.addEventListener("submit", async (event) => {
   event.preventDefault();

   date = new Date().toISOString().slice(0, 19).replace('T', ' ');
   // Could also be made with CURRENT_TIMESTAMP Default/Expression in mySQL
   const textPipValue = document.getElementById("textPip").value;

   const isPipValid = isInputValid(textPipValue);

   if (isPipValid === true) {
      const rawResponse = await fetch(localHost, {
         method: 'POST',
         body: JSON.stringify({ textpip: textPipValue, username: "thavlov", timepip: date })
      });
      console.log(rawResponse);
      const content = await rawResponse.json();
      console.log(content);
      alert("Din besked er sendt!");

   } else {
      textPipInput.style.border = "1px solid red";
   }

})

/*    fillTemplate(titel, note) */
/* $(function() {
   $('#myForm').submit(function(){
      var query = $(this).serialize();
      $.post("post.php", query);
      return false;
  });
});
 */

// Modal

const pipBtnModal = document.getElementById("pipOpenModal");
const pipCloseModal = document.getElementById("pipCloseModal");
const modal = document.getElementById("pipModal");

pipBtnModal.addEventListener("click", function () {
   modal.style.display = "block";
});

pipCloseModal.addEventListener("click", function () {
   modal.style.display = "none";
});

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
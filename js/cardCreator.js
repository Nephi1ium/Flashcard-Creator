
let promptCardBody = [];
let answerCardBody = [];
//  NOW I NEED TO TURN MY ARRAYS INTO OBJECTS, SO I CAN ADD THEM TO THE THE CARD

const saveCard = document.querySelector("#subCardCreate");
const createCard = document.querySelector("#answerCard");



saveCard.addEventListener("click", () => saveCardData());
createCard.addEventListener("click", () => saveNewCards());



function saveCardData() {

    let answerBody = document.getElementById("two").value;

    let promptBody = document.getElementById("four").value;

    promptCardBody[promptCardBody.length]=answerBody;
    answerCardBody[answerCardBody.length]=promptBody;

   return console.log(answerCardBody, promptCardBody);
}

function createNewAnswerCard(promptCardBody) {
    // document.getElementById("flashCard").innerHTML = promptCardBody;
    answerCardBody.forEach(answer=> {
let ansCard = document.querySelector('#flashCard')

ansCard.innerHTML = ansCard.innerHTML + `
    <div class="card">
        <div class="card-header">
            <h4> Answer </h4>
            <div class="card-body">
                <h4>${answer}</h4>
            </div>
        </div>
    </div>`
    })
}
    

function dived() {

}

function createNewPromptCard() {
    for(i=0; i<answerCardBody.length; i++){
        console.log(promptCardBody[i]);
    }
}

function saveNewCards(){
    createNewAnswerCard();
    createNewPromptCard();


    // let a = Need to bring in a particular piece of user input data, then attach
    // it as a parameter, and add it to a card component. Similar
    // to a react page 
}

// products.forEach(product => {
// 	var div = document.querySelector('span')
  
// 	div.innerHTML = div.innerHTML + `
//           <div class="product-card">
//               <div class="badge">Hot</div>
//               <div class="product-tumb">
//                   <img src="" alt="" />
//               </div>
//               <div class="product-details">
//                   <span class="product-catagory">dog1,dog2</span>
//                   <h4><a href="">${product.name}</a></h4>
//                   <p>
//                       ${product.description}
//                   </p>
//                   <div class="product-bottom-details">
//                       <div class="product-price">
//                           <small>$96.00</small>${product.price}
//                       </div>
//                       <button>buy now</button>
//                       <div class="product-links">
//                           <a><i class="fa fa-heart"></i></a>
//                           <a><i class="fa fa-shopping-cart"></i></a>
//                       </div>
//                   </div>
//               </div>
//           </div>

//           <br />
//           <br />
//   `
// })
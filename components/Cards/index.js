// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://gabitimes.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



//COMPONENT FUCTION ARTICLES
function cardMaker(head,img,spanAthname,articlTitile){


    //CREAT ELEMENT 
    const card = document.createElement("div")
    card.setAttribute("data-subject",articlTitile);
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imgContianer = document.createElement("div")
    const image = document.createElement("img")
    const spanName = document.createElement("span")


    //CONNECT 
    card.appendChild(headline)
    card.appendChild(author)
    card.appendChild(spanName)
    author.appendChild(imgContianer)
    imgContianer.appendChild(image)


    //ADD CSS
     card.classList.add("card")
     headline.classList.add("headline")
     author.classList.add("author")
     imgContianer.classList.add("img-container")


    // ADD CONTENT
    headline.textContent= head
    image.src =img
    spanName.textContent= spanAthname


     //RETURN PARANET 
     return card
}



//PARANET SELECTOR 
const cardsContainer =document.querySelector('.cards-container')

//HTTP/API REQUISE 
axios.get("https://gabitimes.herokuapp.com/articles")

.then(res => {
    // console.log(res.data.articles);



    //LOOPING ALL OBJECT 
    object =res.data.articles
    for (const property in object) {
        // console.log(`${property}: ${object[property]}`);

      }



     //JAVASCRIP
      const javascript =object.javascript
    
      // javascript.setAttribute("data-subject", javascript);
    javascript.forEach(item => {
        // console.log(item)
        const head1 = item.headline
        const img1 = item.authorPhoto
        const spanAthname1 = item.authorName

        //ADD DATASET TO TAB DIV
        const javascript="javascript"

        //ADD CARD INTO DOM
        cardsContainer.appendChild(cardMaker(head1,img1,spanAthname1,javascript))
    });
  
   

    //BOOTSRAP

    const  bootstrap = object.bootstrap
    bootstrap.forEach(item => {
        // console.log(item)
        const head2 = item.headline
        const img2 = item.authorPhoto
        const spanAthname2 = item.authorName

        //ADD DATASET TO TAB DIV
        const bootstrap="bootstrap"

        //ADD CARD INTO DOM
        cardsContainer.appendChild(cardMaker(head2,img2,spanAthname2,bootstrap))
    });



    //TECHNOLOGY

    const technology =object.technology
    technology.forEach(item => {
        // console.log(item)
        const head3 = item.headline
        const img3 = item.authorPhoto
        const spanAthname3 = item.authorName
        
        //ADD DATASET TO TAB DIV
        const technology="technology"
         
           //ADD CARD INTO DOM
        cardsContainer.appendChild(cardMaker(head3,img3,spanAthname3,technology))
    });


    //JQUERY

    const jquery =object.jquery
    jquery.forEach(item => {
        // console.log(item)
        const head4 = item.headline
        const img4 = item.authorPhoto
        const spanAthname4 = item.authorName

         //ADD DATASET TO TAB DIV
        const jquery="jquery"

         //ADD CARD INTO DOM
        cardsContainer.appendChild(cardMaker(head4,img4,spanAthname4,jquery))
    });



    //NODE.JS
    
    const node =object.node
    node.forEach(item => {
        // console.log(item)
        const head5 = item.headline
        const img5 = item.authorPhoto
        const spanAthname5 = item.authorName

        //ADD DATASET TO TAB DIV
        const node="node"

        //ADD CARD INTO DOM
        cardsContainer.appendChild(cardMaker(head5,img5,spanAthname5,node))

})


  
    });
    


























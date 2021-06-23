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

function cardMaker(head,img,spanAthname){

    //CREAT ELEMENT 
    const card = document.createElement("div")
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

const cardsContainer =document.querySelector('.cards-container')

axios.get("https://gabitimes.herokuapp.com/articles")

.then(res => {
    // console.log(res.data.articles);#

   

//    topics.addEventListener("click", function(e){
//   console.log()
//   });

    object =res.data.articles
    for (const property in object) {
        // console.log(`${property}: ${object[property]}`);
      }
      
    //   console.log(object.javascript)

  
//    console.log(tab)

   const tab = document.querySelector(".tab")


    //JAVASCRIPT 

    const javascript =object.javascript
    javascript.forEach(item => {
        // console.log(item)
        const head = item.headline
        const img = item.authorPhoto
        const spanAthname = item.authorName

        cardsContainer.appendChild(cardMaker(head,img,spanAthname))

       
    });
  
   



    //BOOTSRAP

    const  bootstrap = object.bootstrap
    bootstrap.forEach(item => {
        // console.log(item)
        const head = item.headline
        const img = item.authorPhoto
        const spanAthname = item.authorName

        cardsContainer.appendChild(cardMaker(head,img,spanAthname))
    });

    // tab[1].appendChild(bootstrap)


    //TECHNOLOGY

    const technology =object.technology
    technology.forEach(item => {
        // console.log(item)
        const head = item.headline
        const img = item.authorPhoto
        const spanAthname = item.authorName

        cardsContainer.appendChild(cardMaker(head,img,spanAthname))
    });
  
    // tab[2].appendChild(technology)


    //JQUERY

    const jquery =object.jquery
    jquery.forEach(item => {
        // console.log(item)
        const head = item.headline
        const img = item.authorPhoto
        const spanAthname = item.authorName

        cardsContainer.appendChild(cardMaker(head,img,spanAthname))
    });

    
    // tab[3].appendChild(jquery)

    //NODE.JS
    
    const node =object.node
    node.forEach(item => {
        // console.log(item)
        const head = item.headline
        const img = item.authorPhoto
        const spanAthname = item.authorName

        cardsContainer.appendChild(cardMaker(head,img,spanAthname))

        const tab = document.querySelectorAll(".tab")

topics.addEventListener("click",function(even){
  tab[0].appendChild(javascript)
})
    });
    
      
    // tab[4].appendChild(object)
})
// console.log(cardMaker());

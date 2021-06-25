// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://gabitimes.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const myTopics = [
//     "javascript",
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js"
// ]


//HTTP/API REQUEST 
axios.get("https://gabitimes.herokuapp.com/topics")
//PROMISES
.then(res => {
  // console.log(res.data.topics)
//data oo dhanbay inoo hanysaa//tab ay data oodhami hoose imanyso 
  tabMaker("ALL")
  
  //LOOPING DATA TAB OO DHAN 

   const newTab =res.data.topics
   newTab.forEach(topic => {
    tabMaker(topic)
   });
  
})
.catch(err => {
  console.log(err.message)
})

//SELECTOR PARANET 
const topics=document.querySelector('.topics')

//COMPONENT FUNTION TABS

function tabMaker(data) {
    
    // GREATE ELEMENT 
    const tab =document.createElement("div")

    //ADD CSS
    tab.classList.add('tab')
  
    //ADD CONNECT 
    tab.textContent = data
    
    //ADD DOM
    topics.appendChild(tab)

    //ADD ATTR
    tab.setAttribute("data-subject" , data)
    //RETURN
    return tab
}


topics.addEventListener("click" , function (even) {
  const targatedTopic =even.target.dataset.subject

  // console.log(targatedTopic);

  const cards =document.querySelectorAll(".card")
  cards.forEach(card => {
    card.style.display ="flex"
  
    if (card.dataset.subject !== targatedTopic) {
      card.style.display ="none"
    }
    if(targatedTopic == "ALL"){
      card.style.display ="flex"
    }
  })

  const tab =document.querySelectorAll(".tab")
  tab.forEach(function (top) {
    const targatedTopic =even.target.dataset.subject
    if(targatedTopic){
      even.target.classList.add("active-tab")
      top.classList.remove("active-tab")
    }

      
})

})  



// const all =document.createElement("div")
// all.textContent = "All"
// all.classList.add('tab')
// // all.classList.add('active-tab')
// topics.appendChild(all)


















// tab.forEach(function(item){
//   console.log(item);
// })

// console.log(topics)


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

function tabs(data) {
    
    // GREATE ELEMENT 
    const tab =document.createElement("div")

    //ADD CSS
    tab.classList.add('tab')

    //ADD CONNECT 
    tab.textContent = data

    //RETURN
    return tab
}

//ADD DOM
const topics=document.querySelector('.topics')

//HTTP/API REQUEST 
axios.get("https://gabitimes.herokuapp.com/topics")

//PROMISES
.then(res => {
   const data =res.data.topics
   data.forEach(item => {
        topics.appendChild(tabs(item))
   });
  
})
.catch(err => {
  console.log(err.message)
})

const all =document.createElement("div")
all.textContent = "All"
all.classList.add('tab')
topics.appendChild(all)


// console.log(topics)



// topics.addEventListener("click",function(even){
//  even.target.style.background ="black"
// })
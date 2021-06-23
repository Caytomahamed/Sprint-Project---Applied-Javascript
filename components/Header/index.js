// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Use this object for the component you created.


//OBJECTS
const newDate = new Date(2021,5,23,8);
 
const headerContent = [
    {
        date: newDate.toDateString(),
        title: "Gabi Times",
        temp: "98°"
    }
];



//COMMPONENT 


function data(date,title,temp) {

    //CREAT ELEMENT 

    const header = document.createElement('div')
    const spanData = document.createElement('span')
    const titleHeading = document.createElement('h1')
    const spanTemp = document.createElement('span')

    //CONNECDT 

    header.appendChild(spanData)
    header.appendChild(titleHeading)
    header.appendChild(spanTemp)
    

    //ADD CSS

    header.classList.add("header")
    spanData.classList.add('data')
    spanTemp.classList.add('temp')
    
    //ADD CONTENT

    spanData.textContent =date
    titleHeading.textContent =title
    spanTemp.textContent =temp

  //RETURN PARANET

    return header
}

//SElECTION
 const headerContainer = document.querySelector('.header-container')

// ADD COMMPONENT TO DOM 

headerContent.map(function(item) {
    headerContainer.appendChild(data(item.date,item.title,item.temp))
})



/* in function in javascript anything below the return statement will not run 

// Scoping in javascript: it means how long a variable lives
// when using or you get the first truth value. when using and you get the first false value
//Map function for arrays

let array1 = [1,4,9,16]
let array2 = array1.map((good)=>{
    return (good)**0.5
})
// this will return the square root of each of the element in the array
console.log(array2)

// this return the division of each element by 2
console.log(array1.map((sar)=>{
    return sar/2
}));
// this wil filter base on numbers that are greater than 2. only number that are greater than 2 will show in our console 
let baba = [3,4,5,1,2,8]
console.log(baba.filter((mar)=>{
    if (mar > 2) return true
    return false
}))

// USING FOR EACH TO LOOP THROUH ARRAY
let boss = ['adeniyi', 'biola', 'tunde', 'ajani']
boss.forEach((element)=>{
    console.log(element)
});
// THIS WILL ADD UP ALL THE VALUE IN THE ARRAY to single value
let grace = [1,2,3,4,5]
console.log(grace.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
}));
// this will add 10 to the array so the addition start from 10 instead of 1. which means the loop count 5 times instead of 4 times
let drace = [1,2,3,4,5]
var count = 0
drace.reduce((accumulator, currentValue)=>{
    count++
},10);
console.log(count) */

//INDEXOF AND FIND
let myFavoriteFood = ['beans', 'rice', 'yam', 'amala']
// this will get the index of the element in the array
console.log(myFavoriteFood.indexOf('beans'))

/* this will go through all the object in the array and get the age that is 23
let person = [{
name: "sarbee",
age: 23
},
{
name:'biola',
age:15
}]
console.log(person.find((s)=>{
    return s.age == 23
}))
// this check their type and value which returns false
let a = 2
let b = "2"
console.log(a===b);
// if the type is not thesame javascript change the type to thesame and compare their values
console.log(a==b)
// we get false in this case because javascript does not compare the value and type of an array instead it compare their memmory location which makes it false because they have different memmory location.
let c = [1,2,3]
let d = [1,2,3]
console.log(c===d)
let a = [1,2,3]
// this return true because their memmory location is thesame
let b = a
console.log(a===b)
so it is advisable to always use === for comparis 
// in this part we are checking if a is true and not number 0 assigned to a. when you convert 0 to boolean we get false which makes the result we get here be a is not defined. once we change the value of a to a number other than 0 then a is defined we show on our console
a = 0
if(a){
    console.log('a is defined')
}else{
    console.log('a is not defined')
}
// here we will get b is defined as an answer because b is not defined here and its also translate to false
let b = 0
if (b!==undefined || b !==false){
    console.log('b is defined')
}else{
    console.log('b is not defined')
}
// the document object is talking about the page you are walking with. The wndow object is above the document object and it talks about method and properties which are alot you can apply to the element in the document object

// setInterval and SetTimeout
// this will change the h1 element because it has an id of name after 2secs to the best programmer. it just execute a program to a given value once and stop executing
console.log("program starts")
setTimeout(() =>{
    document.getElementById("name").innerText = "The best programmer"
},2000)
// this will change the h1 tag to inreament of i i.e 1,2,3,... after 2 secs beacause when we use the interval we tell javacript to increament the value of variable i by 1 every 2secs. this will look like a timeout
console.log("program ends")
let i = 0
console.log("program starts")
setInterval(() =>{
    document.getElementById("name").innerText = ++i
},2000)
console.log("program ends")

//clearTimeout and clearInterval
//the clearInterval will stop the running of the program after a condition is met. in this once i get to 10 the time intervl will stop counting and display time up
let i = 0
console.log("program starts")
let id = setInterval(() =>{
    document.getElementById("name").innerText = ++i
    if(i==10){
        clearInterval(id);
        alert("time up")
    }
},1000)
console.log("program ends") */
// INTERMEDIATE JAVASCRIPT
// selecting a specific tag element in a list of tags
/*
let button = document.querySelectorAll("button");
let output = document.querySelector(".output");
console.log(button)
//using arrow function for the function
button[1].addEventListener("click", ()=>{
    // placing the value of the input we grab in the local scope allows us to update the scores in the div tag without refereshing the page. only just clicking 

    let result=document.querySelector("input").value;
    // this will multiply the value by 15%
    let gettingPercent = result * 0.15;
    console.log(gettingPercent);
    // rounding up to two decimal places
    let gettingRounded = gettingPercent.toFixed(2);
    console.log(gettingRounded);
    //let display ='<h1>'  +'You should have a tip of #' +gettingRounded + ' on #'+result +'</h1>';
    //using back tick to display the result which makes your code cleaner
    let display = `<h1>You should have a tip of #${gettingRounded} on #${result}</h1>`
    output.innerHTML = display;
    
}) 
the result of the code above
The beginning of learning javascript
You should have a tip of #15.90 on #106 */

// BUILDING CHROME EXTENSIONS


// this will render any text we inserted in the input element under the save button 

let myNames = `["www.sarbee.com"]`
// turn myNames string into an array
myNames = JSON.parse(myNames)
//push a new value to the array
myNames.push("www.sarbeeton.com")
// this disply an array of www.sarbee.com and www.sarbeeton.com
console.log(myNames)
// turn the array into a string again
myNames = JSON.stringify(myNames)
// when you check the type of MyNames you get string
console.log(typeof myNames)

// declaring some tabs address in an array object

let myLeads = []
const ulEl = document.getElementById("ul-el");
let inputEl = document.querySelector("input");
const button = document.querySelector("button")
;
const deleteButton = document.querySelector("#delete");
const saveTab = document.querySelector("#save-tab");
saveTab.addEventListener("click", function(){
// using chrome api to allow us get the current web address that we are in and put it in the save tab button so that when we clickon it, it will get the current web address of that page or tab. i got this code from stack overflow
chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
    //pushing it into the empty myLeads array declared above
    myLeads.push(tabs[0].url)
    //saving it in our local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // using the render function to display the result on our page
    render(myLeads)
});
})

deleteButton.addEventListener("dblclick", function(){
    // clearing the local storage
    localStorage.clear();
    // making all the element in store on our database or leads array to be empty
    myLeads = []
    render(myLeads)
})

// this allows the value we put in the input field which get rendered below to stay there when we refresh our page
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
// here we are making the render to be dynamic to accept different types of array elements i.e making the function reusable 
function render(leads){
    let listItems = "";
    for(let i = 0; i<leads.length; i++){
        // creating a link as a rendered object list and making it clickable
        listItems += `<li><a href='${leads[i]}' target='_blank'> ${leads[i]}</a></li>`
        console.log(listItems)
       // ulEl.innerHTML+= "<li>" + myLeads[i] + "<li/>"sae
       //doing the above in other way
       /*const li = document.createElement("li")
       li.textContent = myLeads[i]
       ulEl.append(li) */
    
       //Using another method
    }
    ulEl.innerHTML = listItems;
    }





//This will enable us to set an address to the local storage, we can delete this line of code, but it will still have the address www.sarbee.com  .. localStorage.setItem("myLeads","www.sarbee.com")
//When we log this to the console the address will still show because we set it previously and the browser still remeber it .console.log(localStorage.getItem("myLeads"))
//localStorage.setItem("ridwan", ["www.akanni.com","www.adeniyi.com", "www.seeme.com"])
//console.log(localStorage.getItem("ridwan"))
//removing the item in the local storage so that it will not appear again when we want to get the item. note the local storage only store string. 
//localStorage.clear()


button.addEventListener("click", ()=>{
    // pushing the value we type in the input button into the myLeads array we declare above
    myLeads.push(inputEl.value);
    // clearing the input field after we submitted the value we type in the input field
    inputEl.value = '';
    // saving the myLeads array into a local storage. the keys: then the value
    // the reason we convert our array of address to JSON.stringify is that local storage only support string objects.
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // To verify if it works:
    console.log(localStorage.getItem("myLeads"))

    
    // using the function below once a button is clicked.
    render(myLeads)
    // making the input field clear out after rendering a text
    //inputEl.value = '';
    
})

// we have launch the leads tracker into our extenions. i will explain how i did that later. but the problem now is that after we type an adress and hit the save input, it actually save but when we exit the leads tracker the list of websites is no longer there. how do we solve this problem. we need to learn how to store data across each refresh.

/*
// here address is a string
let address = `["www.adeniyi.com"]`
// here we conver it to array
let strings_array = JSON.parse(address)
// we apply the push method to insert other address
strings_array.push("www.sarbee.com","www.muhammed.com","www.biola.com")
console.log(strings_array)
*/

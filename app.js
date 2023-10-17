

var inputText = document.getElementById("input")
var submitButton = document.getElementById("button")
var toDoList = document.getElementById("todolist")

var toDoArray=JSON.parse(localStorage.getItem("toDoArray")) ||[];
display()

var toDoArray = [];
submitButton.addEventListener("click", addItemToArr);

inputText.addEventListener("keypress", (event) => {
    //extra :  event.target.value is same inputText.value
    if (event.key == "Enter") {
        addItemToArr()
    }
})
function addItemToArr() {
    if (inputText.value != "") {
        toDoArray.push(inputText.value);
        localStorage.setItem("toDoArray",JSON.stringify(toDoArray))

    }
    inputText.value = ""
    display();
}

function display() {
    toDoList.innerHTML = ""

    toDoArray.map((curr, i) => {
    var listItem = `<li id="item${i}">
    <div>${curr}</div>
    
  <div>
  <span onclick="deleteItem(${i})">&times;</span>
    <span>|</span>
    <span onclick="addItem(${i})">Edit</span>
  </div>

</li>`

        toDoList.innerHTML += listItem
    })
    localStorage.setItem("toDoArray",JSON.stringify(toDoArray))

}

function deleteItem(i) {
    toDoArray.splice(i, 1)
    display()
    localStorage.setItem("toDoArray",JSON.stringify(toDoArray))
}

function addItem(i) {
    var newValue = prompt("Enter a new value")
    toDoArray.splice(i, 1, newValue)
    display()
    localStorage.setItem("toDoArray",JSON.stringify(toDoArray))
}

document.getElementById("reset").addEventListener("click", () => {
    toDoArray = []
    display()
    localStorage.setItem("toDoArray",JSON.stringify(toDoArray))
})

//  //local storage 
// var cartArr = ["Book","Pen","Eraser"]
// localStorage.setItem("cart",JSON.stringify(cartArr))

// cartArr.push("scale")
// localStorage.setItem("cart",JSON.stringify(cartArr))
// console.log(cartArr)

// var tempArr = JSON.parse(localStorage.getItem)
// console.log(tempArr)

// //sessionstorage
// var cartArr = ["Book","Pen","Eraser"]
// sessionStorage.setItem("cart",JSON.stringify(cartArr))

// cartArr.push("scale")
// sessionStorage.setItem("cart",JSON.stringify(cartArr))
// console.log(cartArr)

// var tempArr = JSON.parse(sessionStorage.getItem)
// console.log(tempArr)
 
var arr =JSON.parse(localStorage.getItem("toDoArray"))


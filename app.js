

var inputText=document.getElementById("input")
var submitButton =document.getElementById("button")
var toDoList=document.getElementById("todolist")

var toDoArray=[];
submitButton.addEventListener("click",addItemToArr);

inputText.addEventListener("keypress",(event)=>{
    //extra :  event.target.value is same inputText.value
    if(event.key=="Enter"){
        addItemToArr()
    }
})
function addItemToArr(){
    if(inputText.value!=""){
    toDoArray.push(inputText.value);
    

}
inputText.value=""
display();
}

function display(){
   toDoList.innerHTML=""

   toDoArray.map((curr,i)=>{
    var listItem=`<li id="item ${i}">
    <div>${curr}</div>
    
  <div>
  <span onclick="deleteItem(${i})">&times;</span>
    <span>|</span>
    <span onclick="addItem(${i})">Edit</span>
  </div>

</li>`

   toDoList.innerHTML+=listItem
   })
    
}

function deleteItem(i){
   toDoArray.splice(i,1)
   display()
}

function addItem(i){
    var newValue=prompt("Enter a new value")
    toDoArray.splice(i,1,newValue)
    display()
}

document.getElementById("reset").addEventListener("click",()=>{
    toDoArray=[]
    display()
})
